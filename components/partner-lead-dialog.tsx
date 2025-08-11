"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function PartnerLeadDialog({
                                            cta = "Become a partner",
                                            icon,
                                            variant = "default",
                                          }: {
  cta?: string
  icon?: React.ReactNode
  variant?: "default" | "outline"
}) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      await fetch("/api/contact", { method: "POST", body: formData })
      setStatus("sent")
      setTimeout(() => setOpen(false), 900)
    } catch {
      setStatus("error")
    }
  }

  const Btn = (
      <Button
          className={variant === "default" ? "bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer" : "cursor-pointer"}
          variant={variant === "outline" ? "outline" : "default"}
      >
        {icon ? <span className="mr-2">{icon}</span> : null}
        {cta}
      </Button>
  )

  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{Btn}</DialogTrigger>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Partner with Another PlastiK</DialogTitle>
          </DialogHeader>
          <form onSubmit={submit} className="grid gap-3">
            <input type="hidden" name="topic" value="Partnership" />
            <div className="grid gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your full name" required />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="company">Organization</Label>
              <Input id="company" name="company" placeholder="Company / Institution" required />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="type">Partnership type</Label>
              <Input id="type" name="type" placeholder="Supply, Production, Tech/Data, Visibility..." />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell us what you’re looking to achieve" rows={4} />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <Button type="submit" disabled={status === "sending"} className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">
                {status === "sending" ? "Sending..." : "Send"}
              </Button>
              {status === "sent" && <span className="text-sm text-green-700">Thanks — we’ll get back shortly.</span>}
              {status === "error" && <span className="text-sm text-red-700">Please try again.</span>}
            </div>
          </form>
        </DialogContent>
      </Dialog>
  )
}
