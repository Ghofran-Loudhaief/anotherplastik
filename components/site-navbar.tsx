"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, ShoppingBag, Users, Handshake } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
]

export default function SiteNavbar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Another PlastiK home">
          <Image
              src="/apk.png"
              alt="A.P.K. logo"
              width={80}
              height={80}
              className="h-20 w-auto object-contain"
          />
          <span className="sr-only">Another PlastiK</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors hover:bg-neutral-100",
                pathname === l.href ? "bg-neutral-100 text-[#1E5D46] font-medium" : "text-neutral-700",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link href="/products">
            <Button className="bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">
              <ShoppingBag className="mr-2 size-4" />
              Shop Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="cursor-pointer">
              <Handshake className="mr-2 size-4" />
              B2B Inquiries
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="mt-6 grid gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "px-3 py-2 rounded-md hover:bg-neutral-100",
                      pathname === l.href ? "bg-neutral-100 text-[#1E5D46] font-medium" : "text-neutral-700",
                    )}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="/products">
                  <Button className="w-full mt-2 bg-[#1E5D46] hover:bg-[#174b38] cursor-pointer">
                    <ShoppingBag className="mr-2 size-4"/>
                    Shop Products
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full mt-1 bg-transparent cursor-pointer">
                    <Users className="mr-2 size-4" />
                    Join Community
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
