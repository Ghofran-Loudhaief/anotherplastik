"use client"

import { useMemo } from "react"
import { QRCodeSVG } from "qrcode.react"

export default function TraceQR({
  slug,
}: {
  slug: string
}) {
  // Generate a stable absolute URL for the QR
  const value = useMemo(() => {
    if (typeof window === "undefined") return `https://example.com/trace/${slug}`
    const origin = window.location.origin
    return `${origin}/trace/${slug}`
  }, [slug])

  return (
    <div className="rounded-lg border bg-white p-3">
      <QRCodeSVG value={value} size={180} level="M" />
    </div>
  )
}
