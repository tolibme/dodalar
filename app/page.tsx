import Image from 'next/image'
import {
  ArrowRight,
  Clock3,
  CookingPot,
  Flame,
  HandPlatter,
  MapPinned,
  Sparkles,
  Users,
} from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const anchors = [
  { href: '#about', label: 'About Osh' },
  { href: '#heritage', label: 'Heritage' },
  { href: '#ritual', label: 'Ritual' },
  { href: '#team', label: 'Team' },
]

const highlights = [
  {
    title: 'National comfort food',
    text: 'Plov, also called osh, is one of the most recognizable dishes in Uzbek cuisine and is tied to hospitality, celebration, and everyday memory.',
    icon: HandPlatter,
  },
  {
    title: 'Cooked with meaning',
    text: 'Rice, carrots, onions, meat, oil, and spices are not only ingredients. They are part of a method families repeat across generations.',
    icon: CookingPot,
  },
  {
    title: 'Shared before it is served',
    text: 'The dish is strongly social. It belongs to weddings, family gatherings, neighborhood events, and the table where stories are retold.',
    icon: Users,
  },
]

const memoryThreads = [
  'The name "osh" stays in daily speech even when families move abroad.',
  'Cooking instructions are often taught by watching elders instead of reading recipes.',
  'The aroma of frying onions, carrots, and cumin becomes a memory trigger for home.',
  'Serving plov to guests reflects Uzbek values of welcome, generosity, and respect.',
]

const regionalNotes = [
  {
    value: 'Tashkent',
    title: 'Balanced city style',
    text: 'Often associated with a rich but neat presentation, where each grain of rice stays separate and the dish looks generous without feeling heavy.',
  },
  {
    value: 'Samarkand',
    title: 'Layered identity',
    text: 'Known for distinct visual layering and a style that preserves the individuality of ingredients, reflecting regional pride and technique.',
  },
  {
    value: 'Fergana',
    title: 'Deeper roasted flavor',
    text: 'Usually linked to stronger color, fuller richness, and a cooking style that emphasizes depth from oil, meat, and careful heat control.',
  },
]

const timeline = [
  {
    label: 'Ingredient memory',
    text: 'Families look for familiar rice, yellow carrots, cumin, and lamb or beef because ingredients connect the present meal to older kitchens.',
  },
  {
    label: 'Technique memory',
    text: 'The order matters: heating the pot, building the zirvak, layering the rice, and letting steam finish the dish without breaking the grains.',
  },
  {
    label: 'Social memory',
    text: 'The meal is remembered not only for taste but for who cooked it, who gathered around it, and what story was told with it.',
  },
]

const faqItems = [
  {
    question: 'Why is plov important in Uzbek culture?',
    answer:
      'Plov is more than a recipe. It represents hospitality, celebration, care for guests, and continuity between generations. Because it appears at weddings, holidays, and ordinary family meals, it becomes a cultural symbol rather than just a dish.',
  },
  {
    question: 'Why is it also called osh?',
    answer:
      'Osh is a widely used Uzbek name for the dish. Keeping the original word matters because language is part of cultural memory. Even when families live abroad, saying osh instead of a translated name keeps the cultural connection direct.',
  },
  {
    question: 'How does plov preserve identity through immigration?',
    answer:
      'When immigrant families keep cooking plov, they preserve ingredient choices, cooking vocabulary, serving customs, and family roles. That turns one meal into a practical way to keep Uzbek identity visible in a new country.',
  },
]

