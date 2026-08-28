'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react'
import type { PDFDocumentProxy } from 'pdfjs-dist'

export function PdfViewer({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const docRef = useRef<PDFDocumentProxy | null>(null)
  const [numPages, setNumPages] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [scale, setScale] = useState(1)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const pdfjs = await import('pdfjs-dist')
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs'
        const doc = await pdfjs.getDocument(src).promise
        if (cancelled) return
        docRef.current = doc
        setNumPages(doc.numPages)
        if (window.innerWidth >= 1024) setScale(1.6)
        setStatus('ready')
      } catch {
        if (!cancelled) setStatus('error')
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [src])

  useEffect(() => {
    if (status !== 'ready' || !docRef.current) return
    let cancelled = false
    async function render() {
      const page = await docRef.current!.getPage(pageNum)
      if (cancelled) return
      const viewport = page.getViewport({ scale })
      const canvas = canvasRef.current
      const context = canvas?.getContext('2d')
      if (!canvas || !context) return
      canvas.width = viewport.width
      canvas.height = viewport.height
      await page.render({ canvasContext: context, viewport }).promise
    }
    render()
    return () => {
      cancelled = true
    }
  }, [pageNum, scale, status])

  if (status === 'error') {
    return (
      <div className="pdf-viewer pdf-viewer-error">
        <p>Dokumen tidak bisa ditampilkan di sini.</p>
        <Link href={src} target="_blank" className="arrow-link">
          Buka PDF di tab baru
        </Link>
      </div>
    )
  }

  return (
    <div className="pdf-viewer">
      <div className="pdf-toolbar">
        <div className="pdf-toolbar-group">
          <button
            type="button"
            onClick={() => setPageNum((p) => Math.max(1, p - 1))}
            disabled={pageNum <= 1}
            aria-label="Halaman sebelumnya"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="pdf-page-indicator">{status === 'loading' ? '···' : `${pageNum} / ${numPages}`}</span>
          <button
            type="button"
            onClick={() => setPageNum((p) => Math.min(numPages, p + 1))}
            disabled={pageNum >= numPages}
            aria-label="Halaman berikutnya"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="pdf-toolbar-group">
          <button type="button" onClick={() => setScale((s) => Math.max(0.5, +(s - 0.2).toFixed(2)))} aria-label="Perkecil">
            <ZoomOut size={16} />
          </button>
          <span className="pdf-zoom-indicator">{Math.round(scale * 100)}%</span>
          <button type="button" onClick={() => setScale((s) => Math.min(2.4, +(s + 0.2).toFixed(2)))} aria-label="Perbesar">
            <ZoomIn size={16} />
          </button>
        </div>
        <Link href={src} target="_blank" className="pdf-toolbar-download" aria-label="Unduh PDF">
          <Download size={16} />
        </Link>
      </div>
      <div className="pdf-canvas-wrap">
        {status === 'loading' && <div className="pdf-loading">Memuat dokumen…</div>}
        <canvas ref={canvasRef} className="pdf-canvas" />
      </div>
    </div>
  )
}
