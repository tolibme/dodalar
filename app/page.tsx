import Link from 'next/link'
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
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SiteHeader } from '@/components/site-header'

const anchors = [
  { href: '#about', label: 'About' },
  { href: '#research-notes', label: 'Research' },
  { href: '#heritage', label: 'Heritage' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/history', label: 'History' },
  { href: '/diaspora', label: 'Diaspora' },
  { href: '/cooking', label: 'Cooking Game' },
  { href: '/video', label: 'Video' },
  { href: '#team', label: 'Team' },
]

const highlights = [
  {
    title: 'National culinary symbol',
    text: 'Plov, also referred to as osh, is among the most recognizable dishes in Uzbek cuisine and is closely associated with hospitality, celebration, and collective memory.',
    icon: HandPlatter,
    color: 'var(--color-cobalt)',
  },
  {
    title: 'Prepared through the kazan tradition',
    text: 'The dish derives much of its sensory and cultural character from the kazan, where onions, carrots, meat, oil, rice, garlic, and cumin are structured into zirvak before the rice is steamed.',
    icon: CookingPot,
    color: 'var(--color-teal)',
  },
  {
    title: 'Embedded in communal practice',
    text: 'The dish is strongly connected to weddings, family gatherings, neighborhood events, Friday meals, and shared tables where social memory is reproduced.',
    icon: Users,
    color: 'var(--color-spice)',
  },
]

const flavorFacts = [
  {
    label: 'Rice',
    title: 'Structure holds the dish together',
    text: 'Distinct grains are central to the identity of plov, so rice becomes both a technical and symbolic core of the meal.',
    image: '/9.webp',
    color: 'var(--color-cobalt)',
  },
  {
    label: 'Carrots',
    title: 'Color and sweetness signal familiarity',
    text: 'Yellow or orange carrots contribute the visual warmth and sweetness that many families associate with authentic osh.',
    image: '/10.jpg',
    color: 'var(--color-spice)',
  },
  {
    label: 'Meat',
    title: 'Depth begins in the zirvak',
    text: 'Lamb or beef develops roasted flavor early in the process and helps define the communal richness expected from celebratory plov.',
    image: '/11.jpg',
    color: 'var(--color-spice)',
  },
  {
    label: 'Cumin and garlic',
    title: 'Aroma carries memory',
    text: 'Spices and aromatics make osh immediately recognizable, linking the meal to household memory long before it reaches the table.',
    image: '/12.jpg',
    color: 'var(--color-teal)',
  },
]

const memoryThreads = [
  'The term "osh" often remains in everyday speech even after families migrate abroad.',
  'Cooking knowledge is frequently transmitted through observation of elders rather than through written recipes.',
  'The aroma of frying onions, carrots, and cumin can function as a sensory trigger for memories of home.',
  'The practice of serving plov to guests reflects Uzbek values of welcome, generosity, and respect.',
]

const regionalNotes = [
  {
    value: 'Tashkent',
    title: 'Balanced urban style',
    text: 'Often associated with a rich yet orderly presentation: rice grains remain separate and the dish appears abundant without excessive heaviness.',
    image: '/3.jpg',
    color: 'var(--color-cobalt)',
  },
  {
    value: 'Samarkand',
    title: 'Distinct layered presentation',
    text: 'Known for visual layering — rice, carrots, and meat often remain visually separate before serving, reflecting regional pride and technical specificity.',
    image: '/5.webp',
    color: 'var(--color-teal)',
  },
  {
    value: 'Fergana',
    title: 'Intensified roasted flavor',
    text: 'Associated with stronger color, greater richness, and a cooking method that emphasizes flavor depth through oil, meat, and careful heat control.',
    image: '/6.jpg',
    color: 'var(--color-spice)',
  },
]

const researchNotes = [
  { label: 'UNESCO recognition', title: 'Plov culture has formal heritage recognition', text: 'Uzbekistan successfully secured the inscription of plov culture and traditions on the UNESCO Intangible Cultural Heritage list in 2016.', source: 'Smithsonian / Outlook Traveller', color: 'var(--color-cobalt)' },
  { label: 'Rice detail', title: 'Devzira rice has culinary significance', text: 'Travel reporting identifies devzira rice from the Fergana Valley as a valued variety for plov because it absorbs liquid while maintaining distinct grains.', source: 'Outlook Traveller', color: 'var(--color-teal)' },
  { label: 'Serving rhythm', title: 'Plov is frequently associated with lunch', text: 'Several accounts describe plov as commonly served at lunchtime, with busy restaurants often exhausting their supply by mid-afternoon.', source: 'Smithsonian / Outlook Traveller', color: 'var(--color-spice)' },
  { label: 'Tools', title: 'The kaftgir forms part of the culinary apparatus', text: 'In addition to the kazan, festive plov preparation may involve a flat metal skimmer called a kaftgir, which is used for handling rice and serving from the pot.', source: 'Uzbek Travel / Smithsonian', color: 'var(--color-saffron)' },
  { label: 'Occasion changes recipe', title: 'Occasion influences ingredient selection', text: 'Basic plov may be served at funerals, whereas weddings and holidays often incorporate chickpeas, raisins, garlic, barberries, quail eggs, or other festive additions.', source: 'Smithsonian', color: 'var(--color-ruby)' },
  { label: 'Public scale', title: 'One kazan can support collective consumption', text: "Large plov centers and public events use enormous kazans; Tashkent's Besh Qozon is reported to prepare tons of plov each day.", source: 'Outlook Traveller / Uzbek Travel', color: 'var(--color-emerald)' },
]

const timeline = [
  { label: 'Ingredient memory', text: 'Families often seek familiar rice, yellow carrots, cumin, garlic, and lamb or beef because these ingredients connect the present meal to earlier domestic kitchens.' },
  { label: 'Technique memory', text: 'The sequence is significant: heating the pot, constructing the zirvak, layering the rice, and allowing steam to complete the dish without damaging the grains.' },
  { label: 'Social memory', text: 'The meal is remembered not only for taste but also for the cook, the social gathering, and the narratives associated with its preparation and consumption.' },
]

const faqItems = [
  { question: 'Why is plov important in Uzbek culture?', answer: 'Plov functions as more than a recipe. It represents hospitality, celebration, care for guests, and intergenerational continuity. Because it appears at weddings, holidays, and ordinary family meals, it operates as a cultural symbol rather than simply as a dish.' },
  { question: 'Why is it also called osh?', answer: 'Osh is a widely used Uzbek term for the dish. Retaining the original word is significant because language forms part of cultural memory. Even when families live abroad, using osh rather than a translated term maintains a direct cultural connection.' },
  { question: 'How does plov preserve identity through immigration?', answer: 'When immigrant families continue preparing plov, they preserve ingredient choices, cooking vocabulary, serving customs, and family roles. In this way, a single meal becomes a practical mechanism for maintaining Uzbek identity in a new national context.' },
]

const teamMembers = [
  { name: 'Nurmuxamedov Xurshid', role: 'Group member' },
  { name: 'Xabibullaev Shohjahon', role: 'Public speaker' },
  { name: 'Kamronbek Yunusov', role: 'Lead researcher' },
  { name: 'Nikolay Tsoy', role: 'Video editor' },
  { name: 'Qurbon Bagirov', role: 'Creative designer' },
  { name: 'Umidjon Normuratov', role: 'Project leader' },
  { name: 'Sarvar Sultanov', role: 'Group member' },
  { name: 'Kim Vladimir', role: 'Content writer' },
  { name: 'Amirxon Siddiqov', role: 'Research analyst' },
  { name: 'Tolibjon Olimjonov', role: 'Group member' },
]

const memberColors = [
  'var(--color-cobalt)',
  'var(--color-teal)',
  'var(--color-spice)',
  'var(--color-emerald)',
  'var(--color-ruby)',
  'var(--color-cobalt-light)',
  'var(--color-cobalt)',
  'var(--color-teal)',
  'var(--color-spice)',
  'var(--color-emerald)',
]

const references = [
  { author: 'Advantour', date: '2020, August 11', title: 'Uzbek plov: A symbol of Uzbek hospitality', url: 'https://www.advantour.com/uzbekistan/uzbek-food/plov.htm' },
  { author: 'Anita', date: '2012, February', title: "Plov - Uzbekistan's legendary national dish", url: 'https://www.anitasfeast.com/blog/2012/11/plov-uzbekistans-legendary-national-dish/' },
  { author: 'Alymbaeva, A. A.', date: '2020, December', title: 'Nations of plov and beshbarmak: Central Asian food and national identity on the internet', url: 'https://www.researchgate.net/publication/338030214_Nations_of_Plov_and_Beshbarmak_Central_Asian_Food_and_National_Identity_on_the_Internet' },
  { author: 'Cerita Kuliner', date: '2025, April 22', title: 'Uzbek plov lamb and rice pilaf', url: 'https://ceritakuliner.com/uzbek-plov-lamb-and-rice-pilaf/' },
  { author: 'Islam, S. M. S.', date: '2023, September 22', title: 'From Silk Road treasures to culinary delight: The tale of Uzbek plov', url: 'https://medium.com/@s.m.shahinul.islam/from-silk-road-treasures-to-culinary-delight-the-tale-of-uzbek-plov-d5159a2605c5' },
  { author: 'Lev-Tov, D.', date: '2023, December 20', title: 'Rich or poor, Uzbeks eat plov: The beloved medley of rice and meat is the national dish of Uzbekistan', url: 'https://www.smithsonianmag.com/travel/rich-or-poor-uzbeks-eat-plov-180983483/' },
  { author: 'Silas', date: '2025, October 29', title: 'The real reason Uzbek plov is a global sensation', url: 'https://eathealthy365.com/the-real-reason-uzbek-plov-is-a-global-sensation/' },
  { author: 'Sunder, K.', date: '2026, March 12', title: "Plov nation: How Uzbekistan's signature dish brings people together", url: 'https://oteats.outlooktraveller.com/features/guides/plov-nation-how-uzbekistans-signature-dish-brings-people-together' },
  { author: 'Uzbek Travel', date: 'n.d.', title: 'Plov: A symbol of Uzbek hospitality', url: 'https://uzbek-travel.com/about-uzbekistan/uzbekistan/facts/plov/' },
  { author: 'YasminaTour', date: '2026, February 25', title: 'Authentic Uzbek plov: Where to experience the best traditional rice pilaf', url: 'https://yasminatour.uz/authentic-uzbek-plov-where-to-experience-the-best-traditional-rice-pilaf/' },
]

const exploreCards = [
  {
    href: '/gallery',
    label: 'Photo Gallery',
    title: 'Plov in Images',
    desc: 'Food, culture, spice markets, and the communal table — in 12 photographs.',
    src: '/4.jpg',
    alt: 'Colorful spice market',
    color: 'var(--color-cobalt)',
  },
  {
    href: '/history',
    label: 'History',
    title: 'A History in Rice and Fire',
    desc: 'From ancient Silk Road trade to UNESCO recognition — five eras that shaped plov.',
    src: '/7.avif',
    alt: 'Uzbek architectural tilework',
    color: 'var(--color-teal)',
  },
  {
    href: '/diaspora',
    label: 'Diaspora Stories',
    title: 'Carrying Plov Across Borders',
    desc: 'Four accounts of Uzbek families making osh in New York, Berlin, Seoul, and Toronto.',
    src: '/11.jpg',
    alt: 'Communal food spread',
    color: 'var(--color-spice)',
  },
]

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader items={anchors} />

      {/* ── HERO ── */}
      <section className="photo-hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.png"
            alt="Uzbek plov — the national dish of Uzbekistan"
            fill
            className="object-cover"
            priority
          />
          <div className="photo-overlay-dark" />
          <div className="grain-overlay absolute inset-0 opacity-15" />
        </div>

        <div className="hero-shell relative z-10">
          <div className="animate-enter space-y-7 pb-14">
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-full bg-[color:var(--color-cobalt)] px-4 py-2 text-sm text-white">
                Uzbek Food Heritage
              </Badge>
              <Badge className="rounded-full bg-[color:var(--color-saffron)] px-4 py-2 text-sm text-[color:var(--color-ink)]">
                Plov / Osh
              </Badge>
              <Badge className="rounded-full bg-white/15 px-4 py-2 text-sm text-white">
                Food Hunters · ILC 2250
              </Badge>
            </div>

            <h1 className="max-w-5xl font-serif text-[clamp(3.8rem,16vw,9rem)] leading-[0.88] tracking-[-0.045em] text-white">
              Plov is
              <span className="block text-[color:var(--color-saffron)]">Uzbek memory</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              This project examines plov, also known as osh, as a signature dish of Uzbek cuisine. It analyzes how a
              single meal transmits family memory, national identity, Silk Road history, and hospitality across
              generations and geographic borders.
            </p>

            <div className="hero-actions flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-[color:var(--color-saffron)] px-8 text-[color:var(--color-ink)] hover:bg-[color:var(--color-saffron)]/90"
              >
                <a href="#research-notes">
                  Explore findings <ArrowRight className="icon-em" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/20 bg-white/10 px-8 text-white hover:bg-white/20"
              >
                <Link href="/cooking">Play the cooking game</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" aria-labelledby="about-heading" className="section-shell">
        <div className="mb-10 max-w-3xl space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/55">Core ideas</p>
          <h2 id="about-heading" className="font-serif text-[clamp(2.2rem,9vw,3.75rem)] leading-tight">
            Three principles explain why osh matters beyond the plate.
          </h2>
          <p className="text-base leading-7 text-foreground/72 sm:text-lg sm:leading-8">
            These themes frame the rest of the project: plov as a national symbol, as a disciplined cooking practice,
            and as a communal ritual that carries memory.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <Card
                key={highlight.title}
                className="motion-card reveal-stack overflow-hidden rounded-[1.8rem] border-0 py-0 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="h-2 w-full" style={{ backgroundColor: highlight.color }} />
                <CardHeader className="space-y-4 px-6 pt-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: highlight.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl leading-tight">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pt-0 pb-6">
                  <p className="text-base leading-8 text-foreground/76">{highlight.text}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── UZBEK TILE DIVIDER ── */}
      <div className="uzbek-pattern section-fullbleed py-8 opacity-60" aria-hidden="true" />

      {/* ── RESEARCH ── */}
      <section id="research-notes" className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--color-ink)] shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
          <div className="uzbek-pattern absolute inset-0 opacity-10" />
          <div className="relative z-10 grid gap-8 p-6 text-[color:var(--color-paper)] lg:grid-cols-[0.82fr_1.18fr] lg:p-10">
            <div className="space-y-5">
              <Badge className="w-fit rounded-full bg-[color:var(--color-saffron)] px-4 py-1.5 text-[color:var(--color-ink)]">
                From the references
              </Badge>
              <h2 className="font-serif text-[clamp(2.75rem,12vw,4.5rem)] leading-none">
                Key findings from the research
              </h2>
              <p className="text-base leading-7 text-[color:var(--color-paper-muted)] sm:text-lg sm:leading-8">
                The sources extend the analysis beyond ingredients. They present plov as protected heritage, a
                lunchtime ritual, a craft involving specialized tools, and a public dish that scales from domestic
                tables to major urban plov centers.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {researchNotes.map((note) => (
                <div
                  key={note.title}
                  className="rounded-[1.4rem] border border-white/10 bg-white/6 p-5"
                  style={{ borderTopColor: note.color, borderTopWidth: '3px' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.26em]" style={{ color: note.color }}>
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
        </div>
      </section>

      {/* ── QUOTE BANNER ── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <Image
            src="/2.jpg"
            alt="Spice market background"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, color-mix(in srgb, var(--color-cobalt) 90%, transparent), color-mix(in srgb, var(--color-teal) 85%, transparent))`,
            }}
          />
          <div className="uzbek-pattern absolute inset-0 opacity-12" />
        </div>
        <div className="section-shell relative z-10 text-center text-white">
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--color-saffron)]">
            UNESCO Intangible Cultural Heritage · 2016
          </p>
          <blockquote className="mx-auto mt-8 max-w-4xl font-serif text-[clamp(1.9rem,6vw,4rem)] leading-tight">
            &ldquo;When families prepare plov, they preserve ingredient choices, cooking vocabulary, serving customs,
            and family roles — not just a meal.&rdquo;
          </blockquote>
          <p className="mt-8 text-white/60 text-sm">— From the project analysis</p>
        </div>
      </section>

      {/* ── HERITAGE ── */}
      <section id="heritage" className="section-shell">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-black/8 bg-white/60 p-6 shadow-[0_24px_72px_rgba(0,0,0,0.08)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="space-y-5">
            <Badge
              variant="outline"
              className="rounded-full border-black/10 bg-white/80 px-4 py-1.5"
            >
              Why this dish matters
            </Badge>
            <h2 className="font-serif text-[clamp(2.35rem,10vw,3.75rem)] leading-tight">
              Osh functions as both a recipe and a cultural archive.
            </h2>
            <p className="text-base leading-7 text-foreground/78 sm:text-lg sm:leading-8">
              In Uzbek households, plov preserves more than flavor. It stores technique, timing, language, and social
              etiquette. When families prepare it in another city or country, they reproduce not only a meal but also a
              sense of belonging.
            </p>
          </div>

          <Tabs defaultValue="meaning" className="w-full">
            <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-2xl bg-black/5 p-2">
              <TabsTrigger value="meaning" className="rounded-xl px-4 py-2 data-[state=active]:bg-[color:var(--color-cobalt)] data-[state=active]:text-white">
                Meaning
              </TabsTrigger>
              <TabsTrigger value="ingredients" className="rounded-xl px-4 py-2 data-[state=active]:bg-[color:var(--color-teal)] data-[state=active]:text-white">
                Ingredients
              </TabsTrigger>
              <TabsTrigger value="migration" className="rounded-xl px-4 py-2 data-[state=active]:bg-[color:var(--color-spice)] data-[state=active]:text-white">
                Migration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="meaning" className="pt-5">
              <Card className="rounded-[1.75rem] border-0 bg-[color:var(--color-cobalt)] text-white shadow-none">
                <CardContent className="space-y-4 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <Flame className="h-5 w-5 text-[color:var(--color-saffron)]" />
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">Cultural role</p>
                  </div>
                  <p className="text-lg leading-8 text-white/85">
                    Plov appears at celebrations, family meetings, and community events; therefore, it becomes a public
                    sign of Uzbek identity. Sources describe it as both everyday food and ceremonial food, which
                    explains why it is remembered collectively as well as individually.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="pt-5">
              <Card className="rounded-[1.75rem] border-0 bg-white/80 shadow-none">
                <CardContent className="space-y-5 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[color:var(--color-teal)]" />
                    <p className="text-sm uppercase tracking-[0.3em] text-foreground/55">Foundation</p>
                  </div>
                  <p className="text-lg leading-8 text-foreground/80">
                    Rice, carrots, meat, garlic, and cumin form the recognizable base. The ingredient set may vary in
                    proportion, but these elements preserve the structure families associate with authentic osh.
                  </p>
                  <div className="grid gap-3">
                    {flavorFacts.map((fact) => (
                      <Card
                        key={fact.label}
                        className="surface-card overflow-hidden border-black/10 bg-white/80 py-0 shadow-sm"
                      >
                        <div className="grid gap-0 sm:grid-cols-[8.5rem_1fr]">
                          <div
                            className="relative min-h-[8.5rem] border-b border-black/10 sm:min-h-full sm:border-b-0 sm:border-r"
                            style={{ backgroundColor: `color-mix(in srgb, ${fact.color} 12%, white)` }}
                          >
                            <Image src={fact.image} alt={`${fact.label} illustration`} fill className="object-cover p-4" />
                          </div>
                          <CardContent className="px-5 py-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: fact.color }}>
                              {fact.label}
                            </p>
                            <p className="mt-2 font-serif text-2xl leading-tight text-foreground/88">{fact.title}</p>
                            <p className="mt-3 text-sm leading-6 text-foreground/70">{fact.text}</p>
                          </CardContent>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="migration" className="pt-5">
              <Card className="rounded-[1.75rem] border-0 bg-[color:var(--color-spice)] text-white shadow-none">
                <CardContent className="space-y-4 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <MapPinned className="h-5 w-5 text-[color:var(--color-saffron)]" />
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">Diaspora link</p>
                  </div>
                  <p className="text-lg leading-8 text-white/85">
                    In migration contexts, ingredient substitutions may occur, but the ritual structure often remains.
                    For this reason, plov becomes a stable marker of Uzbek identity even when geographic location
                    changes.
                  </p>
                  <Button asChild variant="outline" className="rounded-full border-white/25 bg-white/15 text-white hover:bg-white/25 mt-2">
                    <Link href="/diaspora">
                      Read diaspora stories <ArrowRight className="icon-em" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── MEMORY ── */}
      <section aria-labelledby="memory-heading" className="section-shell-tight grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Card
          className="surface-panel border-0 py-0 text-[color:var(--color-paper)] shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
          style={{ background: `linear-gradient(160deg, var(--color-cobalt) 0%, var(--color-ink) 100%)` }}
        >
          <CardHeader className="space-y-4 border-b border-white/10 px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--color-paper-muted)]">Language and memory</p>
            <CardTitle id="memory-heading" className="font-serif text-[clamp(2.25rem,10vw,3.75rem)] leading-tight text-white">
              The language surrounding plov is as significant as its taste.
            </CardTitle>
          </CardHeader>
          <CardContent className="px-5 py-6 sm:px-8 sm:py-8">
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
          <div className="surface-panel relative min-h-[18rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.14)] sm:min-h-[22rem]">
            <Image
              src="/12.jpg"
              alt="Family preparing food together"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,17,12,0.08),rgba(28,17,12,0.7))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Family transmission</p>
              <p className="mt-3 max-w-xs text-lg leading-7">
                Children learn plov by watching — absorbing timing, smell, and rhythm through embodied practice.
              </p>
            </div>
          </div>

          <Card
            className="surface-panel border-0 shadow-[0_18px_52px_rgba(0,0,0,0.1)]"
            style={{ background: `linear-gradient(160deg, color-mix(in srgb, var(--color-teal) 10%, white), white)` }}
          >
            <CardHeader className="space-y-3 px-6">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-[color:var(--color-teal)]" />
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Cooking logic</p>
              </div>
              <CardTitle className="font-serif text-3xl leading-tight">Plov is remembered through procedural sequence.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 px-6 pt-0">
              {timeline.map((step, i) => (
                <div key={step.label} className="flex gap-4">
                  <div
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                    style={{ backgroundColor: ['var(--color-cobalt)', 'var(--color-teal)', 'var(--color-spice)'][i] }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/70">{step.label}</p>
                    <p className="mt-1 text-base leading-7 text-foreground/75">{step.text}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── REGIONAL VARIATIONS ── */}
      <section id="ritual" className="section-shell">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Regional identity</p>
            <h2 className="mt-3 font-serif text-[clamp(2.75rem,12vw,4.5rem)] leading-none">
              Regional variation within a shared cultural symbol
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
            Regional variations demonstrate the diversity of Uzbek cuisine. Although the dish changes in detail, the
            cultural role of plov as a unifying national food remains consistent.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {regionalNotes.map((note) => (
            <Card
              key={note.value}
              className="group overflow-hidden rounded-[1.9rem] border-0 py-0 shadow-[0_24px_64px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={note.image}
                  alt={`${note.value} osh illustration`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 30%, color-mix(in srgb, ${note.color} 85%, transparent) 100%)`,
                  }}
                />
              </div>
              <div style={{ backgroundColor: note.color }}>
                <CardHeader className="space-y-3 px-6 pt-5">
                  <Badge className="w-fit rounded-full bg-white/20 px-3 py-1 text-white">{note.value}</Badge>
                  <CardTitle className="font-serif text-3xl leading-tight text-white">{note.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-base leading-8 text-white/80">{note.text}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ── EXPLORE MORE ── */}
      <section className="section-shell">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-foreground/55">Dig deeper</p>
          <h2 className="mt-3 font-serif text-[clamp(2.5rem,10vw,4rem)] leading-tight">Explore the full project</h2>
          <p className="mt-3 max-w-xl text-lg text-foreground/70">
            Three companion pieces — a photo gallery, a historical timeline, and diaspora stories.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {exploreCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
            >
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to top, color-mix(in srgb, ${card.color} 92%, transparent) 0%, color-mix(in srgb, ${card.color} 35%, transparent) 55%, transparent 100%)`,
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <Badge className="mb-3 rounded-full bg-white/20 px-3 py-1 text-xs text-white">{card.label}</Badge>
                <h3 className="font-serif text-2xl leading-tight">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{card.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[color:var(--color-saffron)]">
                  Explore <ArrowRight className="icon-em transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-shell-tight pt-4">
        <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-black/8 bg-[rgba(255,252,248,0.9)] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.06)] lg:grid-cols-[0.92fr_1.08fr] lg:p-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Quick explanation</p>
            <h2 className="font-serif text-[clamp(2.35rem,10vw,3.75rem)] leading-tight">
              Why this topic is analytically effective
            </h2>
            <p className="text-base leading-7 text-foreground/78 sm:text-lg sm:leading-8">
              Plov provides a clear case study for examining how food preserves identity. It connects memory, family
              roles, language, hospitality, and national culture within a single subject.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`} className="border-black/10">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-8 text-foreground/74">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── REFERENCES ── */}
      <section id="references" className="section-shell">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Research base</p>
            <h2 className="mt-3 font-serif text-[clamp(2.75rem,12vw,4.5rem)] leading-none">
              References supporting the analysis
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
            These sources support the page&apos;s focus on plov as an expression of hospitality, national identity,
            regional practice, and communal cohesion.
          </p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2">
          {references.map((reference) => (
            <li key={`${reference.author}-${reference.title}`}>
              <a
                href={reference.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open source: ${reference.title} by ${reference.author}`}
                className="motion-card group block rounded-[1.5rem] border border-black/10 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-cobalt)]/15 text-[color:var(--color-cobalt)]">
                      <BookOpenText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[color:var(--color-cobalt)]">
                        {reference.author}{' '}
                        <span className="font-normal text-foreground/50">({reference.date})</span>
                      </p>
                      <p className="mt-2 text-base font-semibold leading-7 text-foreground/82">{reference.title}</p>
                    </div>
                  </div>
                  <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-foreground/35 transition-colors group-hover:text-[color:var(--color-cobalt)]" />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* ── TEAM ── */}
      <section id="team" className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Project group</p>
            <h2 className="font-serif text-[clamp(2.75rem,12vw,4.5rem)] leading-none">DODALAR</h2>
            <p className="text-base leading-7 text-foreground/76 sm:text-lg sm:leading-8">
              Also known as Food Hunters — the group examines plov, also called osh, as a significant topic within Uzbek cuisine.
            </p>
            <Separator className="bg-black/10" />
            <p className="text-sm leading-7 text-foreground/60">
              The group prepared this project to demonstrate how one dish can explain memory, hospitality, and Uzbek
              identity across generations and borders.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {teamMembers.map((member, i) => (
              <Card
                key={member.name}
                className="surface-card motion-card border-0 shadow-[0_16px_46px_rgba(0,0,0,0.08)]"
              >
                <CardContent className="flex items-center gap-4 px-5 py-5">
                  <Avatar
                    className="size-12 border-2 border-white/50"
                    style={{ backgroundColor: memberColors[i] }}
                  >
                    <AvatarFallback
                      className="bg-transparent font-serif text-lg font-bold text-white"
                    >
                      {member.name
                        .split(' ')
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <Badge
                      variant="outline"
                      className="rounded-full border-black/10 bg-white/70 px-3 py-1 text-[0.7rem] tracking-[0.22em]"
                    >
                      {member.role}
                    </Badge>
                    <p className="mt-3 truncate text-xl font-semibold">{member.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
