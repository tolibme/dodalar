import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Quote } from 'lucide-react'
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

const stories = [
  {
    location: 'New York, USA',
    flag: '🇺🇸',
    title: 'The smell of the oil hitting the pan',
    quote:
      'You walk into the apartment and the smell hits you first — onions in cotton oil, the moment it starts to brown. It does not matter that you are in Brooklyn. You are home.',
    description:
      'Uzbek immigrant communities in New York City gather regularly for communal plov. The dish maintains its social function: the cook is always a man, preparation takes hours, and no one eats until the kazan is brought to the table. Sourcing yellow carrots — not the orange supermarket variety — becomes a weekly ritual that connects shopping to home.',
    src: '/3.jpg',
    alt: 'Family cooking together in a kitchen',
    color: 'var(--color-cobalt)',
  },
  {
    location: 'Berlin, Germany',
    flag: '🇩🇪',
    title: 'My grandmother never measured anything',
    quote:
      'I called her every step of the way the first time I made it here. She laughed because I kept asking how much. She said: you will know by the smell. You will know by how it looks.',
    description:
      'For second-generation Uzbek families in Germany, plov preparation often involves long phone calls with relatives back home. The recipe is never written — it is transmitted through conversation, correction, and repetition. The act of cooking becomes a form of long-distance kinship maintenance.',
    src: '/4.jpg',
    alt: 'Communal food spread on a family table',
    color: 'var(--color-teal)',
  },
  {
    location: 'Seoul, South Korea',
    flag: '🇰🇷',
    title: 'Finding devzira rice in another language',
    quote:
      'I spent three months going to different markets before I found a rice that behaved the way I expected. I could not describe what I was looking for in Korean. I kept saying: it must be this color, this weight.',
    description:
      'Ingredient substitution is one of the most documented aspects of diasporic plov. Without devzira rice, cooks in East Asia often test medium-grain Japanese rice varieties. Without yellow carrots, they use orange and adjust the cooking time. The dish changes, but its structure — the sequence, the zirvak, the steaming — remains consistent across continents.',
    src: '/5.webp',
    alt: 'Rice grains close-up',
    color: 'var(--color-spice)',
  },
  {
    location: 'Toronto, Canada',
    flag: '🇨🇦',
    title: 'We made it for his teacher',
    quote:
      "Our son wanted to bring something for his class's cultural day. My husband cooked from 6 in the morning. We brought it in the kazan. The teacher had never seen rice cooked this way.",
    description:
      'In diaspora contexts, plov often becomes the representative dish at multicultural events, school functions, and community gatherings. The act of presenting plov to non-Uzbeks carries its own significance: it is an act of cultural translation, where a family explains its identity through a single dish. Children in these moments often become cultural mediators.',
    src: '/8.webp',
    alt: 'Elegant food shared at a table',
    color: 'var(--color-emerald)',
  },
]

const observations = [
  {
    label: 'Language persists',
    text: 'Even when daily language shifts to the host country, families continue using "osh" rather than the translated term. The word preserves a cultural reference that translation cannot carry.',
  },
  {
    label: 'Technique outlasts ingredients',
    text: 'Ingredient substitutions are common. The cooking sequence never changes. The zirvak structure, the layering of rice, the steam finish — these are more stable than any single ingredient.',
  },
  {
    label: 'Gender roles travel with the dish',
    text: 'In Uzbek tradition, outdoor and communal plov is cooked by men. This pattern is reproduced in diaspora settings, often unchanged, even when other domestic roles have shifted.',
  },
  {
    label: 'The dish creates occasion',
    text: 'In immigrant households, plov is not made casually. Its preparation signals that something matters — a guest is coming, a holiday must be marked, a child needs to be connected to something larger than the current address.',
  },
]

