'use client'

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, Home, Images, History, Globe, ChefHat, Play, Sparkles, Hash } from 'lucide-react'

import { cn } from '@/lib/utils'
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

type NavItem = { href: string; label: string }

const routeIconMap: Record<string, React.ElementType> = {
  '/': Home,
  '/gallery': Images,
  '/history': History,
  '/diaspora': Globe,
  '/cooking': ChefHat,
  '/video': Play,
}

function NavLink({ href, label, className }: NavItem & { className?: string }) {
  if (href.startsWith('/')) {
    return <Link href={href} className={className}>{label}</Link>
  }
  return <a href={href} className={className}>{label}</a>
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

    const syncHash = () => setActiveHref(window.location.hash || '#about')
    syncHash()

    const sections = sectionItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) setActiveHref(`#${visible[0].target.id}`)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    window.addEventListener('hashchange', syncHash)
    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', syncHash)
    }
  }, [pathname, sectionItems])

  const isActive = (href: string) => {
    if (href.startsWith('/')) return pathname === href
    return activeHref === href
  }

  return (
    <header className="nav-glass fixed inset-x-0 top-0 z-[100] bg-background/85 backdrop-blur-2xl">
      {/* Top accent gradient */}
      <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[var(--color-spice)] via-[var(--color-saffron)] to-[var(--color-cobalt)]" />

      <div className="page-shell flex items-center justify-between gap-4 py-3.5">
        {/* Logo mark */}
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-spice)] to-[var(--color-saffron)] shadow-[0_4px_14px_rgba(194,74,36,0.35)] transition-shadow group-hover:shadow-[0_6px_20px_rgba(194,74,36,0.45)]">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div className="space-y-[1px]">
            <p className="font-serif text-[1.35rem] leading-none tracking-wide transition-opacity group-hover:opacity-70">
              DODALAR
            </p>
            <p className="text-[0.52rem] uppercase tracking-[0.42em] text-foreground/45">Uzbek Cuisine</p>
          </div>
        </Link>

        {/* Desktop navigation */}
        <NavigationMenu viewport={false} className="hidden lg:flex" aria-label="Primary navigation">
          <NavigationMenuList className="gap-0.5">
            {items.map((item) => {
              const active = isActive(item.href)
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild active={active} aria-current={active ? 'page' : undefined}>
                    <NavLink
                      href={item.href}
                      label={item.label}
                      className={cn(
                        'block rounded-full px-4 py-[0.45em] text-[0.82rem] font-medium transition-all duration-200',
                        active
                          ? 'bg-gradient-to-r from-[var(--color-spice)]/12 to-[var(--color-saffron)]/10 text-[var(--color-spice)] ring-1 ring-[var(--color-spice)]/20 shadow-sm'
                          : 'text-foreground/60 hover:bg-black/[0.055] hover:text-foreground'
                      )}
                    />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-black/10 bg-white/70 shadow-sm lg:hidden"
              aria-label="Open navigation"
            >
              <Menu className="icon-em" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(22rem,88vw)] border-l border-black/10 bg-[rgba(255,248,239,0.98)] px-0 shadow-2xl"
          >
            {/* Drawer top accent */}
            <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[var(--color-spice)] via-[var(--color-saffron)] to-[var(--color-cobalt)]" />

            <SheetHeader className="border-b border-black/10 px-5 pb-5 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-spice)] to-[var(--color-saffron)] shadow-md">
                  <Sparkles className="h-4.5 w-4.5 text-white" />
                </div>
                <div>
                  <SheetTitle className="font-serif text-2xl leading-none">DODALAR</SheetTitle>
                  <p className="text-[0.58rem] uppercase tracking-[0.42em] text-foreground/45">Uzbek Cuisine Project</p>
                </div>
              </div>
              <SheetDescription className="sr-only">Navigate through the project sections.</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile navigation">
              {items.map((item) => {
                const Icon = routeIconMap[item.href] ?? Hash
                const active = isActive(item.href)
                const cls = cn(
                  'flex items-center gap-3 w-full rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-150',
                  active
                    ? 'bg-gradient-to-r from-[var(--color-spice)]/12 to-[var(--color-saffron)]/8 text-[var(--color-spice)] ring-1 ring-[var(--color-spice)]/15'
                    : 'text-foreground/60 hover:bg-black/5 hover:text-foreground',
                )
                return (
                  <SheetClose asChild key={item.href}>
                    {item.href.startsWith('/') ? (
                      <Link href={item.href} className={cls} aria-current={active ? 'page' : undefined}>
                        <Icon
                          className={cn(
                            'h-[1.05rem] w-[1.05rem] shrink-0',
                            active ? 'text-[var(--color-spice)]' : 'text-foreground/35',
                          )}
                        />
                        {item.label}
                      </Link>
                    ) : (
                      <a href={item.href} className={cls} aria-current={active ? 'page' : undefined}>
                        <Hash
                          className={cn(
                            'h-[1.05rem] w-[1.05rem] shrink-0',
                            active ? 'text-[var(--color-spice)]' : 'text-foreground/35',
                          )}
                        />
                        {item.label}
                      </a>
                    )}
                  </SheetClose>
                )
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
