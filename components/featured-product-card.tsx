"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import QrTraceCard from "@/components/qr-trace-card"

type Props = {
  title: string
  image: string
  bullets: string[]
  slug: string
  weightKg: number
  carbonKgCO2e: number
  plasticType: string
  certifications: string[]
}

export default function FeaturedProductCard({
  title,
  image,
  bullets,
  slug,
  weightKg,
  carbonKgCO2e,
  plasticType,
  certifications,
}: Props) {
  const encodedUrl =
    typeof window === "undefined" ? `https://example.com/trace/${slug}` : `${window.location.origin}/trace/${slug}`

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <CardContent className="p-0">
        <Image
            src={image || "/placeholder.svg?height=320&width=640&query=recycled%20plastic%20product"}
            alt={title}
            width={640}
            height={420}
            className="h-89 w-full"
        />
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold">{title}</div>
            <Badge variant="secondary" className="bg-teal-100 text-teal-900">
              Custom
            </Badge>
          </div>

          <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-neutral-700">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="mt-4 flex gap-2">
            <Link href="/contact">
              <Button size="sm" className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">
                Request quote
              </Button>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" variant="outline" className="cursor-pointer">
                  Traceability
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{title} • QR Traceability</DialogTitle>
                </DialogHeader>
                <div className="max-h-[70vh] overflow-y-auto">
                  <QrTraceCard
                    productName={title}
                    encodedUrl={encodedUrl}
                    weightKg={weightKg}
                    carbonKgCO2e={carbonKgCO2e}
                    plasticType={plasticType}
                    certifications={certifications}
                  />
                  <div className="mt-3 flex items-center justify-between text-xs text-neutral-600">
                    <span>Scan the QR to view live metrics and return options.</span>
                    <Link href={`/trace/${slug}`} className="text-[#1E5D46] hover:underline">
                      Open full traceability page →
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
