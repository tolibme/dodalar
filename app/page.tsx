import Image from 'next/image'
import { ArrowRight, Flame, Globe, Languages, NotebookPen, UtensilsCrossed } from 'lucide-react'

const anchors = [
  { href: '#monday', label: 'Monday' },
  { href: '#identity', label: 'Identity' },
  { href: '#stories', label: 'Stories' },
  { href: '#team', label: 'Team' },
]

const pillars = [
  {
    title: 'Traditional food as an archive',
    text: 'Recipes, ingredient choices, and serving rituals preserve memory when families are far from home. A dish can carry geography, history, and family values in a form that is repeated every week.',
    icon: NotebookPen,
  },
  {
    title: 'Language lives around the table',
    text: 'Dish names, cooking instructions, blessings, and family sayings often remain in the original language. The kitchen becomes a classroom where younger generations hear culture in everyday use.',
    icon: Languages,
  },
  {
    title: 'Adaptation without erasure',
    text: 'Immigrant communities substitute ingredients and adjust techniques, but those changes do not cancel tradition. They show how identity survives by adapting while keeping meaning intact.',
    icon: Globe,
  },
]

const storyCards = [
  {
    region: 'Chinese diaspora',
    dish: 'Dumplings and noodles',
    insight:
      'Shared folding techniques, festival meals, and original dish names help families preserve collective memory even when neighborhoods and languages around them change.',
  },
  {
    region: 'Mexican immigrant households',
    dish: 'Tamales, mole, and tortillas',
    insight:
      'Cooking is often collaborative and intergenerational. Recipes become oral history, and mealtime stories reinforce pride, migration memory, and belonging.',
  },
  {
    region: 'Uzbek migrant communities',
    dish: 'Plov and non',
    insight:
      'Hospitality remains central. Serving familiar foods in a new country keeps social customs alive and protects the emotional connection to home, family, and respect.',
  },
]

const languageThreads = [
  'Original dish names preserve meaning that translation cannot fully carry.',
  'Cooking instructions are passed down in the family language during daily routines.',
  'Food words become memory triggers that connect younger generations to ancestry.',
  'Shared meals create space for stories about migration, home, and belonging.',
]

