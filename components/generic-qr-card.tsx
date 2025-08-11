"use client"

import { QRCodeSVG } from "qrcode.react"
import { Badge } from "@/components/ui/badge"
import { Leaf, QrCode, Scale, GaugeCircle, ShieldCheck } from 'lucide-react'

export default function GenericQrCard({
  encodedUrl,
  qrSize = 150, // default QR size in px
}: {
  encodedUrl: string
  qrSize?: number
}) {
  // Add 8px to account for p-2 (0.5rem) padding around the QR box
  const gridColLeft = qrSize + 8

  return (
    <div
      className="w-full max-w-[380px] rounded-xl border bg-white p-4 shadow-sm"
      aria-label="Generic QR traceability card"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="grid size-7 place-items-center rounded-md bg-[#1E5D46] text-white">
            <Leaf className="size-4" />
          </div>
          <div className="text-sm font-semibold leading-none">Another PlastiK</div>
        </div>
        <Badge variant="secondary" className="bg-teal-100 text-teal-900">Traceable</Badge>
      </div>

      <div
        className="mt-3 grid gap-3"
        style={{ gridTemplateColumns: `${gridColLeft}px 1fr` }}
      >
        <div className="rounded-md border bg-white p-2">
          <QRCodeSVG value={encodedUrl} size={qrSize} level="M" />
        </div>
        <dl className="text-sm">
          <dt className="sr-only">Product</dt>
          <dd className="font-semibold">Another PlastiK Product</dd>

          <div className="mt-2 flex items-center gap-2">
            <Scale className="size-4 text-[#1E5D46]" />
            <div>
              <div className="text-xs text-neutral-500">Recycled plastic</div>
              <div className="font-medium">— kg (exact on product)</div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <GaugeCircle className="size-4 text-[#1E5D46]" />
            <div>
              <div className="text-xs text-neutral-500">Carbon footprint</div>
              <div className="font-medium">— kg CO₂e (per unit)</div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <QrCode className="size-4 text-[#1E5D46]" />
            <div>
              <div className="text-xs text-neutral-500">Plastic type</div>
              <div className="font-medium">HDPE / PP / PET</div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <ShieldCheck className="size-6 text-[#1E5D46]" />
            <div>
              <div className="text-xs text-neutral-500">Certifications</div>
              <div className="font-medium">ISO 14067 (target), GRS (target)</div>
            </div>
          </div>
        </dl>
      </div>

      <div className="mt-3 flex items-center justify-between text-[10px] text-neutral-500">
        <span></span>
        <span>Values vary by product</span>
      </div>
    </div>
  )
}
