import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'

const pageNavItems = [
  { href: '/', label: 'Home' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/history', label: 'History' },
  { href: '/diaspora', label: 'Diaspora' },
  { href: '/cooking', label: 'Cooking Game' },
  { href: '/video', label: 'Video' },
]

const eras = [
  {
    period: 'Ancient origins',
    years: '500s BCE – 700s CE',
    title: 'Rice arrives along the Silk Road',
    body: 'Rice cultivation spread westward from China into Central Asia through Silk Road trade networks. Early Sogdian merchants and later Persian court culture began integrating rice, fat, and meat into composite dishes. Scholars trace the earliest plov-like preparations to the Persian pilaf tradition, which itself drew on South Asian rice cooking techniques.',
    detail: 'The word "plov" derives from Turkish/Persian "pilaf," which in turn traces to Sanskrit "pulāka" — boiled rice. The linguistic path mirrors the culinary one.',
    src: '/2.jpg',
    alt: 'Ancient trade market with spices and goods',
    color: 'var(--color-cobalt)',
    accent: 'var(--color-saffron)',
  },
  {
    period: 'Timurid golden age',
    years: '1370 – 1506',
    title: 'Samarkand becomes the center of plov culture',
    body: "Timur (Tamerlane) established Samarkand as the capital of a vast empire, and the city became a crossroads of culinary traditions from Persia, India, China, and the Middle East. Court records and traveler accounts document elaborate rice feasts. Legend credits Ibn Sina (Avicenna) himself with prescribing plov as a dish capable of strengthening the body.",
    detail: "Timur reportedly demanded plov be served before major military campaigns, believing it gave soldiers sustained energy. The dish's association with hospitality and strength dates to this era.",
    src: '/7.avif',
    alt: 'Ornate Central Asian tilework and architecture',
    color: 'var(--color-teal)',
    accent: 'var(--color-saffron)',
  },
  {
    period: 'Regional crystallization',
    years: '1600s – 1900s',
    title: 'Fergana, Tashkent, and Samarkand develop distinct styles',
    body: 'As trade routes shifted and local agricultural conditions diverged, the three major regions of Uzbekistan developed recognizably distinct plov traditions. Fergana Valley, with its devzira rice and mountain lamb, produced the richest, most intensely flavored version. Tashkent style became associated with orderly presentation and balance. Samarkand style retained a layered, visually distinct approach.',
    detail: 'The devzira rice cultivar, grown only in the Fergana Valley, absorbs fat and broth differently from other varieties. Its use is considered a mark of culinary seriousness.',
    src: '/3.jpg',
    alt: 'Overhead view of cooking spread with spices and rice',
    color: 'var(--color-spice)',
    accent: 'var(--color-saffron)',
  },
  {
    period: 'Independent Uzbekistan',
    years: '1991 – 2015',
    title: 'Plov becomes a national identity marker',
    body: "Following independence in 1991, Uzbekistan's government and cultural institutions elevated plov as a symbol of national identity. Large plov centers (osh-khonas) became civic institutions. Tashkent's Besh Qozon center prepares several tons of plov daily. The dish moved from household tradition to public performance of Uzbekness.",
    detail: "When Uzbekistan wins an international sporting event, it is common for large public plov feasts to be organized. The dish functions as a collective celebration mechanism.",
    src: '/1.png',
    alt: 'Large plov serving in a communal dish',
    color: 'var(--color-emerald)',
    accent: 'var(--color-saffron)',
  },
  {
    period: 'UNESCO recognition',
    years: '2016 – present',
    title: 'Plov culture inscribed as intangible cultural heritage',
    body: "In 2016, UNESCO inscribed 'Uzbek pilaf culture and traditions' on the Representative List of the Intangible Cultural Heritage of Humanity. The inscription recognized not just the dish but the full ecosystem of practices: the specialized cookware, the ingredient sourcing, the communal cooking roles, the serving rituals, and the social meanings attached to the meal.",
    detail: "UNESCO's inscription acknowledged that plov is 'prepared and served during all important events in the life of an individual and the community.' It marked formal global recognition that a single dish could carry a civilization's memory.",
    src: '/12.jpg',
    alt: 'Communal food spread shared among people',
    color: 'var(--color-ruby)',
    accent: 'var(--color-saffron)',
  },
]

export default function HistoryPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,234,216,1),rgba(232,216,192,1))]" />
        <div className="grain-overlay absolute inset-0 opacity-20" />
      </div>

      <SiteHeader items={pageNavItems} />

      {/* Hero */}
      <section className="photo-hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/11.jpg"
            alt="Uzbek Registan tiles — history hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-cobalt)]/95 via-[color:var(--color-cobalt)]/55 to-[color:var(--color-cobalt)]/15" />
          <div className="uzbek-pattern absolute inset-0 opacity-15" />
        </div>
        <div className="hero-shell relative z-10">
          <div className="animate-enter space-y-6 pb-12">
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-full bg-[color:var(--color-saffron)] px-4 py-2 text-[color:var(--color-ink)]">
                500s BCE to present
              </Badge>
              <Badge className="rounded-full bg-white/15 px-4 py-2 text-white">5 eras</Badge>
            </div>
            <h1 className="max-w-3xl font-serif text-[clamp(3.2rem,14vw,7rem)] leading-[0.9] tracking-[-0.04em] text-white">
              A history in rice and fire
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/75">
              How plov traveled from ancient Persia through the Silk Road, survived empires, outlasted Soviet rule, and
              earned a place on UNESCO&apos;s cultural heritage list.
            </p>
            <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20">
              <Link href="/">
                <ArrowLeft className="icon-em" /> Back to project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/55">The long story</p>
          <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,3.75rem)] leading-tight">
            Plov did not appear suddenly. It evolved across millennia, shaped by trade, conquest, agriculture, and
            family kitchens.
          </h2>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-shell pt-0">
        <div className="space-y-20 lg:space-y-28">
          {eras.map((era, i) => (
            <article
              key={era.period}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                <Image
                  src={era.src}
                  alt={era.alt}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 40%, color-mix(in srgb, ${era.color} 80%, transparent) 100%)`,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-serif text-2xl leading-tight text-white">{era.years}</p>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center space-y-5">
                <div>
                  <span
                    className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white"
                    style={{ backgroundColor: era.color }}
                  >
                    {era.period}
                  </span>
                </div>
                <h3 className="font-serif text-[clamp(2rem,7vw,3rem)] leading-tight">{era.title}</h3>
                <p className="text-base leading-8 text-foreground/75">{era.body}</p>
                <div
                  className="rounded-2xl p-5 text-sm leading-7"
                  style={{ backgroundColor: `color-mix(in srgb, ${era.color} 10%, transparent)`, borderLeft: `4px solid ${era.color}` }}
                >
                  <p className="text-foreground/80 italic">{era.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quote banner */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/6.jpg"
            alt="Spice market background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[color:var(--color-ink)]/88" />
          <div className="uzbek-pattern absolute inset-0 opacity-10" />
        </div>
        <div className="section-shell relative z-10 text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--color-saffron)]">
            UNESCO Intangible Cultural Heritage · 2016
          </p>
          <blockquote className="mx-auto mt-8 max-w-3xl font-serif text-[clamp(1.8rem,6vw,3.5rem)] leading-tight">
            &ldquo;Plov culture and traditions represent the living heritage of Uzbekistan — cooked communally, shared
            collectively, and passed between generations without a single written word.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-white"
          style={{ background: `linear-gradient(135deg, var(--color-spice), var(--color-ruby))` }}
        >
          <div className="uzbek-pattern absolute inset-0 opacity-10" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Next stop</p>
              <h2 className="mt-2 font-serif text-4xl leading-tight">Plov in the diaspora</h2>
              <p className="mt-2 max-w-lg text-white/70">
                How families carry plov across borders — and what changes, and what never does.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-full bg-[color:var(--color-saffron)] px-8 text-[color:var(--color-ink)] hover:bg-[color:var(--color-saffron)]/90"
            >
              <Link href="/diaspora">
                Read diaspora stories <ArrowRight className="icon-em" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
