"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayCircle, Clock, CalendarDays, Tag, Share2, ExternalLink, Youtube } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"

type Vlog = {
  id: string
  title: string
  description?: string
  youtubeId: string
  date: string
  duration: string
  tags?: string[]
  author?: string
  thumbnail?: string
}

export type VlogSectionProps = {
  heading?: string
  subheading?: string
  ctaHref?: string
  ctaLabel?: string
  className?: string
  vlogs?: Vlog[]
}

/**
 * VlogSection
 * - Drop this right AFTER your Team section: <VlogSection />
 * - Customize via the vlogs prop or use defaults to get started.
 */
export function VlogSection({
  heading = "Vlog — Behind the build",
  subheading = "Follow our process from plastic waste to eco-designed products.",
  ctaHref = "/contact",
  ctaLabel = "Pitch your idea",
  className,
  vlogs = DEFAULT_VLOGS,
}: VlogSectionProps) {
  const [open, setOpen] = React.useState(false)
  const [activeVideo, setActiveVideo] = React.useState<Vlog | null>(null)
  const { toast } = useToast()

  function onWatch(v: Vlog) {
    setActiveVideo(v)
    setOpen(true)
  }

  async function onShare(v: Vlog) {
    const url = `https://www.youtube.com/watch?v=${v.youtubeId}`
    try {
      await navigator.clipboard.writeText(url)
      toast({
        title: "Link copied",
        description: "Vlog link copied to clipboard.",
      })
    } catch {
      toast({
        title: "Could not copy",
        description: "Your browser prevented copying. Try manually.",
        variant: "destructive",
      })
    }
  }

  return (
    <section aria-labelledby="vlog-heading" className={cn("bg-neutral-50 py-12 sm:py-16", className)}>
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="vlog-heading" className="mt-3 text-2xl font-bold tracking-tight">
              {heading}
            </h2>
            <p className="mt-2 text-neutral-700">{subheading}</p>
          </div>
          <div className="hidden sm:block">
            <Link href={ctaHref} className="cursor-pointer">
              <Button variant="outline" className="cursor-pointer bg-transparent">
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vlogs.map((v) => (
            <Card key={v.id} className="overflow-hidden">
              <button
                type="button"
                onClick={() => onWatch(v)}
                className="group relative aspect-video w-full"
                aria-label={`Watch vlog: ${v.title}`}
              >
                <Image
                  src={
                    v.thumbnail ||
                    "/placeholder.svg?height=360&width=640&query=vlog%20making%20products%20workshop" ||
                    "/placeholder.svg"
                  }
                  alt={v.title}
                  fill
                  className="object-contain scale-100 transition group-hover:brightness-95"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0" />
                <span className="absolute right-2 top-2 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white">
                  {v.duration}
                </span>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#1E5D46] shadow-sm transition group-hover:scale-105">
                  <PlayCircle className="size-6 cursor-pointer" aria-hidden="true" />
                  <span className="sr-only">Play video</span>
                </span>
              </button>
              <CardHeader className="pb-0">
                <CardTitle className="line-clamp-2">{v.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-3">
                {v.description ? <p className="line-clamp-2 text-sm text-neutral-700">{v.description}</p> : null}

                <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-600">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="size-4 text-[#1E5D46]" />
                    <span>{v.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-4 text-[#1E5D46]" />
                    <span>{v.duration}</span>
                  </span>
                  {v.author ? (
                    <span className="inline-flex items-center gap-1">
                      <Youtube className="size-4 text-[#1E5D46]" />
                      <span>{v.author}</span>
                    </span>
                  ) : null}
                </div>

                {v.tags && v.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {v.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded-full border bg-white px-2 py-1 text-xs text-neutral-800"
                      >
                        <Tag className="size-3 text-[#1E5D46]" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="flex items-center gap-2 pt-1">
                  <Button onClick={() => onWatch(v)} className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">
                    <PlayCircle className="mr-2 size-4" />
                    Watch
                  </Button>
                  <Link href={`https://www.youtube.com/watch?v=${v.youtubeId}`} target="_blank" rel="noreferrer">
                    <Button variant="outline" className="cursor-pointer">
                      <ExternalLink className="mr-2 size-4" />
                      YouTube
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="ml-auto bg-transparent cursor-pointer"
                    onClick={() => onShare(v)}
                    aria-label="Copy vlog link"
                  >
                    <Share2 className="size-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href={ctaHref} className="cursor-pointer">
            <Button variant="outline" className="w-full cursor-pointer bg-transparent">
              {ctaLabel}
            </Button>
          </Link>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle className="text-lg">{activeVideo?.title}</DialogTitle>
            <DialogDescription className="text-neutral-600">{activeVideo?.description}</DialogDescription>
          </DialogHeader>
          <div className="aspect-video w-full">
            {activeVideo ? (
              <iframe
                title={activeVideo.title}
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            ) : null}
          </div>
          <div className="flex items-center justify-between px-6 pb-6 text-xs text-neutral-600">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="size-4 text-[#1E5D46]" />
              <span>{activeVideo?.date}</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-4 text-[#1E5D46]" />
              <span>{activeVideo?.duration}</span>
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

const DEFAULT_VLOGS: Vlog[] = [
  {
    id: "v1",
    title: "The Salambô Stool: From Waste to Wonder",
    description: "We turn local plastic waste into our signature Salambô stool — designed in Tunis, inspired by the sea.",
    youtubeId: "HpZRyvdAyco",
    date: "Jul 02, 2025",
    duration: "07:58",
    tags: ["Upcycling", "Furniture", "Workshop"],
    author: "Another PlastiK",
    thumbnail: "/stool.png",
  },
  {
    id: "v2",
    title: "Inside the Workshop: A Day at Another PlastiK",
    description: "From sorting flakes to polishing the final product — see the teamwork and craft behind every piece.",
    youtubeId: "HpZRyvdAyco",
    date: "Jun 18, 2025",
    duration: "06:12",
    tags: ["Workshop", "Team", "Behind the Scenes"],
    author: "Another PlastiK",
    thumbnail: "/workshop.png",
  },
  {
    id: "v3",
    title: "QR Traceability: Giving Products a Digital Story",
    description: "How scanning a QR reveals your product’s journey — materials, carbon footprint, and more.",
    youtubeId: "HpZRyvdAyco",
    date: "May 25, 2025",
    duration: "04:45",
    tags: ["Tech", "Traceability", "Sustainability"],
    author: "Another PlastiK",
    thumbnail: "/traceability.png",
  },
]

