import Image from 'next/image'
import {
  ArrowRight,
  BookOpenText,
  Clock3,
  CookingPot,
  ExternalLink,
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
  { href: '#gallery', label: 'Gallery' },
  { href: '#research-notes', label: 'Research Notes' },
  { href: '#heritage', label: 'Heritage' },
  { href: '#ritual', label: 'Ritual' },
  { href: '/cooking', label: 'Cooking Game' },
  { href: '#team', label: 'Team' },
  { href: '#references', label: 'Sources' },
]

const highlights = [
  {
    title: 'National comfort food',
    text: 'Plov, also called osh, is one of the most recognizable dishes in Uzbek cuisine and is tied to hospitality, celebration, and everyday memory.',
    icon: HandPlatter,
  },
  {
    title: 'Built in the kazan',
    text: 'The dish gains its character from the kazan: onions, carrots, meat, oil, rice, garlic, and cumin are layered into a fragrant zirvak before the rice steams.',
    icon: CookingPot,
  },
  {
    title: 'Shared before serving',
    text: 'The dish belongs to weddings, family gatherings, neighborhood events, Friday meals, and the table where stories are retold.',
    icon: Users,
  },
]

const flavorFacts = [
  {
    label: 'Hospitality',
    text: 'Travel and food writers repeatedly describe plov as a sign of welcome: a host shows respect by serving a generous platter.',
  },
  {
    label: 'Identity online',
    text: 'Research on Central Asian food culture shows how plov is discussed as national identity, not just as a cooking technique.',
  },
  {
    label: 'Silk Road roots',
    text: 'Modern stories often connect plov to exchange across the Silk Road, where rice, spices, and meat traditions moved through cities and markets.',
  },
  {
    label: 'Everyday equality',
    text: 'Recent reporting emphasizes that plov crosses class lines: rich or poor, Uzbeks recognize it as a common cultural food.',
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
    image: '/osh-tashkent.svg',
  },
  {
    value: 'Samarkand',
    title: 'Layered identity',
    text: 'Known for distinct visual layering and a style that keeps rice, carrots, and meat visually separate before serving, reflecting regional pride and technique.',
    image: '/osh-samarkand.svg',
  },
  {
    value: 'Fergana',
    title: 'Deeper roasted flavor',
    text: 'Usually linked to stronger color, fuller richness, and a cooking style that emphasizes depth from oil, meat, and careful heat control.',
    image: '/osh-fergana.svg',
  },
]

const ingredientImages = [
  {
    title: 'Rice',
    text: 'The rice should steam into separate grains instead of becoming mushy.',
    image: '/ingredient-rice.svg',
  },
  {
    title: 'Carrots',
    text: 'Carrots give sweetness, color, and the recognizable orange-gold look.',
    image: '/ingredient-carrots.svg',
  },
  {
    title: 'Meat',
    text: 'Lamb or beef is browned first so the zirvak becomes rich and deep.',
    image: '/ingredient-meat.svg',
  },
  {
    title: 'Cumin and garlic',
    text: 'These aromas make plov instantly recognizable in the kitchen.',
    image: '/ingredient-spices.svg',
  },
]

const researchNotes = [
  {
    label: 'UNESCO recognition',
    title: 'Plov culture is officially heritage',
    text: 'Uzbekistan succeeded in having plov culture and traditions added to UNESCO Intangible Cultural Heritage in 2016.',
    source: 'Smithsonian / Outlook Traveller',
  },
  {
    label: 'Rice detail',
    title: 'Devzira rice matters',
    text: 'Travel reporting identifies devzira from the Fergana Valley as a prized rice for plov because it absorbs liquid while keeping distinct grains.',
    source: 'Outlook Traveller',
  },
  {
    label: 'Serving rhythm',
    title: 'Plov is often a lunch dish',
    text: 'Several accounts describe plov as commonly served for lunch, with busy restaurants often selling out by mid-afternoon.',
    source: 'Smithsonian / Outlook Traveller',
  },
  {
    label: 'Tools',
    title: 'The kaftgir is part of the craft',
    text: 'Beyond the kazan, festive plov uses a flat metal skimmer called a kaftgir for handling rice and serving from the pot.',
    source: 'Uzbek Travel / Smithsonian',
  },
  {
    label: 'Occasion changes recipe',
    title: 'Mood changes the ingredients',
    text: 'Basic plov may be served at funerals, while weddings and holidays often add chickpeas, raisins, garlic, barberries, quail eggs, or other festive touches.',
    source: 'Smithsonian',
  },
  {
    label: 'Public scale',
    title: 'One kazan can feed a crowd',
    text: 'Large plov centers and events cook in enormous kazans; Tashkent’s Besh Qozon is reported to prepare tons of plov daily.',
    source: 'Outlook Traveller / Uzbek Travel',
  },
]

