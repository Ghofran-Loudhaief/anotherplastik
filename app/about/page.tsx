import type React from "react"
import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Recycle, QrCode, Users, Leaf, LineChart, Building2, TrendingUp, HeartPulse, Sun } from "lucide-react"
import { VlogSection } from "@/components/vlog-section"

export default function Page() {
  return (
      <div className="scroll-smooth">
        <SiteNavbar />
        <main>
          {/* Hero */}
          <section className="border-b bg-neutral-50">
            <div className="container mx-auto px-4 py-12 sm:py-16">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
                <div>
                  <Badge className="bg-[#1E5D46] hover:bg-[#174b38]">About</Badge>
                  <h1 className="mt-3 text-3xl font-bold tracking-tight">
                    Transforming plastic waste into eco-designed products
                  </h1>
                  <p className="mt-3 max-w-2xl text-neutral-700">
                    We upcycle local plastic into traceable, desirable design — combining circular production, QR
                    transparency, and a community-first ecosystem.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link href="/products">
                      <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">
                        <LineChart className="mr-2 size-4" />
                        Explore products
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" className="cursor-pointer bg-transparent">
                        Partner with us
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-xl border bg-white">
                  <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about_logo-nMI4XmD1Tfk8pcPHUT6Q5doF4bekId.png"
                      alt="Another PlastiK"
                      width={900}
                      height={640}
                      className="w-full object-contain bg-white p-10"
                      priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Three pillars */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold tracking-tight">What we stand for</h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <Card className="h-full">
                  <CardHeader className="flex items-center gap-2">
                    <Recycle className="text-[#1E5D46]" />
                    <CardTitle>Circular design</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-700">
                    Locally upcycled furniture and objects. Durable, customizable, co-created with Tunisian designers.
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center gap-2">
                    <QrCode className="text-[#1E5D46]" />
                    <CardTitle>QR traceability</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-700">
                    Each product shows recycled plastic weight, carbon footprint, plastic type, and certifications
                    (targeted/achieved).
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardHeader className="flex items-center gap-2">
                    <Users className="text-[#1E5D46]" />
                    <CardTitle>Community impact</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-700">
                    Inclusion of women and youth, take‑back program for closed loops, and an educational digital platform.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Mission & Vision – compact */}
          <section className="bg-neutral-50 py-12 sm:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold tracking-tight">Mission & Vision</h2>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader className="flex items-center gap-2">
                    <Leaf className="text-[#1E5D46]" />
                    <CardTitle>Mission</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-700">
                    Transform plastic waste into smart, traceable, circular design — creating inclusive opportunities and
                    reconnecting citizens with the sustainable economy.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex items-center gap-2">
                    <LineChart className="text-[#1E5D46]" />
                    <CardTitle>Vision</CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-700">
                    Become a regional benchmark in the smart circular economy with products that are real‑time tracked,
                    certifiable, and supported by an active community.
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* SDG alignment – compact chips */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold tracking-tight">We design with purpose. Globally aligned.</h2>
              <p className="mt-2 text-neutral-700">We are committed to sustainability.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-base">
                <SdgChip no={3} title="Good Health & Well-being" icon={<HeartPulse className="size-6" />} />
                <SdgChip no={6} title="Gender Equality" icon={<Users className="size-6" />} />
                <SdgChip no={8} title="Decent work & growth" icon={<TrendingUp className="size-6" />} />
                <SdgChip no={11} title="Sustainable cities" icon={<Building2 className="size-6" />} />
                <SdgChip no={12} title="Responsible production" icon={<Recycle className="size-6" />} />
                <SdgChip no={13} title="Climate action" icon={<Sun className="size-6" />} />
              </div>
            </div>
          </section>

          {/* Team – minimal */}
          <section className="bg-neutral-50 py-12 sm:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold tracking-tight">Team</h2>
              <p className="mt-2 text-neutral-700">Core team behind Another PlastiK.</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {["Asma Ons Chafter", "Aisha Hriz", "Eya Hadj Hassen"].map((name) => (
                    <Card key={name} className="overflow-hidden">
                      <CardContent className="p-0">
                        <Image
                            src="/portrait-placeholder-team.png"
                            alt={`${name} portrait placeholder`}
                            width={480}
                            height={320}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                          <div className="font-semibold">{name}</div>
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Vlog — integrated just after Team */}
          <VlogSection
              heading="Vlogs — Behind the Build"
              subheading="See how we craft eco-designed products from plastic waste."
          />

          {/* CTA */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
              <div className="rounded-2xl border bg-white p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Ready to co‑create circular design with us?
                </h3>
                <p className="mt-2 text-neutral-700">
                  Let’s build beautiful, functional, measurable, and connected products.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Link href="/contact">
                    <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">Contact</Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="outline" className="cursor-pointer">Products & Services</Button>
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

function SdgChip({
                   no,
                   title,
                   icon,
                 }: {
  no: number
  title: string
  icon: React.ReactNode
}) {
  return (
      <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm text-neutral-800">
      <span className="grid size-7 place-items-center rounded-md bg-[#1E5D46]/10 text-[#1E5D46]">{icon}</span>
      <span className="font-medium text-[#1E5D46]">SDG {no}</span>
      <span className="text-neutral-700">{title}</span>
    </span>
  )
}
