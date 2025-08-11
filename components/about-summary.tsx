"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, QrCode, Cpu, Recycle, LineChart, HeartPulse, Users, TrendingUp, Building2, Sun } from "lucide-react"

export default function AboutSummary() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About us</h2>

            <div className="mt-4 text-neutral-700 space-y-3">
              <p>
                Another PlastiK is a deep‑impact startup at the intersection of cleantech, circular industrial design,
                and environmental data applications. We locally upcycle plastic waste into high‑value design objects and
                panels, and integrate QR‑based traceability and digital services to enhance transparency and engagement.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Chip icon={<Leaf className="size-4" />} label="Cleantech" />
              <Chip icon={<Recycle className="size-4" />} label="Circular industrial design" />
              <Chip icon={<Cpu className="size-4" />} label="Environmental data apps" />
              <Chip icon={<QrCode className="size-4" />} label="QR traceability & platform" />
            </div>

            <div className="mt-8">
              <h3 className="text-base sm:text-lg font-semibold">We design with Purpose. Globally Aligned.</h3>
              <p className="text-sm text-neutral-700">We are committed to sustainability</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <SdgCard no={3} title="Good Health & Well-being" icon={<HeartPulse className="size-4" />} />
                <SdgCard no={6} title="Gender Equality" icon={<Users className="size-4" />} />
                <SdgCard no={8} title="Decent work and economic growth" icon={<TrendingUp className="size-4" />} />
                <SdgCard no={11} title="Sustainable cities and communities" icon={<Building2 className="size-4" />} />
                <SdgCard no={12} title="Responsible consumption and production" icon={<Recycle className="size-4" />} />
                <SdgCard no={13} title="Climate action" icon={<Sun className="size-4" />} />
              </div>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-neutral-800">
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-[#1E5D46]"></span>
                Locally upcycled materials; co-created with Tunisian designers and artisans.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-[#1E5D46]"></span>
                Integrated QR reveals recycled plastic weight, carbon footprint, plastic type, and certifications.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-[#1E5D46]"></span>
                Digital services that educate and engage a conscious community.
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about">
                <Button variant="outline" className="cursor-pointer">Read more</Button>
              </Link>
              <Link href="/products">
                <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">
                  <LineChart className="mr-2 size-4" />
                  Explore products
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-xl border bg-white">
              <Image
                src="/apk_logo.png"
                alt="Another PlastiK logo"
                width={580}
                height={580}
                className="object-contain bg-white p-8"
                priority
              />
            </div>

            <blockquote className="rounded-xl border bg-white p-5">
              <Badge className="bg-[#1E5D46] hover:bg-[#174b38]">Our ambition</Badge>
              <p className="mt-3 text-sm text-neutral-700">
                The objective is clear: to reconcile ecology, technology, and desirability, while inspiring a new
                generation of conscious consumers and actors of the green transition.
              </p>
            </blockquote>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-xs text-neutral-700">
      <span className="grid size-6 place-items-center rounded-full bg-[#1E5D46]/10 text-[#1E5D46]">{icon}</span>
      {label}
    </span>
  )
}

function SdgCard({
  no,
  title,
  icon,
}: {
  no: number
  title: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-xl border bg-white p-3 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-md bg-[#1E5D46]/10 text-[#1E5D46]">{icon}</span>
        <span className="text-xs font-medium text-[#1E5D46]">SDG {no}</span>
      </div>
      <div className="mt-1.5 text-sm font-semibold">{title}</div>
    </div>
  )
}
