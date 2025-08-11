import { cn } from "@/lib/utils"

export function MetricPill({
  label,
  value,
  className,
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={cn("rounded-xl border bg-white p-4", className)}>
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="mt-0.5 text-base font-semibold">{value}</div>
    </div>
  )
}
