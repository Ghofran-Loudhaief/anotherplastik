"use client"

import type React from "react"

import { useRef } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Leaf, QrCode, Scale, GaugeCircle, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export type QrTraceCardProps = {
  productName: string
  encodedUrl: string
  weightKg: number
  carbonKgCO2e: number
  plasticType: string
  certifications: string[]
  className?: string
}

/**
 * QR Traceability Card (single detailed layout)
 * - Shows QR + key metrics + download as SVG
 */
export default function QrTraceCard({
  productName,
  encodedUrl,
  weightKg,
  carbonKgCO2e,
  plasticType,
  certifications,
  className,
}: QrTraceCardProps) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  function downloadSVG() {
    const svg = svgRef.current
    if (!svg) return
    const serializer = new XMLSerializer()
    const source = serializer.serializeToString(svg)
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${productName.replace(/\s+/g, "-").toLowerCase()}-qr.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex items-center justify-between gap-2">
        <CardTitle className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-md bg-[#1E5D46] text-white">
            <Leaf className="size-4" />
          </div>
          <span>{productName}</span>
        </CardTitle>
        <Badge variant="secondary" className="bg-teal-100 text-teal-900">
          Traceable
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-[200px_1fr]">
          <div className="flex flex-col items-center">
            <div className="rounded-md border p-2 bg-white">
              <QRCodeSVG value={encodedUrl} size={164} includeMargin={false} level="M" ref={svgRef as any} />
            </div>
            <Button onClick={downloadSVG} variant="outline" size="sm" className="mt-3 bg-transparent cursor-pointer">
              <Download className="mr-2 size-4" />
              Download SVG
            </Button>
            <div className="mt-2 text-xs text-neutral-500">Scan to trace</div>
          </div>
          <div className="grid gap-4 text-sm">
            <Metric
              icon={<Scale className="size-4 text-[#1E5D46]" />}
              label="Exact weight of recycled plastic"
              value={`${weightKg.toFixed(2)} kg`}
            />
            <Metric
              icon={<GaugeCircle className="size-4 text-[#1E5D46]" />}
              label="Product’s carbon footprint"
              value={`${carbonKgCO2e.toFixed(2)} kg CO₂e`}
            />
            <Metric
              icon={<QrCode className="size-4 text-[#1E5D46]" />}
              label="Type of plastic used"
              value={plasticType}
            />
            <Metric
              icon={<ShieldCheck className="size-4 text-[#1E5D46]" />}
              label="Certifications targeted or achieved"
              value={certifications.join(", ") || "—"}
            />
            <p className="mt-2 text-xs text-neutral-500">
              Scan the QR code to view live metrics, methodology, and return-to-recycle options.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border bg-white p-3">
      <div className="grid size-8 place-items-center rounded-md bg-[#1E5D46]/10 text-[#1E5D46]">{icon}</div>
      <div>
        <div className="text-xs text-neutral-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  )
}
