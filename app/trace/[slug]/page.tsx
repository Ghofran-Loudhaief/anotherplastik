"use client"

import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"
import { useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import { getTraceRecord } from "@/lib/trace-data"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Share2, ArrowLeft, Recycle, ShieldCheck, GaugeCircle, Scale, MapPin } from 'lucide-react'
import { MetricPill } from "@/components/metric-pill"
import TraceQR from "@/components/trace-qr"
import { motion } from "framer-motion"

export default function Page() {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()
  const record = useMemo(() => getTraceRecord(slug), [slug])

  if (!record) {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteNavbar />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-16">
            <Button variant="ghost" onClick={() => router.back()} className="mb-6">
              <ArrowLeft className="mr-2 size-4" /> Back
            </Button>
            <h1 className="text-2xl font-bold">Not found</h1>
            <p className="text-neutral-700 mt-2">This QR code does not match a product.</p>
          </div>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/trace/${record.slug}`
      : `https://example.com/trace/${record.slug}`

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      alert("Link copied")
    } catch {
      alert(url)
    }
  }

  async function shareLink() {
    try {
      if (navigator.share) {
        await navigator.share({ title: record.name, url })
      } else {
        await copyLink()
      }
    } catch {
      // user cancelled
    }
  }

  return (
    <div className="scroll-smooth">
      <SiteNavbar />
      <main>
        <section className="py-10 sm:py-12 bg-neutral-50 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-[#1E5D46] hover:bg-[#174b38]">Traceability</Badge>
              <span className="text-xs text-neutral-500">{record.batchId}</span>
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight">{record.name}</h1>
            <p className="mt-1 text-neutral-600">
              Live product data: recycled content, carbon footprint, material, and certifications.
            </p>
          </div>
        </section>

        <section className="py-10 sm:py-12">
          <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
            {/* Visual + Actions */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="relative overflow-hidden rounded-xl border bg-white">
                <Image
                  src={record.image || ""}
                  alt={`${record.name} product`}
                  width={1200}
                  height={720}
                  className="w-full object-cover"
                />
                <div className="absolute left-4 top-4">
                  <Badge variant="secondary" className="bg-teal-100 text-teal-900">Connected product</Badge>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button className="bg-[#1E5D46] hover:bg-[#174b38]" onClick={shareLink}>
                  <Share2 className="mr-2 size-4" />
                  Share
                </Button>
                <Button variant="outline" onClick={copyLink}>
                  <Copy className="mr-2 size-4" />
                  Copy link
                </Button>
                <Button variant="outline" asChild>
                  <a href="/contact#community">
                    <Recycle className="mr-2 size-4" />
                    Return & recycle
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* QR + Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="space-y-4"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="grid gap-6 sm:grid-cols-[200px_1fr]">
                    <div className="flex flex-col items-center">
                      <TraceQR slug={record.slug} />
                      <div className="mt-2 text-xs text-neutral-500">Scan for live metrics</div>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-start gap-3">
                        <Scale className="mt-1 size-4 text-[#1E5D46]" />
                        <div>
                          <div className="text-xs text-neutral-500">Exact weight of recycled plastic used</div>
                          <div className="font-semibold">{record.weightKg.toFixed(2)} kg</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <GaugeCircle className="mt-1 size-4 text-[#1E5D46]" />
                        <div>
                          <div className="text-xs text-neutral-500">Product’s carbon footprint</div>
                          <div className="font-semibold">{record.carbonKgCO2e.toFixed(2)} kg CO₂e</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-1 size-4 text-[#1E5D46]" />
                        <div>
                          <div className="text-xs text-neutral-500">Type of plastic used</div>
                          <div className="font-semibold">{record.plasticType}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="mt-1 size-4 text-[#1E5D46]" />
                        <div>
                          <div className="text-xs text-neutral-500">Certifications targeted or achieved</div>
                          <div className="font-semibold">{record.certifications.join(", ") || "—"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-3 sm:grid-cols-3">
                <MetricPill label="Batch" value={record.batchId || "—"} />
                <MetricPill label="Recycled source" value={record.recycledSource || "—"} />
                <MetricPill label="Made in" value={record.madeIn || "—"} />
              </div>

              <Tabs defaultValue="en" className="rounded-xl border bg-white p-4">
                <TabsContent value="en" className="mt-3 text-sm text-neutral-700">
                  This page shows transparent, verifiable metrics for this product. Return options are available to ensure a closed-loop lifecycle.
                </TabsContent>
              </Tabs>

              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <MapPin className="size-4 text-[#1E5D46]" />
                Tunis, Tunisia • {record.date}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
