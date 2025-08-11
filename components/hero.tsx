"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Recycle, QrCode, Users } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  return (
      <section className="relative overflow-hidden">
        <motion.div
            style={{ y }}
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#1E5D46]/10 via-teal-200/30 to-rose-200/30"
        />
        <div className="container mx-auto px-4 py-20 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-600"
              >
                <Recycle className="size-4 text-[#1E5D46]" />
                Smart circular design. Local impact.
              </motion.div>
              <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
              >
                Transforming plastic waste into eco-designed products
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-4 max-w-xl text-neutral-600"
              >
                Locally upcycled, traceable, connected design — built for a new generation of conscious consumers and
                creators.
              </motion.p>
              <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
              >
                <Link href="/products">
                  <Button className="bg-[#1E5D46] hover:bg-[#174b38]">
                    <QrCode className="mr-2 size-4" />
                    Explore Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    <Users className="mr-2 size-4" />
                    Join the Community
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mx-auto w-full max-w-[620px]"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                    src="/sustainable-workspace.png"
                    alt="Another PlastiK sustainable design workspace showcasing eco-friendly products"
                    width={620}
                    height={500}
                    className="h-auto w-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-lg bg-white/90 backdrop-blur-sm p-4">
                    <p className="text-sm font-medium text-[#1E5D46]">Sustainable Innovation</p>
                    <p className="text-xs text-neutral-600 mt-1">From waste to wonder — every product tells a story</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
