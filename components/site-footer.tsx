"use client"

import type React from "react"

import Link from "next/link"
import { Instagram, Linkedin, Facebook, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function SiteFooter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle")

  async function subscribe(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) })
      setStatus("ok")
      setEmail("")
    } catch {
      setStatus("err")
    }
  }

  return (
    <footer className="border-t bg-white" id="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand + Newsletter */}
          <div>
            <div className="text-xl font-semibold text-[#1E5D46]">Another PlastiK</div>
            <p className="mt-3 text-sm text-neutral-600">Transforming plastic waste into eco-designed products.</p>

            <form onSubmit={subscribe} className="mt-5 flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <Button type="submit" className="bg-[#1E5D46] hover:bg-[#174b38]" disabled={status === "sending"}>
                {status === "sending" ? "Joining..." : "Join"}
              </Button>
            </form>
            {status === "ok" && <p className="mt-2 text-xs text-green-700">Thanks for joining!</p>}
            {status === "err" && <p className="mt-2 text-xs text-red-700">Please try again.</p>}
          </div>

          {/* Explore */}
          <div>
            <h5 className="text-sm font-semibold">Explore</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="hover:underline" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/products">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/partners">
                  Partners
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/vlog">
                  Vlog
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-sm font-semibold">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2">
                <Mail className="size-4" /> hello@anotherplastik.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4" /> Tunis, Tunisia
              </li>
            </ul>
            <div className="mt-3 flex gap-3">
              <Link href="#" aria-label="Facebook" className="p-2 rounded-md border hover:bg-neutral-50">
                <Facebook className="size-4" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2 rounded-md border hover:bg-neutral-50">
                <Instagram className="size-4" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="p-2 rounded-md border hover:bg-neutral-50">
                <Linkedin className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Another PlastiK. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