const timeline = [
  {
    label: 'Ingredient memory',
    text: 'Families look for familiar rice, yellow carrots, cumin, garlic, and lamb or beef because ingredients connect the present meal to older kitchens.',
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
  'Nurmuxamedov Xurshid',
  'Xabibullaev Shohjahon',
  'Kamronbek Yunusov',
  'Nikolay Tsoy',
  'Umidjon Normuratov',
  'Sarvar Sultanov',
  'Kim Vladimir',
  'Amirxon Siddiqov',
  'Tolibjon Olimjonov',
]

const references = [
  {
    author: 'Advantour',
    date: '2020, August 11',
    title: 'Uzbek plov: A symbol of Uzbek hospitality',
    url: 'https://www.advantour.com/uzbekistan/uzbek-food/plov.htm',
  },
  {
    author: 'Anita',
    date: '2012, February',
    title: "Plov - Uzbekistan's legendary national dish",
    url: 'https://www.anitasfeast.com/blog/2012/11/plov-uzbekistans-legendary-national-dish/',
  },
  {
    author: 'Alymbaeva, A. A.',
    date: '2020, December',
    title: 'Nations of plov and beshbarmak: Central Asian food and national identity on the internet',
    url: 'https://www.researchgate.net/publication/338030214_Nations_of_Plov_and_Beshbarmak_Central_Asian_Food_and_National_Identity_on_the_Internet',
  },
  {
    author: 'Cerita Kuliner',
    date: '2025, April 22',
    title: 'Uzbek plov lamb and rice pilaf',
    url: 'https://ceritakuliner.com/uzbek-plov-lamb-and-rice-pilaf/',
  },
  {
    author: 'Islam, S. M. S.',
    date: '2023, September 22',
    title: 'From Silk Road treasures to culinary delight: The tale of Uzbek plov',
    url: 'https://medium.com/@s.m.shahinul.islam/from-silk-road-treasures-to-culinary-delight-the-tale-of-uzbek-plov-d5159a2605c5',
  },
  {
    author: 'Lev-Tov, D.',
    date: '2023, December 20',
    title: 'Rich or poor, Uzbeks eat plov: The beloved medley of rice and meat is the national dish of Uzbekistan',
    url: 'https://www.smithsonianmag.com/travel/rich-or-poor-uzbeks-eat-plov-180983483/',
  },
  {
    author: 'Silas',
    date: '2025, October 29',
    title: 'The real reason Uzbek plov is a global sensation',
    url: 'https://eathealthy365.com/the-real-reason-uzbek-plov-is-a-global-sensation/',
  },
  {
    author: 'Sunder, K.',
    date: '2026, March 12',
    title: "Plov nation: How Uzbekistan's signature dish brings people together",
    url: 'https://oteats.outlooktraveller.com/features/guides/plov-nation-how-uzbekistans-signature-dish-brings-people-together',
  },
  {
    author: 'Uzbek Travel',
    date: 'n.d.',
    title: 'Plov: A symbol of Uzbek hospitality',
    url: 'https://uzbek-travel.com/about-uzbekistan/facts/plov/',
  },
  {
    author: 'YasminaTour',
    date: '2026, February 25',
    title: 'Authentic Uzbek plov: Where to experience the best traditional rice pilaf',
    url: 'https://yasminatour.uz/authentic-uzbek-plov-where-to-experience-the-best-traditional-rice-pilaf/',
  },
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
                meal can carry family memory, national identity, Silk Road history, and hospitality across generations
                and across borders.
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

      <section id="gallery" className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Ingredient gallery</p>
            <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">What goes into osh</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-foreground/72">
            These visual cards show the foundation of Uzbek plov: rice, carrots, meat, cumin, and garlic. Together they
            become zirvak, aroma, texture, and memory.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ingredientImages.map((ingredient) => (
            <Card
              key={ingredient.title}
              className="overflow-hidden rounded-[1.8rem] border-black/10 bg-white/66 py-0 shadow-[0_18px_50px_rgba(70,43,20,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={ingredient.image} alt={`${ingredient.title} illustration`} fill className="object-cover" />
              </div>
              <CardHeader className="px-5 pb-2">
                <CardTitle className="font-serif text-3xl">{ingredient.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-6 pt-0">
                <p className="text-sm leading-7 text-foreground/72">{ingredient.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="research-notes" className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-8 rounded-[2.25rem] border border-black/10 bg-[color:var(--color-ink)] p-6 text-[color:var(--color-paper)] shadow-[0_25px_80px_rgba(31,18,11,0.22)] lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
          <div className="space-y-5">
            <Badge className="w-fit rounded-full bg-[color:var(--color-saffron)] px-4 py-1.5 text-[color:var(--color-ink)]">
              From the references
            </Badge>
            <h2 className="font-serif text-5xl leading-none md:text-6xl">New details from the research</h2>
            <p className="text-lg leading-8 text-[color:var(--color-paper-muted)]">
              The sources add more than ingredients. They show plov as protected heritage, a lunch ritual, a craft with
              special tools, and a public dish scaled from family tables to huge city plov centers.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {researchNotes.map((note) => (
              <div key={note.title} className="rounded-[1.4rem] border border-white/10 bg-white/7 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[color:var(--color-saffron)]">
                  {note.label}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight">{note.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-paper-muted)]">{note.text}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)]">
                  Source: {note.source}
                </p>
              </div>
            ))}
          </div>
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
            <div className="grid gap-3 sm:grid-cols-2">
              {flavorFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-black/10 bg-white/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-spice)]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/70">{fact.text}</p>
                </div>
              ))}
            </div>
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
                    identity. Sources describe it as both everyday food and ceremonial food, which is why people remember it
                    collectively, not only individually.
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
                    Rice, carrots, onions, oil, meat, garlic, and cumin form the recognizable base. The exact balance may vary
                    by region or household, but the identity of the dish remains strong because families preserve the structure
                    of the method.
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
            <Card key={note.value} className="overflow-hidden rounded-[1.9rem] border-black/10 bg-white/65 py-0 shadow-[0_20px_60px_rgba(70,43,20,0.06)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={note.image} alt={`${note.value} osh illustration`} fill className="object-cover" />
              </div>
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

      <section id="references" className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Research base</p>
            <h2 className="mt-3 font-serif text-5xl leading-none md:text-6xl">References that add flavor</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-foreground/72">
            These sources support the page&apos;s focus on plov as hospitality, national identity, regional practice,
            and a dish that brings Uzbek communities together.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {references.map((reference) => (
            <a
              key={`${reference.author}-${reference.title}`}
              href={reference.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.5rem] border border-black/10 bg-white/64 p-5 shadow-[0_16px_46px_rgba(70,43,20,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/82"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-saffron)]/25 text-[color:var(--color-ink)]">
                    <BookOpenText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[color:var(--color-spice)]">
                      {reference.author} <span className="font-normal text-foreground/50">({reference.date})</span>
                    </p>
                    <p className="mt-2 text-base font-semibold leading-7 text-foreground/82">{reference.title}</p>
                  </div>
                </div>
                <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-foreground/35 transition-colors group-hover:text-[color:var(--color-spice)]" />
              </div>
            </a>
          ))}
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
              The group prepared this project to show how one dish can explain memory, hospitality, and Uzbek identity.
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
