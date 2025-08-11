"use client"

import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"
import Hero from "@/components/hero"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Recycle, QrCode, Leaf, LineChart, Users, Sparkles } from 'lucide-react'
import StorySection from "@/components/story-section"
import AboutSummary from "@/components/about-summary"

export default function Page() {
  return (
    <div className="scroll-smooth">
      <SiteNavbar />
      <main>
        <Hero />
        <AboutSummary />

        <section id="products" className="py-16 sm:py-24 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Physical Products</h2>
                <p className="mt-2 text-neutral-700">
                  Modular furniture and objects made from recycled plastic (stools, benches, tables, decorative items, etc.).
                </p>
              </div>
              <Link href="/products">
                <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">See all products</Button>
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Stools", img: "/stool.png" },
                { title: "Benches", img: "/modular-bench.png" },
                { title: "Tables", img: "/panel-tablesystem.png" },
              ].map((p) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{p.title}</span>
                        <Badge variant="secondary" className="bg-teal-100 text-teal-900">Customizable</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Image src={p.img || "/placeholder.svg"} alt={p.title} width={480} height={320} className="w-full rounded-md border object-cover" />
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <QrCode className="size-4 text-[#1E5D46]" />
                        Each product includes a traceable QR with:
                      </div>
                      <ul className="text-sm text-neutral-700 list-disc ml-5 space-y-1">
                        <li>Exact weight of recycled plastic</li>
                        <li>Product’s carbon footprint</li>
                        <li>Type of plastic used</li>
                        <li>Certifications targeted or achieved</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Improved Story section */}
        <StorySection />

        <section className="py-16 sm:py-24 bg-neutral-50">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Be part of the smart circular economy</h3>
            <p className="mt-2 text-neutral-700 max-w-2xl mx-auto">
              The objective is clear: to reconcile ecology, technology, and desirability, while inspiring a new generation of conscious consumers and actors of the green transition.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Link href="/contact"><Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer"><Sparkles className="mr-2 size-4" />B2B Inquiries</Button></Link>
              <Link href="/contact#footer"><Button variant="outline" className="cursor-pointer"><Users className="mr-2 size-4" />Join Community</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
