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

const photos = [
  {
    src: '/1.png',
    alt: 'Plov served on a large communal platter',
    caption: 'A full kazan of plov ready for the dastarkhan',
    category: 'Food',
    color: 'var(--color-spice)',
    span: 'row-span-2',
  },
  {
    src: '/2.jpg',
    alt: 'Colorful spices at a Central Asian market',
    caption: 'Spices at a Tashkent bazaar — cumin, coriander, barberries',
    category: 'Market',
    color: 'var(--color-spice)',
    span: '',
  },
  {
    src: '/3.jpg',
    alt: 'Overhead view of a cooking preparation spread',
    caption: 'Mise en place before the zirvak begins',
    category: 'Cooking',
    color: 'var(--color-cobalt)',
    span: '',
  },
  {
    src: '/4.jpg',
    alt: 'Overhead food spread on a table',
    caption: 'Communal eating at the dastarkhan — food as social ritual',
    category: 'Culture',
    color: 'var(--color-teal)',
    span: 'row-span-2',
  },
  {
    src: '/5.webp',
    alt: 'Close-up of cooked rice grains',
    caption: 'Devzira rice — the prized grain from Fergana Valley',
    category: 'Food',
    color: 'var(--color-emerald)',
    span: '',
  },
  {
    src: '/6.jpg',
    alt: 'Grilled meat and food spread',
    caption: 'Lamb for the zirvak — the flavor foundation of osh',
    category: 'Food',
    color: 'var(--color-spice)',
    span: '',
  },
  {
    src: '/7.avif',
    alt: 'Ornate tilework on a Central Asian mosque',
    caption: 'Registan tilework, Samarkand — the same geometry appears on ceremonial serving dishes',
    category: 'Architecture',
    color: 'var(--color-cobalt)',
    span: 'row-span-2',
  },
  {
    src: '/8.webp',
    alt: 'Family cooking together in a kitchen',
    caption: 'Plov knowledge passes through watching, not reading',
    category: 'Culture',
    color: 'var(--color-teal)',
    span: '',
  },
  {
    src: '/9.webp',
    alt: 'Fresh vegetables and produce',
    caption: 'Yellow carrots — essential for authentic osh color and sweetness',
    category: 'Food',
    color: 'var(--color-emerald)',
    span: '',
  },
  {
    src: '/10.jpg',
    alt: 'Spice and goods market',
    caption: 'The bazaar as a cultural institution — plov ingredients sourced weekly',
    category: 'Market',
    color: 'var(--color-ruby)',
    span: '',
  },
  {
    src: '/11.jpg',
    alt: 'Elegant food presentation on a table',
    caption: 'Festive plov — raisins, chickpeas, and quail eggs mark the occasion',
    category: 'Food',
    color: 'var(--color-emerald)',
    span: '',
  },
  {
    src: '/12.jpg',
    alt: 'Beautiful food dish in a bowl',
    caption: 'Tashkent style — orderly, abundant, distinct grain separation',
    category: 'Food',
    color: 'var(--color-spice)',
    span: '',
  },
]

export default function GalleryPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,234,216,1),rgba(238,224,200,1))]" />
        <div className="grain-overlay absolute inset-0 opacity-20" />
      </div>

      <SiteHeader items={pageNavItems} />

      {/* Hero */}
      <section className="photo-hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/9.webp"
            alt="Gallery hero — food culture spread"
            fill
            className="object-cover"
            priority
          />
          <div className="photo-overlay-dark" />
          <div className="uzbek-pattern absolute inset-0 opacity-10" />
        </div>
        <div className="hero-shell relative z-10">
          <div className="animate-enter space-y-6 pb-10">
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-full bg-[color:var(--color-cobalt)] px-4 py-2 text-white">Photo Gallery</Badge>
              <Badge className="rounded-full bg-[color:var(--color-saffron)] px-4 py-2 text-[color:var(--color-ink)]">
                12 Images
              </Badge>
            </div>
            <h1 className="max-w-3xl font-serif text-[clamp(3.2rem,14vw,7rem)] leading-[0.9] tracking-[-0.04em] text-white">
              Plov in Images
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/75">
              A visual essay spanning food, culture, architecture, and the everyday rituals that give plov its meaning.
            </p>
            <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20">
              <Link href="/">
                <ArrowLeft className="icon-em" /> Back to project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="section-shell py-8">
        <div className="flex flex-wrap gap-3">
          {['Food', 'Market', 'Cooking', 'Culture', 'Architecture'].map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section aria-label="Photo gallery" className="section-shell pt-0">
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '260px',
          }}
        >
          {photos.map((photo, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-3xl ${photo.span}`}
              style={photo.span ? { gridRow: 'span 2' } : undefined}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span
                  className="mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: photo.color }}
                >
                  {photo.category}
                </span>
                <p className="text-sm leading-6">{photo.caption}</p>
              </figcaption>
              <span
                className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: photo.color }}
              >
                {photo.category}
              </span>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell pt-0">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-white"
          style={{ background: `linear-gradient(135deg, var(--color-cobalt), var(--color-teal))` }}
        >
          <div className="uzbek-pattern absolute inset-0 opacity-15" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Continue exploring</p>
              <h2 className="mt-2 font-serif text-4xl leading-tight">Discover the history of plov</h2>
              <p className="mt-2 max-w-lg text-white/70">
                Trace plov from ancient Silk Road trade routes to UNESCO recognition in 2016.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-full bg-[color:var(--color-saffron)] px-8 text-[color:var(--color-ink)] hover:bg-[color:var(--color-saffron)]/90"
            >
              <Link href="/history">
                Explore history <ArrowRight className="icon-em" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
