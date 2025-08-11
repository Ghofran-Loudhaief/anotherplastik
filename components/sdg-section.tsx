"use client"

import type React from "react"

import { motion } from "framer-motion"
import { HeartPulse, Users, TrendingUp, Building2, Recycle, Sun } from "lucide-react"

type Sdg = {
  no: number
  title: string
  icon: React.ReactNode
}

const SDGS: Sdg[] = [
  { no: 3, title: "Good Health & Well-being", icon: <HeartPulse className="size-5" /> },
  { no: 6, title: "Gender Equality", icon: <Users className="size-5" /> },
  { no: 8, title: "Decent work and economic growth", icon: <TrendingUp className="size-5" /> },
  { no: 11, title: "Sustainable cities and communities", icon: <Building2 className="size-5" /> },
  { no: 12, title: "Responsible consumption and production", icon: <Recycle className="size-5" /> },
  { no: 13, title: "Climate action", icon: <Sun className="size-5" /> },
]

export default function SDGSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">We design with Purpose. Globally Aligned.</h2>
          <p className="mt-2 text-neutral-700">We are committed to sustainability</p>
        </div>

        {/* SDG list as professional cards (screenshot removed) */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SDGS.map((g, i) => (
            <motion.div
              key={g.no}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="rounded-xl border bg-white p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="grid size-9 place-items-center rounded-md bg-[#1E5D46]/10 text-[#1E5D46]">{g.icon}</div>
                <div className="text-xs font-medium text-[#1E5D46]">SDG {g.no}</div>
              </div>
              <div className="mt-2 text-sm font-semibold">{g.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
