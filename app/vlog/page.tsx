import SiteNavbar from "@/components/site-navbar"
import SiteFooter from "@/components/site-footer"
import VlogCard from "@/components/vlog-card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="scroll-smooth">
      <SiteNavbar />
      <main>
        <section className="py-12 sm:py-16 bg-neutral-50 border-b">
          <div className="container mx-auto px-4">
            <Badge className="bg-[#1E5D46] hover:bg-[#174b38]">Vlog</Badge>
            <h1 className="mt-3 text-3xl font-bold tracking-tight">Vlog videos</h1>
            <p className="mt-2 text-neutral-700 max-w-3xl">
              Stories from our workshops, product builds, community actions, and traceability demos.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <VlogCard
                title="Making the Salambô stool"
                description="From recycled plastic flakes to a durable, modular seat co-created with Tunisian designers."
                thumbnailSrc="/recycled-plastic-stool-workshop.png"
                youtubeId="a1b2c3d4e5"
                date="2025"
                tags={["Product", "Workshop"]}
              />
              <VlogCard
                title="QR traceability walkthrough"
                description="How we track recycled plastic weight, carbon footprint, and certifications."
                thumbnailSrc="/qr-traceability-dashboard-scan.png"
                youtubeId="f6g7h8i9j0"
                date="2025"
                tags={["Tech", "Data"]}
              />
              <VlogCard
                title="Community collection day"
                description="Citizens, students, and creators gathering plastic waste for local transformation."
                thumbnailSrc="/tunis-plastic-collection.png"
                youtubeId="k1l2m3n4o5"
                date="2025"
                tags={["Community"]}
              />
              <VlogCard
                title="Circular recovery explained"
                description="What our take-back service looks like and how we close the loop."
                thumbnailSrc="/circular-recovery-take-back.png"
                youtubeId="p6q7r8s9t0"
                date="2025"
                tags={["Circularity"]}
              />
              <VlogCard
                title="FR: Mission & Vision"
                description="Notre ambition pour une économie circulaire intelligente et traçable."
                thumbnailSrc="/mission-vision-team.png"
                youtubeId="u1v2w3x4y5"
                date="2025"
                tags={["Français", "Talk"]}
              />
              <VlogCard
                title="Studio tour"
                description="A quick look at prototyping, molding, and finishing stations."
                thumbnailSrc="/plastic-upcycling-studio.png"
                youtubeId="z6a7b8c9d0"
                date="2025"
                tags={["Behind the scenes"]}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
