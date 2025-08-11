"use client"

import { QRCodeSVG } from "qrcode.react"
import { Leaf, Scale, GaugeCircle, QrCode, ShieldCheck } from 'lucide-react'
import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  encodedUrl?: string
  className?: string
  qrSize?: number
}

export default function QrHeroCard({
                                     encodedUrl,
                                     className,
                                     qrSize = 156,
                                   }: Props) {
  const value =
      encodedUrl ??
      (typeof window !== "undefined"
          ? `${window.location.origin}/products`
          : "https://example.com/products")

  return (
      <div
          className={cn(
              "relative rounded-2xl bg-gradient-to-br from-[#1E5D46]/25 via-teal-300/25 to-rose-300/25 p-[1px]",
              className
          )}
          aria-label="QR traceability preview card"
      >
        <div className="rounded-2xl border bg-white/90 p-4 sm:p-5 shadow-sm backdrop-blur">
          <div className="flex items-start gap-4 sm:gap-6">
            {/* QR block */}
            <div className="flex flex-col items-center">
              <div className="rounded-lg border bg-white p-2 shadow-sm">
                <QRCodeSVG value={value} size={qrSize} level="M" />
              </div>
              <div className="mt-2 inline-flex items-center gap-2">
              <span className="rounded-full bg-[#1E5D46]/10 px-2.5 py-1 text-xs font-medium text-[#1E5D46]">
                Scan to trace
              </span>
              </div>
            </div>

            {/* Details */}
            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#1E5D46] text-white">
                <Leaf className="size-3.5" />
              </span>
                QR Traceability • General view
              </div>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <Chip
                    icon={<Scale className="size-4 text-[#1E5D46]" />}
                    label="Recycled plastic"
                    value="— kg (exact on product)"
                />
                <Chip
                    icon={<GaugeCircle className="size-4 text-[#1E5D46]" />}
                    label="Carbon footprint"
                    value="— kg CO₂e (per unit)"
                />
                <Chip
                    icon={<QrCode className="size-4 text-[#1E5D46]" />}
                    label="Plastic type"
                    value="HDPE / PP / PET"
                />
                <Chip
                    icon={<ShieldCheck className="size-4 text-[#1E5D46]" />}
                    label="Certifications"
                    value="ISO 14067, GRS (targets)"
                />
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs">
                <Link href="/products" className="font-medium text-[#1E5D46] hover:underline">
                  How it works
                </Link>
                <Link href="/trace/salambo-stool" className="text-neutral-600 hover:underline">
                  See live example
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl blur-xl" />
      </div>
  )
}

function Chip({
                icon,
                label,
                value,
              }: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
      <div className="flex items-start gap-2 rounded-xl border bg-white px-3 py-2">
        <div className="grid size-7 place-items-center rounded-md bg-[#1E5D46]/10 text-[#1E5D46]">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-[11px] leading-4 text-neutral-500">{label}</div>
          <div className="text-sm font-medium text-neutral-900">{value}</div>
        </div>
      </div>
  )
}
