"use client"

import { motion } from "framer-motion"
import { Play } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type VlogCardProps = {
  title: string
  description?: string
  thumbnailSrc: string
  youtubeId?: string
  date?: string
  tags?: string[]
}

export default function VlogCard({
  title,
  description,
  thumbnailSrc,
  youtubeId,
  date,
  tags = [],
}: VlogCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ y: -2 }}
          className="group text-left w-full"
          aria-label={`Watch vlog: ${title}`}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-neutral-100">
            <img
              src={thumbnailSrc || "/placeholder.svg"}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/0 group-hover:bg-black/10 transition-colors">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-sm font-medium text-neutral-900 shadow-sm backdrop-blur">
                <Play className="size-4 text-[#1E5D46]" />
                Watch
              </span>
            </div>
          </div>
          <div className="mt-3">
            <h3 className="font-semibold leading-tight">{title}</h3>
            {description && (
              <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{description}</p>
            )}
            <div className="mt-2 flex flex-wrap gap-2">
              {date && (
                <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700">{date}</span>
              )}
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-teal-100 px-2.5 py-1 text-xs text-teal-900"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-lg">{title}</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          <div className="aspect-video w-full overflow-hidden rounded-lg border bg-black">
            {youtubeId ? (
              <iframe
                title={title}
                src={`https://www.youtube.com/embed/${youtubeId}`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <img
                src={thumbnailSrc || "/placeholder.svg"}
                alt={`${title} video placeholder`}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          {description && (
            <p className="mt-3 text-sm text-neutral-700">{description}</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