const teamMembers = [
  'Add member name 1',
  'Add member name 2',
  'Add member name 3',
  'Add member name 4',
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(191,116,42,0.18),_transparent_30%),radial-gradient(circle_at_80%_12%,_rgba(141,83,34,0.16),_transparent_24%),linear-gradient(180deg,_rgba(248,238,222,1),_rgba(241,229,208,1))]" />
        <div className="grain-overlay absolute inset-0 opacity-30" />
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.45em] text-foreground/60">Uzbek Cuisine Project</p>
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

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-14">
        <div className="flex flex-col justify-between">
          <div className="animate-enter space-y-6">
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-foreground/70">
              <Badge variant="outline" className="rounded-full border-black/10 bg-white/70 px-4 py-2">
                Uzbek Food Heritage
              </Badge>
              <Badge variant="outline" className="rounded-full border-black/10 bg-white/70 px-4 py-2">
                Plov / Osh
              </Badge>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--color-spice)]">Food Hunters presentation</p>
              <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.045em] md:text-8xl lg:text-[8.4rem]">
                Plov is
                <span className="block text-[color:var(--color-spice)]">Uzbek memory</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground/78 md:text-xl">
                This project focuses on plov, also known as osh, as a signature dish of Uzbek cuisine. It shows how one
                meal can carry family memory, national identity, and hospitality across generations and across borders.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Card className="animate-enter-delayed rounded-[1.75rem] border-black/10 bg-white/72 shadow-[0_20px_60px_rgba(70,43,20,0.08)]">
              <CardHeader className="px-5 pb-0">
                <CardDescription className="text-xs uppercase tracking-[0.28em] text-foreground/55">
                  Topic
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pt-4">
                <p className="text-2xl font-semibold">Plov as cultural identity</p>
              </CardContent>
            </Card>

            <Card className="animate-enter-delayed-2 rounded-[1.75rem] border-black/10 bg-white/72 shadow-[0_20px_60px_rgba(70,43,20,0.08)]">
              <CardHeader className="px-5 pb-0">
                <CardDescription className="text-xs uppercase tracking-[0.28em] text-foreground/55">
                  Focus
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pt-4">
                <p className="text-2xl font-semibold">Tradition, ritual, migration</p>
              </CardContent>
            </Card>

            <Card className="animate-enter-delayed-3 rounded-[1.75rem] border-black/10 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] shadow-[0_20px_60px_rgba(34,22,17,0.2)]">
              <CardHeader className="px-5 pb-0">
                <CardDescription className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-paper-muted)]">
                  Team
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pt-4">
                <p className="text-2xl font-semibold">DODALAR / Food Hunters</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -left-4 top-10 h-36 w-36 rounded-full bg-[color:var(--color-saffron)]/35 blur-3xl" />
          <div className="absolute -right-4 bottom-12 h-40 w-40 rounded-full bg-[color:var(--color-spice)]/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[color:var(--color-ink)] p-3 shadow-[0_30px_90px_rgba(37,24,15,0.24)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
              <Image src="/food-memory-hero.jpg" alt="Traditional Uzbek-style meal shared at the table" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,12,9,0.08),_rgba(18,12,9,0.68))]" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-[color:var(--color-paper)]">
                <Badge className="rounded-full bg-[color:var(--color-saffron)] text-[color:var(--color-ink)]">Signature dish</Badge>
                <p className="max-w-sm font-serif text-3xl leading-tight">
                  A plate of osh can represent home, family rhythm, and Uzbek hospitality at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon

            return (
              <Card
                key={highlight.title}
                className="rounded-[1.8rem] border-black/10 bg-white/68 shadow-[0_18px_50px_rgba(70,43,20,0.06)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardHeader className="space-y-4 px-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-saffron)]/25 text-[color:var(--color-ink)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl leading-tight">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pt-0">
                  <p className="text-base leading-8 text-foreground/76">{highlight.text}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section id="heritage" className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 rounded-[2.25rem] border border-black/10 bg-white/58 p-6 shadow-[0_22px_70px_rgba(70,43,20,0.06)] lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="space-y-5">
            <Badge variant="outline" className="rounded-full border-black/10 bg-white/80 px-4 py-1.5">
              Why this dish matters
            </Badge>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">Osh is a recipe, but it also works like an archive.</h2>
            <p className="text-lg leading-8 text-foreground/78">
              In Uzbek households, plov preserves more than flavor. It stores technique, timing, language, and social
              etiquette. When families cook it again in another city or country, they do not only repeat a meal. They
              repeat belonging.
            </p>
          </div>

          <Tabs defaultValue="meaning" className="w-full">
            <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-2xl bg-[rgba(111,66,31,0.08)] p-2">
              <TabsTrigger value="meaning" className="rounded-xl px-4 py-2">
                Meaning
              </TabsTrigger>
              <TabsTrigger value="ingredients" className="rounded-xl px-4 py-2">
                Ingredients
              </TabsTrigger>
              <TabsTrigger value="migration" className="rounded-xl px-4 py-2">
                Migration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="meaning" className="pt-5">
              <Card className="rounded-[1.75rem] border-black/10 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] shadow-none">
                <CardContent className="space-y-4 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <Flame className="h-5 w-5 text-[color:var(--color-saffron)]" />
                    <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--color-paper-muted)]">Cultural role</p>
                  </div>
                  <p className="text-lg leading-8 text-[color:var(--color-paper-muted)]">
                    Plov appears at celebrations, family meetings, and community events, so it becomes a public sign of Uzbek
                    identity. It is a dish people remember collectively, not only individually.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="pt-5">
              <Card className="rounded-[1.75rem] border-black/10 bg-white/75 shadow-none">
                <CardContent className="space-y-4 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[color:var(--color-spice)]" />
                    <p className="text-sm uppercase tracking-[0.3em] text-foreground/55">Foundation</p>
                  </div>
                  <p className="text-lg leading-8 text-foreground/78">
                    Rice, carrots, onions, oil, meat, garlic, and cumin form the recognizable base. The exact balance may
                    vary, but the identity of the dish remains strong because families preserve the structure of the method.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="migration" className="pt-5">
              <Card className="rounded-[1.75rem] border-black/10 bg-white/75 shadow-none">
                <CardContent className="space-y-4 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <MapPinned className="h-5 w-5 text-[color:var(--color-spice)]" />
                    <p className="text-sm uppercase tracking-[0.3em] text-foreground/55">Diaspora link</p>
                  </div>
                  <p className="text-lg leading-8 text-foreground/78">
                    In migration, ingredient substitutions may happen, but the ritual stays. That is why plov becomes a stable
                    marker of Uzbek identity even when geography changes.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Card className="rounded-[2rem] border-black/10 bg-[color:var(--color-ink)] py-0 text-[color:var(--color-paper)] shadow-[0_25px_80px_rgba(31,18,11,0.24)]">
          <CardHeader className="space-y-4 border-b border-white/10 px-8 py-8">
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--color-paper-muted)]">Language and memory</p>
            <CardTitle className="font-serif text-4xl leading-tight md:text-5xl">
              The words around plov matter as much as the taste.
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 py-8">
            <ul className="space-y-4">
              {memoryThreads.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-[color:var(--color-paper-muted)]">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[color:var(--color-saffron)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[2rem] border border-black/10">
            <Image src="/food-family.jpg" alt="Family preparing food together" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(28,17,12,0.08),_rgba(28,17,12,0.64))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Family transmission</p>
              <p className="mt-3 max-w-xs text-lg leading-7">
                Children often learn plov by standing beside parents and grandparents, absorbing timing, smell, and rhythm.
              </p>
            </div>
          </div>

          <Card className="rounded-[2rem] border-black/10 bg-white/65 shadow-[0_16px_46px_rgba(70,43,20,0.06)]">
            <CardHeader className="space-y-3 px-6">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-[color:var(--color-spice)]" />
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Cooking logic</p>
              </div>
              <CardTitle className="font-serif text-3xl leading-tight">Plov is remembered through sequence.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pt-0">
              {timeline.map((step) => (
                <div key={step.label} className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--color-spice)]">{step.label}</p>
                  <p className="text-base leading-8 text-foreground/76">{step.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="ritual" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Regional identity</p>
            <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">Different styles, one cultural symbol</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-foreground/72">
            Regional variations show that Uzbek cuisine is rich and diverse. The dish changes in detail, but the cultural
            role of plov as a unifying national food remains constant.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {regionalNotes.map((note) => (
            <Card key={note.value} className="rounded-[1.9rem] border-black/10 bg-white/65 shadow-[0_20px_60px_rgba(70,43,20,0.06)] transition-transform duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-4 px-6">
                <Badge className="w-fit rounded-full bg-[color:var(--color-saffron)]/85 px-3 py-1 text-[color:var(--color-ink)]">
                  {note.value}
                </Badge>
                <CardTitle className="font-serif text-3xl leading-tight">{note.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pt-0">
                <p className="text-base leading-8 text-foreground/76">{note.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="grid gap-8 rounded-[2.2rem] border border-black/10 bg-[rgba(255,250,244,0.8)] p-6 shadow-[0_22px_70px_rgba(70,43,20,0.06)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Quick explanation</p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">Why this topic works for your project</h2>
            <p className="text-lg leading-8 text-foreground/78">
              Plov gives you a very clear example of how food preserves identity. It connects memory, family roles, language,
              hospitality, and national culture in one subject that is easy to explain visually.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-black/10">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-8 text-foreground/74">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="team" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Project group</p>
            <h2 className="font-serif text-5xl md:text-6xl">DODALAR</h2>
            <p className="text-lg leading-8 text-foreground/76">
              Also known as Food Hunters. This section is now tailored to your topic about plov, also called osh, in Uzbek
              cuisine.
            </p>
            <Separator className="bg-black/10" />
            <p className="text-sm leading-7 text-foreground/62">
              Replace the placeholder cards with your real group-member names and I can wire them in exactly as you want.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member} className="rounded-[1.6rem] border-black/10 bg-white/68 shadow-[0_16px_46px_rgba(70,43,20,0.05)]">
                <CardContent className="px-5 py-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-foreground/45">Group member</p>
                  <p className="mt-3 text-xl font-semibold">{member}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[rgba(255,248,239,0.82)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-semibold">DODALAR | Plov / Osh Project</p>
            <p className="text-sm text-foreground/62">
              Copyright {new Date().getFullYear()} DODALAR. All rights reserved.
            </p>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/62">
            Topic: Plov, also known as osh, as a cultural symbol of Uzbek cuisine, memory, and hospitality.
          </p>
        </div>
      </footer>
    </main>
  )
}