export default function DiasporaPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,234,216,1),rgba(236,220,198,1))]" />
        <div className="grain-overlay absolute inset-0 opacity-20" />
      </div>

      <SiteHeader items={pageNavItems} />

      {/* Hero */}
      <section className="photo-hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/8.webp"
            alt="Family cooking together — diaspora hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/95 via-[color:var(--color-ink)]/55 to-[color:var(--color-ink)]/15" />
          <div className="uzbek-pattern absolute inset-0 opacity-10" />
        </div>
        <div className="hero-shell relative z-10">
          <div className="animate-enter space-y-6 pb-12">
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-full bg-[color:var(--color-spice)] px-4 py-2 text-white">
                Immigration & Memory
              </Badge>
              <Badge className="rounded-full bg-[color:var(--color-saffron)] px-4 py-2 text-[color:var(--color-ink)]">
                4 Stories
              </Badge>
            </div>
            <h1 className="max-w-3xl font-serif text-[clamp(3.2rem,14vw,7rem)] leading-[0.9] tracking-[-0.04em] text-white">
              Carrying plov across borders
            </h1>
            <p className="max-w-xl text-lg leading-8 text-white/75">
              Four accounts of Uzbek immigrant families who continue making plov far from home — and what that act
              preserves, teaches, and costs.
            </p>
            <Button asChild variant="outline" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20">
              <Link href="/">
                <ArrowLeft className="icon-em" /> Back to project
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Opening statement */}
      <section className="section-shell">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/55">The central argument</p>
          <h2 className="mt-4 font-serif text-[clamp(2.2rem,8vw,3.5rem)] leading-tight">
            When families immigrate, they do not only carry objects and documents. They carry practices — and plov is
            one of the most stable of all.
          </h2>
          <p className="mt-6 text-lg leading-8 text-foreground/74">
            The stories below are composite accounts drawn from research into Uzbek immigrant communities. They
            illustrate how a single dish functions as a mechanism for identity transmission across generations and
            geographies.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="section-shell pt-0">
        <div className="space-y-16">
          {stories.map((story, i) => (
            <article
              key={story.location}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-14 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_28px_72px_rgba(0,0,0,0.16)]">
                <Image src={story.src} alt={story.alt} fill className="object-cover" />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, color-mix(in srgb, ${story.color} 80%, transparent) 0%, transparent 60%)`,
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-white">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      {story.flag} {story.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center space-y-5">
                <span
                  className="w-fit rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-white"
                  style={{ backgroundColor: story.color }}
                >
                  {story.location}
                </span>
                <h3 className="font-serif text-[clamp(1.8rem,6vw,2.75rem)] leading-tight">{story.title}</h3>

                {/* Pull quote */}
                <div
                  className="relative rounded-2xl p-6"
                  style={{ backgroundColor: `color-mix(in srgb, ${story.color} 8%, transparent)`, borderLeft: `4px solid ${story.color}` }}
                >
                  <Quote className="mb-3 h-6 w-6 opacity-40" style={{ color: story.color }} />
                  <p className="font-serif text-xl leading-8 text-foreground/85 italic">&ldquo;{story.quote}&rdquo;</p>
                </div>

                <p className="text-base leading-8 text-foreground/74">{story.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Observations panel */}
      <section className="section-shell">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-ink)] p-8 text-[color:var(--color-paper)] sm:p-12">
          <div className="uzbek-pattern absolute inset-0 opacity-10" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--color-saffron)]">
              Patterns across stories
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.2rem,8vw,3.5rem)] leading-tight">
              Four things that stay constant when everything else changes
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {observations.map((obs, i) => (
                <div
                  key={obs.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-saffron)] text-sm font-bold text-[color:var(--color-ink)]">
                    {i + 1}
                  </div>
                  <h3 className="font-serif text-2xl leading-tight">{obs.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--color-paper-muted)]">{obs.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing quote */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/12.jpg"
            alt="Cooking spread background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[color:var(--color-teal)]/90" />
          <div className="uzbek-pattern absolute inset-0 opacity-10" />
        </div>
        <div className="section-shell relative z-10 text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--color-saffron)]">Conclusion</p>
          <blockquote className="mx-auto mt-8 max-w-3xl font-serif text-[clamp(1.8rem,6vw,3.25rem)] leading-tight">
            &ldquo;The dish arrives first. The language follows. Then the memories. Plov crosses borders in the hands of
            the cook, not in a suitcase.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell">
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-white"
          style={{ background: `linear-gradient(135deg, var(--color-cobalt), var(--color-teal))` }}
        >
          <div className="uzbek-pattern absolute inset-0 opacity-10" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Back to the beginning</p>
              <h2 className="mt-2 font-serif text-4xl leading-tight">Return to the main project</h2>
              <p className="mt-2 max-w-lg text-white/70">
                Read the full analysis of plov as cultural memory, heritage, and identity.
              </p>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-full bg-[color:var(--color-saffron)] px-8 text-[color:var(--color-ink)] hover:bg-[color:var(--color-saffron)]/90"
            >
              <Link href="/">
                View main project <ArrowRight className="icon-em" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
