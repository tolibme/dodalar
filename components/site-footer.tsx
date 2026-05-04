import Link from 'next/link'
import { GraduationCap, Sparkles } from 'lucide-react'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/history', label: 'History' },
  { href: '/diaspora', label: 'Diaspora' },
  { href: '/cooking', label: 'Cooking Game' },
  { href: '/video', label: 'Video' },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-black/10 bg-[var(--color-ink)] text-white">
      {/* Accent line */}
      <div className="absolute inset-x-0 top-0 h-[2.5px] bg-gradient-to-r from-[var(--color-spice)] via-[var(--color-saffron)] to-[var(--color-cobalt)]" />

      <div className="page-shell py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-spice)] to-[var(--color-saffron)] shadow-[0_4px_14px_rgba(194,74,36,0.4)]">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-serif text-2xl leading-none text-white">DODALAR</span>
            </div>
            <p className="max-w-[24ch] text-sm leading-relaxed text-white/50">
              A research project exploring how Uzbek plov carries memory, hospitality, and cultural identity across generations.
            </p>
            
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/30">Explore</p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WUT */}
          <div className="space-y-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/30">Institution</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <GraduationCap className="h-5 w-5 text-[var(--color-saffron)]" />
                </div>
                <div className="pt-0.5">
                  <p className="font-semibold leading-snug text-white/90">Webster University</p>
                  <p className="text-sm leading-snug text-white/55">in Tashkent</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-saffron)]" />
                    AI notice
                  </div>
                  <p className="mt-2 text-xs leading-snug text-white/45">
                    AI was used to support select features and content refinement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-[0.72rem] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DODALAR · Uzbek Cuisine Project</p>
          <div className="flex flex-col gap-1 sm:items-end">
            <p>Webster University in Tashkent (ILC 2250 course)</p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
