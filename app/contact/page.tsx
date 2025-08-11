"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Mail,
  MapPin,
  Phone,
  Handshake,
  Users,
  Megaphone,
  QrCode,
  CheckCircle2,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react"
import GoogleMapEmbed from "@/components/google-map-embed"

export default function Page() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle")
  const LOCATION_NAME = "Tunis Business School"
  const MAPS_LINK = "https://maps.app.goo.gl/R52SuRshdzZGgnTX6"
  const ADDRESS = "Bir El Kasâa, El Mourouj, Ben Arous, 2074"
  const encodedAddress = encodeURIComponent(ADDRESS)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const res = await fetch("/api/contact", { method: "POST", body: formData })
      if (!res.ok) throw new Error("Request failed")
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className="scroll-smooth">
      <SiteNavbar />
      <main>
        {/* Hero */}
        <section className="py-12 sm:py-16 bg-neutral-50 border-b">
          <div className="container mx-auto px-4">
            <Badge className="bg-[#1E5D46] hover:bg-[#174b38]">Contact</Badge>
            <h1 className="mt-3 text-3xl font-bold tracking-tight">Talk to our team</h1>
            <p className="mt-2 text-neutral-700 max-w-2xl">
              Partnerships, B2B projects, media and community — we reply quickly and transparently.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-neutral-700">
              <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1">
                <QrCode className="size-4 text-[#1E5D46]" /> Traceability-first
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1">
                <CheckCircle2 className="size-4 text-[#1E5D46]" /> Fast follow-up
              </span>
            </div>
          </div>
        </section>

        {/* Contact layout (replace the existing <section className="py-12 sm:py-16"> ... </section> block AND remove the later "Map section" block) */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Row 1 — Left: How can we help? */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>How can we help?</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                <ContactRow
                  icon={<Handshake className="size-5 text-[#1E5D46]" />}
                  title="B2B projects & partnerships"
                  desc="Custom products, co-design, procurement, and take‑back."
                  action={
                    <Link href="#form" className="text-[#1E5D46] hover:underline text-sm">
                      Start your brief →
                    </Link>
                  }
                />
                <ContactRow
                  icon={<Users className="size-5 text-[#1E5D46]" />}
                  title="Community & education"
                  desc="Workshops, talks, and circular design programs."
                  action={
                    <Link href="#form" className="text-[#1E5D46] hover:underline text-sm">
                      Reach out →
                    </Link>
                  }
                />
                <ContactRow
                  icon={<Megaphone className="size-5 text-[#1E5D46]" />}
                  title="Media & press"
                  desc="Interviews, visuals, and impact stories."
                  action={
                    <Link href="#form" className="text-[#1E5D46] hover:underline text-sm">
                      Contact press →
                    </Link>
                  }
                />
              </CardContent>
            </Card>

            {/* Row 1 — Right: Form */}
            <div id="form" className="rounded-xl border bg-white p-6">
              <h2 className="text-lg font-semibold">Send us a message</h2>
              <p className="mt-1 text-sm text-neutral-600">
                Tell us about your needs and we’ll get back with next steps.
              </p>
              <form onSubmit={handleSubmit} className="mt-5 grid gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your full name" required />
                </div>

                <div className="grid gap-1.5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input id="company" name="company" placeholder="Organization" />
                  </div>
                </div>

                <div className="grid gap-1.5 sm:grid-cols-2">
                  <div className="grid gap-1.5">
                    <Label htmlFor="topic">Topic</Label>
                    <select
                      id="topic"
                      name="topic"
                      className="h-10 rounded-md border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5D46]"
                      defaultValue="B2B / Partnerships"
                      aria-label="Topic"
                    >
                      <option>B2B / Partnerships</option>
                      <option>Community / Education</option>
                      <option>Media / Press</option>
                      <option>General</option>
                    </select>
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="timeline">Timeline (optional)</Label>
                    <Input id="timeline" name="timeline" placeholder="e.g., Q4 2025, ASAP" />
                  </div>
                </div>

                <div className="grid gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project or request" rows={6} />
                </div>

                <div className="flex items-center gap-3">
                  <Button type="submit" disabled={status === "loading"} className="bg-[#1E5D46] hover:bg-[#174b38]">
                    {status === "loading" ? "Sending..." : "Send message"}
                  </Button>
                  {status === "sent" && (
                    <span className="text-sm text-green-700">Thanks! We&apos;ll get back shortly.</span>
                  )}
                  {status === "error" && (
                    <span className="text-sm text-red-700">Something went wrong. Please try again.</span>
                  )}
                </div>
              </form>
            </div>

            {/* Row 2 — Left: Direct contacts */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Direct contacts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <Mail className="size-4" /> hello@anotherplastik.com
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4" /> {ADDRESS}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-4" />
                </div>
                <div className="mt-2 flex gap-3">
                  <Link
                      href="#"
                      aria-label="Facebook"
                      className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-neutral-50"
                  >
                    <Facebook className="size-4" />
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-neutral-50"
                  >
                    <Instagram className="size-4" />
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 hover:bg-neutral-50"
                  >
                    <Linkedin className="size-4" />
                    LinkedIn
                  </Link>

                </div>
              </CardContent>
            </Card>

            {/* Row 2 — Right: Visit us (compact) */}
            <div className="rounded-xl border bg-white p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-base font-semibold">Visit us</h3>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <MapPin className="size-4 text-[#1E5D46]" />
                  {LOCATION_NAME} • {ADDRESS}
                </div>
              </div>

              {/* Functional Google Maps embed */}
              <GoogleMapEmbed className="mt-3" query={LOCATION_NAME} zoom={16} height={260} />

              <div className="mt-3 flex items-center justify-between">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#1E5D46] hover:underline"
                >
                  Open in Google Maps →
                </a>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(LOCATION_NAME)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-700 hover:underline"
                >
                  Get directions
                </a>
              </div>

              <p className="mt-2 text-[11px] text-neutral-600">Visits by appointment. Please contact us to schedule.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function ContactRow({
  icon,
  title,
  desc,
  action,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3 rounded-lg border bg-white p-3">
      <div className="grid size-9 place-items-center rounded-md bg-[#1E5D46]/10 text-[#1E5D46]">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-neutral-700">{desc}</div>
        {action && <div className="mt-1">{action}</div>}
      </div>
    </div>
  )
}
