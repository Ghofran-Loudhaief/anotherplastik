"use client"

type GoogleMapEmbedProps = {
  query?: string
  zoom?: number
  className?: string
  height?: number
}

/**
 * Lightweight, responsive Google Maps embed that does not require an API key.
 * Uses the public q=...&output=embed URL.
 */
export default function GoogleMapEmbed({
  query = "Another PlastiK, Tunis, Tunisia",
  zoom = 12,
  className,
  height = 360,
}: GoogleMapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=${zoom}&output=embed`

  return (
    <div className={className}>
      <div
        className="relative w-full overflow-hidden rounded-md border"
        style={{ paddingBottom: `${(height / 640) * 100}%` }}
      >
        <iframe
          title="Google Maps"
          src={src}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        Map: {query}. Zoom: {zoom}.
      </p>
    </div>
  )
}
