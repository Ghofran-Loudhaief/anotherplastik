export type TraceRecord = {
  slug: string
  name: string
  weightKg: number
  carbonKgCO2e: number
  plasticType: string
  certifications: string[]
  image?: string
  batchId?: string
  recycledSource?: string
  madeIn?: string
  date?: string
}

export const TRACE_DATA: Record<string, TraceRecord> = {
  "salambo-stool": {
    slug: "salambo-stool",
    name: "Salambô stool",
    weightKg: 1.85,
    carbonKgCO2e: 2.42,
    plasticType: "HDPE",
    certifications: ["ISO 14067 (target)", "GRS (target)"],
    image: "/stool.png",
    batchId: "AP-SLB-2025-001",
    recycledSource: "Local sorting center + community collection",
    madeIn: "Tunis, Tunisia",
    date: "2025-07-01",
  },
  // Added featured products for working QR links
  "modular-bench": {
    slug: "modular-bench",
    name: "Modular bench",
    weightKg: 7.8,
    carbonKgCO2e: 9.5,
    plasticType: "HDPE + PP",
    certifications: ["ISO 14067 (target)"],
    image: "/modular-bench.png",
    batchId: "AP-BEN-2025-002",
    recycledSource: "Community collection + partner sorting center",
    madeIn: "Tunis, Tunisia",
    date: "2025-07-12",
  },
  "panel-table-system": {
    slug: "panel-table-system",
    name: "Panel & table system",
    weightKg: 12.4,
    carbonKgCO2e: 14.8,
    plasticType: "HDPE sheets",
    certifications: ["GRS (target)"],
    image: "/panel-tablesystem",
    batchId: "AP-PAN-2025-003",
    recycledSource: "Local recycled sheet production",
    madeIn: "Tunis, Tunisia",
    date: "2025-07-20",
  },
}

export function getTraceRecord(slug: string): TraceRecord | null {
  return TRACE_DATA[slug] ?? null
}
