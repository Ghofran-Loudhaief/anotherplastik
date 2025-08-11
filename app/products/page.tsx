import type React from "react"
import Link from "next/link"
import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"
import QrProductsCard from "@/components/qr-products-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Recycle, QrCode, RefreshCw, Wand2, PackageCheck, Truck, ShieldCheck, Leaf } from "lucide-react"
import QrTraceCard from "@/components/qr-trace-card"
import FeaturedProductCard from "@/components/featured-product-card"

export default function Page() {
  const encodedUrl =
      typeof window === "undefined"
          ? "https://example.com/products"
          : `${window.location.origin}/products`
  return (
    <div className="scroll-smooth">
      <SiteNavbar />
      <main>
        <section className="border-b bg-neutral-50">
          <div className="container mx-auto px-4 py-12 sm:py-16">
            <Badge className="bg-[#1E5D46] hover:bg-[#174b38]">Products & Services</Badge>
            <h1 className="mt-3 text-3xl font-bold tracking-tight">Circular design, made traceable</h1>
            <p className="mt-2 max-w-2xl text-neutral-700">
              Locally upcycled furniture and objects with built‑in QR traceability. Short, measurable, and beautiful by
              design.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">Request catalog</Button>
              </Link>
              <Link href="/trace/salambo-stool">
                <Button variant="outline" className="cursor-pointer">
                  <QrCode className="mr-2 size-4" />
                  See traceability example
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex items-center gap-2">
                  <Recycle className="text-[#1E5D46]" />
                  <CardTitle>Circular products</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-700">
                  Stools, benches, tables and panels made from recycled plastics. Durable, modular, customizable.
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex items-center gap-2">
                  <QrCode className="text-[#1E5D46]" />
                  <CardTitle>QR transparency</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-700">
                  Scan to see recycled weight, carbon footprint, plastic type, and certifications.
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex items-center gap-2">
                  <RefreshCw className="text-[#1E5D46]" />
                  <CardTitle>Closed‑loop service</CardTitle>
                </CardHeader>
                <CardContent className="text-neutral-700">
                  Take‑back and reintegration program to keep materials in circulation.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* QR spotlight – compact and convincing */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto grid items-center gap-8 px-4 lg:grid-cols-[1.1fr_.9fr]">
            <div className="rounded-2xl border bg-white p-6">
              <h3 className="text-xl font-bold tracking-tight">Built‑in QR traceability</h3>
              <p className="mt-2 text-neutral-700">
                Every product carries a QR label with the essentials your audience cares about.
              </p>
              <div className="mt-4 grid gap-2 text-sm text-neutral-800">
                <Chip icon={<PackageCheck className="size-4 text-[#1E5D46]" />} text="Exact recycled plastic weight" />
                <Chip icon={<Leaf className="size-4 text-[#1E5D46]" />} text="Carbon footprint (kg CO₂e)" />
                <Chip icon={<QrCode className="size-4 text-[#1E5D46]" />} text="Plastic type (HDPE / PP / PET)" />
                <Chip
                    icon={<ShieldCheck className="size-4 text-[#1E5D46]" />}
                    text="Certifications (targeted/achieved)"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/trace/salambo-stool">
                  <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">View live example</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="cursor-pointer">Add QR to your product</Button>
                </Link>
              </div>
            </div>

            <QrProductsCard encodedUrl={encodedUrl} />
          </div>
        </section>

        {/* Featured products – with traceability dialog */}
        <section className="bg-neutral-50 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <h2 className="text-2xl font-bold tracking-tight">Featured</h2>
              <Link href="/contact">
                <Button variant="outline" className="cursor-pointer">Get a quote</Button>
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((p) => (
                <FeaturedProductCard key={p.slug} {...p} />
              ))}
            </div>
          </div>
        </section>


        {/* Services strip – short and attractive */}
        <section className="bg-neutral-50 py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <ServiceChip icon={<Wand2 className="size-4" />} title="Design support" />
              <ServiceChip icon={<PackageCheck className="size-4" />} title="Customization" />
              <ServiceChip icon={<Truck className="size-4" />} title="Delivery & install" />
              <ServiceChip icon={<ShieldCheck className="size-4" />} title="Warranty & take‑back" />
            </div>
          </div>
        </section>

        {/* CTA bar */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl border bg-white p-6 text-center">
              <h3 className="text-xl font-bold tracking-tight">Let’s outfit your space sustainably</h3>
              <p className="mt-2 text-neutral-700">Fast proposals for cafés, offices, hotels, and cultural venues.</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact">
                  <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">Request proposal</Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" className="cursor-pointer">Browse more</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

const FEATURES = [
  {
    slug: "salambo-stool",
    title: "Salambô stool",
    image: "/stool.png",
    bullets: ["Recycled plastic seat", "Modular, stackable", "QR traceability"],
    weightKg: 1.85,
    carbonKgCO2e: 2.42,
    plasticType: "HDPE",
    certifications: ["ISO 14067 (target)", "GRS (target)"],
  },
  {
    slug: "modular-bench",
    title: "Modular bench",
    image: "/modular-bench.png",
    bullets: ["Indoor/outdoor", "Custom lengths & colors", "Durable, easy‑clean"],
    weightKg: 7.8,
    carbonKgCO2e: 9.5,
    plasticType: "HDPE + PP",
    certifications: ["ISO 14067 (target)"],
  },
  {
    slug: "panel-table-system",
    title: "Panel & table system",
    image: "/panel-tablesystem.png",
    bullets: ["Recycled sheet panels", "Repairable surfaces", "Bespoke sizes"],
    weightKg: 12.4,
    carbonKgCO2e: 14.8,
    plasticType: "HDPE sheets",
    certifications: ["GRS (target)"],
  },
] as const

function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2">
      <span className="grid size-7 place-items-center rounded-md bg-[#1E5D46]/10 text-[#1E5D46]">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  )
}

function ServiceChip({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border bg-white px-3 py-3">
      <span className="grid size-8 place-items-center rounded-md bg-[#1E5D46]/10 text-[#1E5D46]">{icon}</span>
      <span className="text-sm font-medium">{title}</span>
    </div>
  )
}
