"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Recycle, Layers3, Hammer, Paintbrush, QrCode, Leaf } from 'lucide-react'

export default function StorySection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])
  const y2 = useTransform(scrollYProgress, [0, 1], [45, -20])

  return (
    <section ref={ref} className="relative py-20 sm:py-28">
      <motion.div
        aria-hidden="true"
        style={{ y }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-neutral-50 to-white"
      />
      <div className="container mx-auto grid items-start gap-10 px-4 lg:grid-cols-[1.05fr_.95fr]">
        {/* Visual narrative */}
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <Image
              src="/recycled-plastic-salambo-stool.png"
              alt="Salambô stool — recycled plastic storytelling visual"
              width={1200}
              height={720}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <Badge className="bg-[#1E5D46] hover:bg-[#174b38]">Story</Badge>
              <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs text-neutral-800">
                Salambô stool - Born from the Waves
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-4 pb-4 pt-16 text-white">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 backdrop-blur">
                  <Leaf className="size-3.5" /> Recycled Plastic
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-1 backdrop-blur">
                  <QrCode className="size-3.5" /> QR Traceability
                </span>
              </div>
              <p className="mt-2 text-sm opacity-95">
                From locally collected waste to a timeless, durable object co-created with Tunisian artisans.
              </p>
            </div>
          </div>

          {/* Key stats */}
          <div className="grid gap-3 sm:grid-cols-3">
            <Stat label="Local material" value="100% recycled plastic" />
            <Stat label="Craft + tech" value="Design × QR × Data" />
            <Stat label="Return & recycle" value="Closed-loop" />
          </div>
        </motion.div>

        {/* Text and timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Salambô — Born from the Waves</h2>
          <p className="text-neutral-700">
            Crafted from recycled plastic and dyed in deep blue-green hues of Carthage’s seabed, Salambô is more than a stool — it’s a
            statement. Each piece carries a unique QR code telling its journey from waste to durable, desirable design.
          </p>

          <ol className="relative border-l pl-5">
            <Step icon={<Recycle className="size-4" />} title="Collection">
              Community and partners gather plastic waste locally.
            </Step>
            <Step icon={<Layers3 className="size-4" />} title="Sorting & Shaping">
              Material is sorted by type, cleaned, and transformed into panels or molded parts.
            </Step>
            <Step icon={<Hammer className="size-4" />} title="Design & Assembly">
              Modular components are prototyped and assembled with Tunisian designers and artisans.
            </Step>
            <Step icon={<Paintbrush className="size-4" />} title="Finish">
              Unique textures and colors inspired by the Mediterranean coastline.
            </Step>
            <Step icon={<QrCode className="size-4" />} title="Traceability">
              QR reveals recycled weight, carbon footprint, plastic type, and certifications.
            </Step>
          </ol>

          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex">
              <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">Explore Products</Button>
            </Link>
            <Link href="/trace/salambo-stool" className="inline-flex">
              <Button variant="outline" className="cursor-pointer">
                <QrCode className="mr-2 size-4" />
                Scan the example
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="text-sm font-semibold text-[#1E5D46]">{value}</div>
    </div>
  )
}

function Step({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <li className="mb-5 last:mb-0">
      <div className="absolute -left-3.5 grid size-7 place-items-center rounded-full border bg-white text-[#1E5D46]">
        {icon}
      </div>
      <div className="rounded-xl border bg-white p-4">
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm text-neutral-700">{children}</div>
      </div>
    </li>
  )
}
