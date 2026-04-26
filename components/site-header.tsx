'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

type NavItem = {
  href: string
  label: string
}

function NavLink({ href, label, className }: NavItem & { className?: string }) {
  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  )
}

export function SiteHeader({ items }: { items: NavItem[] }) {
  const pathname = usePathname()
  const sectionItems = useMemo(() => items.filter((item) => item.href.startsWith('#')), [items])
  const [activeHref, setActiveHref] = useState<string>('')

  useEffect(() => {
    if (pathname !== '/') {
      setActiveHref('')
      return
    }

    const syncHash = () => {
      setActiveHref(window.location.hash || '#about')
    }

    syncHash()

    const sections = sectionItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.6],
      },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('hashchange', syncHash)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncHash)
    }
  }, [pathname, sectionItems])

  const isActive = (href: string) => {
    if (href.startsWith('/')) {
      return pathname === href
    }

    return activeHref === href
  }

  return (
    <header className="nav-glass fixed inset-x-0 top-0 z-[100] border-b border-black/10 bg-background/80 backdrop-blur-2xl">
      <div className="page-shell flex items-center justify-between gap-3 py-3">
        <div className="min-w-0 space-y-1">
          <p className="text-[0.625rem] uppercase tracking-[0.45em] text-foreground/60">Uzbek Cuisine Project</p>
          <Link href="/" className="inline-block font-serif text-2xl leading-none transition-opacity hover:opacity-75">
            DODALAR
          </Link>
        </div>

        <NavigationMenu viewport={false} className="hidden md:flex" aria-label="Primary navigation">
          <NavigationMenuList className="gap-2">
            {items.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  asChild
                  active={isActive(item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="magnetic-link rounded-full px-[1em] py-[0.55em] text-sm"
                >
                  <NavLink {...item} />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-black/10 bg-white/70 md:hidden"
              aria-label="Open navigation"
            >
              <Menu className="icon-em" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(20rem,86vw)] border-l border-black/10 bg-[rgba(255,248,239,0.98)] px-0">
            <SheetHeader className="border-b border-black/10 px-5 pb-4">
              <SheetTitle className="font-serif text-2xl">DODALAR</SheetTitle>
              <SheetDescription>Navigate through the project sections.</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-3 py-4" aria-label="Mobile navigation">
              {items.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Button
                    asChild
                    variant="ghost"
                    className="justify-start rounded-[1em] px-[1em] py-[1.35em] text-left text-base"
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    <NavLink {...item} />
                  </Button>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
