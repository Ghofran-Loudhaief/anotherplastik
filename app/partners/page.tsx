import type React from "react"
import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"
import PartnerLeadDialog from "@/components/partner-lead-dialog"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Handshake,
    Recycle,
    Factory,
    Cpu,
    Megaphone,
    ShieldCheck,
    LineChart,
    Globe,
    Leaf,
    ArrowRight,
} from "lucide-react"

export default function Page() {
    return (
        <div className="scroll-smooth">
            <SiteNavbar />
            <main>
                {/* Hero */}
                <section className="py-12 sm:py-16 bg-neutral-50 border-b">
                    <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                        <div>
                            <Badge className="bg-[#1E5D46] hover:bg-[#174b38]">Partners</Badge>
                            <h1 className="mt-3 text-3xl font-bold tracking-tight">
                                Let’s build the smart circular economy — together
                            </h1>
                            <p className="mt-2 max-w-2xl text-neutral-700">
                                We team up with sorting centers, makers, data experts, and cultural institutions to transform plastic
                                waste into desirable, traceable design — and measurable impact.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <PartnerLeadDialog cta="Become a partner" icon={<Handshake className="size-4" />}  />
                                <a href="/contact" className="inline-flex">
                                    <Button variant="outline">Book a call</Button>
                                </a>
                            </div>
                            <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                <Kpi label="Recycled plastics" value="HDPE • PP • PET" />
                                <Kpi label="Production model" value="Local + modular" />
                                <Kpi label="Traceability" value="QR + carbon data" />
                            </div>
                        </div>

                        {/* Creative partnership icons instead of logos */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="rounded-lg border bg-white p-4 grid place-items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <Recycle className="size-8 text-[#1E5D46]" />
                                    <span className="text-xs font-medium text-neutral-600">Supply</span>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-white p-4 grid place-items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <Factory className="size-8 text-[#1E5D46]" />
                                    <span className="text-xs font-medium text-neutral-600">Production</span>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-white p-4 grid place-items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <Cpu className="size-8 text-[#1E5D46]" />
                                    <span className="text-xs font-medium text-neutral-600">Tech</span>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-white p-4 grid place-items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <Megaphone className="size-8 text-[#1E5D46]" />
                                    <span className="text-xs font-medium text-neutral-600">Visibility</span>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-white p-4 grid place-items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <Globe className="size-8 text-[#1E5D46]" />
                                    <span className="text-xs font-medium text-neutral-600">Impact</span>
                                </div>
                            </div>
                            <div className="rounded-lg border bg-white p-4 grid place-items-center">
                                <div className="flex flex-col items-center gap-2">
                                    <Leaf className="size-8 text-[#1E5D46]" />
                                    <span className="text-xs font-medium text-neutral-600">Circular</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why partner */}
                <section className="py-12 sm:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold tracking-tight">Why partner with Another PlastiK?</h2>
                        <div className="mt-6 grid gap-6 lg:grid-cols-4">
                            <Benefit icon={<ShieldCheck className="text-[#1E5D46]" />} title="Reliable & traceable">
                                Transparent QR data: recycled weight, CO₂e, plastic type, certifications.
                            </Benefit>
                            <Benefit icon={<LineChart className="text-[#1E5D46]" />} title="Measurable CSR">
                                Communicate impact with simple metrics and take‑back proof.
                            </Benefit>
                            <Benefit icon={<Factory className="text-[#1E5D46]" />} title="Local production">
                                Agile prototyping, modular series, and repairable design.
                            </Benefit>
                            <Benefit icon={<Megaphone className="text-[#1E5D46]" />} title="Visibility & culture">
                                Stories, exhibitions, and community engagement to amplify impact.
                            </Benefit>
                        </div>
                    </div>
                </section>

                {/* Partnership categories */}
                <section className="py-12 sm:py-16 bg-neutral-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold tracking-tight">Partnership avenues</h2>
                        <div className="mt-6 grid gap-6 lg:grid-cols-2">
                            <PartnerCard
                                icon={<Recycle className="text-[#1E5D46]" />}
                                title="1. Supply partners"
                                bullets={[
                                    "Stable, traceable local plastic feedstock",
                                    "Joint sorting & quality protocols",
                                    "Community collection programs",
                                ]}
                            />
                            <PartnerCard
                                icon={<Factory className="text-[#1E5D46]" />}
                                title="2. Production partners"
                                bullets={[
                                    "Fablabs, workshops, technical institutes",
                                    "Micro‑series, pre‑industrialization support",
                                    "Local artisans & designers network",
                                ]}
                            />
                            <PartnerCard
                                icon={<Cpu className="text-[#1E5D46]" />}
                                title="3. Tech & environmental data"
                                bullets={[
                                    "LCA expertise (ISO 14067), GRS advisory",
                                    "QR platform & product data integrations",
                                    "Research collaborations",
                                ]}
                            />
                            <PartnerCard
                                icon={<Megaphone className="text-[#1E5D46]" />}
                                title="4. Visibility & distribution"
                                bullets={[
                                    "Cultural venues, galleries, festivals",
                                    "Sustainable retailers & hospitality",
                                    "Media, incubators, foundations",
                                ]}
                            />
                        </div>
                    </div>
                </section>

                {/* How we work */}
                <section className="py-12 sm:py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold tracking-tight">How we work — fast and transparent</h2>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Step no={1} title="Scoping">
                                Goals, materials, volumes, timelines. We map feasibility together.
                            </Step>
                            <Step no={2} title="Design">
                                Co‑design, prototyping, and testing with local makers.
                            </Step>
                            <Step no={3} title="Traceability">
                                QR setup with recycled weight, CO₂e, and certification targets.
                            </Step>
                            <Step no={4} title="Deploy & report">
                                Delivery, take‑back, and simple impact reporting for CSR.
                            </Step>
                        </div>
                    </div>
                </section>

                {/* CSR + Impact blurb */}
                <section className="py-12 sm:py-16 bg-neutral-50">
                    <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
                        <div className="rounded-2xl border bg-white p-6">
                            <div className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-neutral-700">
                                <Globe className="size-4 text-[#1E5D46]" />
                                CSR & Sustainability
                            </div>
                            <h3 className="mt-3 text-xl font-bold tracking-tight">Co‑branded impact you can share</h3>
                            <p className="mt-2 text-neutral-700">
                                We provide simple visuals and metrics for your reporting: recycled content, CO₂e per unit, and take‑back
                                results — all QR‑verifiable.
                            </p>
                            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-800">
                                <li>QR pages for each item, with batch and material source</li>
                                <li>Exportable assets for social and board updates</li>
                                <li>Educational content for staff and audiences</li>
                            </ul>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <PartnerLeadDialog variant="outline" cta="Request partner deck" />
                                <a href="/contact" className="inline-flex">
                                    <Button className="bg-[#1E5D46] hover:bg-[#174b38]">
                                        Get started <ArrowRight className="ml-2 size-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-xl border bg-white p-4 flex flex-col items-center justify-center text-center">
                                <h4 className="text-sm font-semibold">Materials we upcycle</h4>
                                <p className="mt-1 text-sm text-neutral-700">HDPE, PP, PET</p>
                            </div>
                            <div className="rounded-xl border bg-white p-4 flex flex-col items-center justify-center text-center">
                                <h4 className="text-sm font-semibold">Use cases</h4>
                                <p className="mt-1 text-sm text-neutral-700">Cafés, offices, hotels, cultural spaces</p>
                            </div>
                            <div className="rounded-xl border bg-white p-4 flex flex-col items-center justify-center text-center">
                                <h4 className="text-sm font-semibold">Geography</h4>
                                <p className="mt-1 text-sm text-neutral-700">Tunis, Tunisia (expanding regionally)</p>
                            </div>
                            <div className="rounded-xl border bg-white p-4 flex flex-col items-center justify-center text-center">
                                <h4 className="text-sm font-semibold">Programs</h4>
                                <p className="mt-1 text-sm text-neutral-700">Take‑back, education, co‑design</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="rounded-2xl border bg-white p-6 sm:p-8 text-center">
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Ready to partner?</h3>
                            <p className="mt-2 text-neutral-700">
                                Let’s turn plastic waste into value — with transparent data and powerful storytelling.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                                <PartnerLeadDialog />
                                <a href="/contact" className="inline-flex">
                                    <Button variant="outline">Talk to us</Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </div>
    )
}

function Kpi({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-xl border bg-white p-4">
            <div className="text-xs text-neutral-500">{label}</div>
            <div className="mt-0.5 text-base font-semibold">{value}</div>
        </div>
    )
}

function Benefit({
                     icon,
                     title,
                     children,
                 }: {
    icon: React.ReactNode
    title: string
    children: React.ReactNode
}) {
    return (
        <Card>
            <CardHeader className="flex items-center gap-2">
                {icon}
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-700">{children}</CardContent>
        </Card>
    )
}

function PartnerCard({
                         icon,
                         title,
                         bullets,
                     }: {
    icon: React.ReactNode
    title: string
    bullets: string[]
}) {
    return (
        <Card className="h-full">
            <CardHeader className="flex items-center gap-2">
                {icon}
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-neutral-700 space-y-3">
                <ul className="list-disc pl-5 space-y-1">
                    {bullets.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                </ul>
                <PartnerLeadDialog variant="outline" cta="Start partnership" />
            </CardContent>
        </Card>
    )
}

function Step({ no, title, children }: { no: number; title: string; children: React.ReactNode }) {
    return (
        <div className="rounded-xl border bg-white p-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">
                <Leaf className="size-4 text-[#1E5D46]" />
                Step {no}
            </div>
            <div className="mt-2 font-semibold">{title}</div>
            <div className="text-sm text-neutral-700">{children}</div>
        </div>
    )
}