const teamNotes = [
  'Team name: DODALAR',
  'Project identity: Food Hunters',
  'Assigned theme: Food as Cultural Memory: Preserving Identity Through Immigration',
  'Delivery focus: Monday section with strong food-culture visual design',
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(197,112,54,0.20),_transparent_32%),radial-gradient(circle_at_85%_15%,_rgba(96,61,43,0.18),_transparent_24%),linear-gradient(180deg,_rgba(250,244,235,1),_rgba(243,233,217,1))]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-[linear-gradient(180deg,_rgba(58,35,25,0.18),_transparent)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.45em] text-foreground/60">Team Project</p>
            <p className="font-serif text-2xl leading-none">DODALAR</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {anchors.map((anchor) => (
              <a key={anchor.href} href={anchor.href} className="transition-opacity hover:opacity-60">
                {anchor.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section id="monday" className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14">
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground/65">
              <span className="rounded-full border border-black/10 bg-white/55 px-4 py-2">Monday Section</span>
              <span className="rounded-full border border-black/10 bg-white/55 px-4 py-2">Food Hunters</span>
            </div>
            <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.04em] md:text-8xl lg:text-[8.5rem]">
              Food as
              <span className="block text-[color:var(--color-spice)]">Cultural Memory</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/78 md:text-xl">
              Preserving identity through immigration by showing how traditional food practices and language help immigrant
              communities carry memory into a new country.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.75rem] border border-black/10 bg-white/65 p-5 shadow-[0_20px_60px_rgba(70,43,20,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-foreground/55">Core idea</p>
              <p className="mt-3 text-2xl font-semibold">Food keeps memory active.</p>
            </div>
            <div className="rounded-[1.75rem] border border-black/10 bg-white/65 p-5 shadow-[0_20px_60px_rgba(70,43,20,0.08)]">
              <p className="text-xs uppercase tracking-[0.28em] text-foreground/55">Key link</p>
              <p className="mt-3 text-2xl font-semibold">Language travels with recipes.</p>
            </div>
            <div className="rounded-[1.75rem] border border-black/10 bg-[color:var(--color-ink)] p-5 text-[color:var(--color-paper)] shadow-[0_20px_60px_rgba(34,22,17,0.2)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-paper-muted)]">Team</p>
              <p className="mt-3 text-2xl font-semibold">DODALAR aka Food Hunters</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-10 h-36 w-36 rounded-full bg-[color:var(--color-saffron)]/40 blur-3xl" />
          <div className="absolute -right-4 bottom-12 h-40 w-40 rounded-full bg-[color:var(--color-spice)]/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--color-ink)] p-3 shadow-[0_30px_90px_rgba(37,24,15,0.24)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image
                src="/food-memory-hero.jpg"
                alt="Traditional food shared across generations"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,12,9,0.08),_rgba(18,12,9,0.68))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[color:var(--color-paper)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-paper-muted)]">Visual direction</p>
                <p className="mt-3 max-w-sm font-serif text-3xl leading-tight">
                  Warm editorial storytelling inspired by kitchens, migration, and memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-6 rounded-[2rem] border border-black/10 bg-white/55 p-6 shadow-[0_20px_70px_rgba(82,50,26,0.08)] md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-[color:var(--color-ink)] p-3 text-[color:var(--color-paper)]">
              <Flame className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-foreground/55">Design statement</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Food culture, not template culture.</h2>
            </div>
          </div>
          <p className="text-base leading-8 text-foreground/78 md:text-lg">
            The page is designed like an exhibition board: textured warmth, strong serif headlines, documentary-style
            photography, and content blocks that treat recipes as archives. That keeps the design tied to food culture
            instead of looking like a generic school landing page.
          </p>
        </div>
      </section>

      <section id="identity" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Research frame</p>
            <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">How identity is preserved</h2>
          </div>
          <p className="hidden max-w-md text-right text-sm leading-7 text-foreground/65 lg:block">
            Immigration changes setting, but traditional food and language help communities keep continuity between past
            and present.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                className="rounded-[1.75rem] border border-black/10 bg-[rgba(255,255,255,0.62)] p-6 shadow-[0_18px_50px_rgba(70,43,20,0.06)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-saffron)]/30 text-[color:var(--color-ink)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight">{pillar.title}</h3>
                <p className="mt-4 text-base leading-8 text-foreground/76">{pillar.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-black/10 bg-[color:var(--color-ink)] p-8 text-[color:var(--color-paper)] shadow-[0_25px_80px_rgba(31,18,11,0.24)]">
          <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--color-paper-muted)]">Language + food</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Names, instructions, and stories stay alive in the kitchen.</h2>
          <ul className="mt-8 space-y-4">
            {languageThreads.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-7 text-[color:var(--color-paper-muted)]">
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-saffron)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[20rem] overflow-hidden rounded-[2rem] border border-black/10">
            <Image src="/food-family.jpg" alt="Family cooking together" fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(28,17,12,0.10),_rgba(28,17,12,0.60))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Family transmission</p>
              <p className="mt-3 max-w-xs text-lg leading-7">
                Recipes are often taught through voice, gesture, and repetition rather than formal writing.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white/60 p-6 shadow-[0_16px_46px_rgba(70,43,20,0.06)]">
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="h-5 w-5 text-[color:var(--color-spice)]" />
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Monday focus</p>
            </div>
            <p className="mt-5 font-serif text-3xl leading-tight">Traditional food practices are acts of remembrance.</p>
            <p className="mt-5 text-base leading-8 text-foreground/76">
              Shopping for familiar ingredients, repeating inherited cooking methods, and keeping the original names of
              dishes all help transform ordinary meals into a living record of culture.
            </p>
          </div>
        </div>
      </section>

      <section id="stories" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Examples</p>
          <h2 className="mt-3 font-serif text-5xl md:text-6xl">Community snapshots</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {storyCards.map((story) => (
            <article
              key={story.region}
              className="rounded-[1.9rem] border border-black/10 bg-white/60 p-6 shadow-[0_20px_60px_rgba(70,43,20,0.06)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{story.region}</p>
              <h3 className="mt-4 font-serif text-3xl leading-tight">{story.dish}</h3>
              <p className="mt-5 text-base leading-8 text-foreground/76">{story.insight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <div className="grid gap-8 rounded-[2.2rem] border border-black/10 bg-[rgba(255,250,244,0.72)] p-6 shadow-[0_22px_70px_rgba(70,43,20,0.06)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Conclusion</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Migration may change location, but food protects continuity.</h2>
          </div>
          <p className="text-lg leading-8 text-foreground/78">
            For immigrant communities, food does more than satisfy hunger. It preserves cultural memory, keeps language in
            daily use, and lets identity remain visible inside a new national setting. The meal becomes a bridge between
            homeland and diaspora, memory and adaptation, elders and younger generations.
          </p>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Project group</p>
            <h2 className="mt-3 font-serif text-5xl md:text-6xl">DODALAR</h2>
            <p className="mt-4 text-lg leading-8 text-foreground/76">
              Also known as Food Hunters. This section is positioned as the Monday contribution for the team project.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {teamNotes.map((note) => (
              <div
                key={note}
                className="rounded-[1.6rem] border border-black/10 bg-white/60 p-5 text-base leading-7 shadow-[0_16px_46px_rgba(70,43,20,0.05)]"
              >
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
