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
  { href: '#about', label: 'About Osh' },
  { href: '#research-notes', label: 'Research Notes' },
  { href: '#heritage', label: 'Heritage' },
  { href: '#ritual', label: 'Ritual' },
  { href: '/cooking', label: 'Cooking Game' },
  { href: '#team', label: 'Team' },
  { href: '#references', label: 'Sources' },
]

const highlights = [
  {
    title: 'National culinary symbol',
    text: 'Plov, also referred to as osh, is among the most recognizable dishes in Uzbek cuisine and is closely associated with hospitality, celebration, and collective memory.',
    icon: HandPlatter,
  },
  {
    title: 'Prepared through the kazan tradition',
    text: 'The dish derives much of its sensory and cultural character from the kazan, where onions, carrots, meat, oil, rice, garlic, and cumin are structured into zirvak before the rice is steamed.',
    icon: CookingPot,
  },
  {
    title: 'Embedded in communal practice',
    text: 'The dish is strongly connected to weddings, family gatherings, neighborhood events, Friday meals, and shared tables where social memory is reproduced.',
    icon: Users,
  },
]

const flavorFacts = [
  {
    label: 'Rice',
    title: 'Structure holds the dish together',
    text: 'Distinct grains are central to the identity of plov, so rice becomes both a technical and symbolic core of the meal.',
    image: '/ingredient-rice.svg',
  },
  {
    label: 'Carrots',
    title: 'Color and sweetness signal familiarity',
    text: 'Yellow or orange carrots contribute the visual warmth and sweetness that many families associate with authentic osh.',
    image: '/ingredient-carrots.svg',
  },
  {
    label: 'Meat',
    title: 'Depth begins in the zirvak',
    text: 'Lamb or beef develops roasted flavor early in the process and helps define the communal richness expected from celebratory plov.',
    image: '/ingredient-meat.svg',
  },
  {
    label: 'Cumin and garlic',
    title: 'Aroma carries memory',
    text: 'Spices and aromatics make osh immediately recognizable, linking the meal to household memory long before it reaches the table.',
    image: '/ingredient-spices.svg',
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
    text: 'This regional form is often associated with a rich yet orderly presentation, in which the rice grains remain separate and the dish appears abundant without excessive heaviness.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plov%20Tashkent.jpg',
  },
  {
    value: 'Samarkand',
    title: 'Distinct layered presentation',
    text: 'This style is known for distinct visual layering, with rice, carrots, and meat often remaining visually separate before serving, thereby reflecting regional pride and technical specificity.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Uzbek%20pilaf%20Samarkand.jpg',
  },
  {
    value: 'Fergana',
    title: 'Intensified roasted flavor',
    text: 'This variation is commonly associated with stronger color, greater richness, and a cooking method that emphasizes flavor depth through oil, meat, and careful heat control.',
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Farg'onacha%20osh.jpg",
  },
]

const researchNotes = [
  {
    label: 'UNESCO recognition',
    title: 'Plov culture has formal heritage recognition',
    text: 'Uzbekistan successfully secured the inscription of plov culture and traditions on the UNESCO Intangible Cultural Heritage list in 2016.',
    source: 'Smithsonian / Outlook Traveller',
  },
  {
    label: 'Rice detail',
    title: 'Devzira rice has culinary significance',
    text: 'Travel reporting identifies devzira rice from the Fergana Valley as a valued variety for plov because it absorbs liquid while maintaining distinct grains.',
    source: 'Outlook Traveller',
  },
  {
    label: 'Serving rhythm',
    title: 'Plov is frequently associated with lunch',
    text: 'Several accounts describe plov as commonly served at lunchtime, with busy restaurants often exhausting their supply by mid-afternoon.',
    source: 'Smithsonian / Outlook Traveller',
  },
  {
    label: 'Tools',
    title: 'The kaftgir forms part of the culinary apparatus',
    text: 'In addition to the kazan, festive plov preparation may involve a flat metal skimmer called a kaftgir, which is used for handling rice and serving from the pot.',
    source: 'Uzbek Travel / Smithsonian',
  },
  {
    label: 'Occasion changes recipe',
    title: 'Occasion influences ingredient selection',
    text: 'Basic plov may be served at funerals, whereas weddings and holidays often incorporate chickpeas, raisins, garlic, barberries, quail eggs, or other festive additions.',
    source: 'Smithsonian',
  },
  {
    label: 'Public scale',
    title: 'One kazan can support collective consumption',
    text: "Large plov centers and public events use enormous kazans; Tashkent's Besh Qozon is reported to prepare tons of plov each day.",
    source: 'Outlook Traveller / Uzbek Travel',
  },
]

const timeline = [
  {
    label: 'Ingredient memory',
    text: 'Families often seek familiar rice, yellow carrots, cumin, garlic, and lamb or beef because these ingredients connect the present meal to earlier domestic kitchens.',
  },
  {
    label: 'Technique memory',
    text: 'The sequence is significant: heating the pot, constructing the zirvak, layering the rice, and allowing steam to complete the dish without damaging the grains.',
  },
  {
    label: 'Social memory',
    text: 'The meal is remembered not only for taste but also for the cook, the social gathering, and the narratives associated with its preparation and consumption.',
  },
]

const faqItems = [
  {
    question: 'Why is plov important in Uzbek culture?',
    answer:
      'Plov functions as more than a recipe. It represents hospitality, celebration, care for guests, and intergenerational continuity. Because it appears at weddings, holidays, and ordinary family meals, it operates as a cultural symbol rather than simply as a dish.',
  },
  {
    question: 'Why is it also called osh?',
    answer:
      'Osh is a widely used Uzbek term for the dish. Retaining the original word is significant because language forms part of cultural memory. Even when families live abroad, using osh rather than a translated term maintains a direct cultural connection.',
  },
  {
    question: 'How does plov preserve identity through immigration?',
    answer:
      'When immigrant families continue preparing plov, they preserve ingredient choices, cooking vocabulary, serving customs, and family roles. In this way, a single meal becomes a practical mechanism for maintaining Uzbek identity in a new national context.',
  },
]

const teamMembers = [
  'Nurmuxamedov Xurshid',
  'Xabibullaev Shohjahon',
  'Kamronbek Yunusov',
  'Nikolay Tsoy',
  'Qurbon Bagirov',
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
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(191,116,42,0.18),_transparent_30%),radial-gradient(circle_at_80%_12%,_rgba(141,83,34,0.16),_transparent_24%),linear-gradient(180deg,_rgba(248,238,222,1),_rgba(241,229,208,1))]" />
        <div className="grain-overlay absolute inset-0 opacity-30" />
      </div>

      <SiteHeader items={anchors} />

      <section className="hero-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
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
              <h1 className="max-w-4xl break-words font-serif text-[clamp(3.4rem,18vw,5.9rem)] leading-[0.92] tracking-[-0.045em] md:text-8xl lg:text-[8.4rem]">
                Plov is
                <span className="block text-[color:var(--color-spice)]">Uzbek memory</span>
              </h1>
              <p className="max-w-2xl text-base leading-7 text-foreground/78 sm:text-lg sm:leading-8 md:text-xl">
                This project examines plov, also known as osh, as a signature dish of Uzbek cuisine. It analyzes how a
                single meal can transmit family memory, national identity, Silk Road history, and hospitality across
                generations and geographic borders.
              </p>
              <div className="hero-actions flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="rounded-full px-[1.25em]">
                  <a href="#research-notes">
                    Explore findings
                    <ArrowRight className="icon-em" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-black/10 bg-white/70 px-[1.25em]">
                  <Link href="/cooking">Play the cooking game</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="surface-card animate-enter-delayed border-black/10 bg-white/72 shadow-[0_20px_60px_rgba(70,43,20,0.08)]">
              <CardHeader className="px-5 pb-0">
                <CardDescription className="text-xs uppercase tracking-[0.28em] text-foreground/55">
                  Topic
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pt-4">
                <p className="text-xl font-semibold sm:text-2xl">Plov as cultural identity</p>
              </CardContent>
            </Card>

            <Card className="surface-card animate-enter-delayed-2 border-black/10 bg-white/72 shadow-[0_20px_60px_rgba(70,43,20,0.08)]">
              <CardHeader className="px-5 pb-0">
                <CardDescription className="text-xs uppercase tracking-[0.28em] text-foreground/55">
                  Focus
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pt-4">
                <p className="text-xl font-semibold sm:text-2xl">Tradition, ritual, migration</p>
              </CardContent>
            </Card>

            <Card className="surface-card animate-enter-delayed-3 border-black/10 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] shadow-[0_20px_60px_rgba(34,22,17,0.2)]">
              <CardHeader className="px-5 pb-0">
                <CardDescription className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-paper-muted)]">
                  Team
                </CardDescription>
              </CardHeader>
              <CardContent className="px-5 pt-4">
                <p className="text-xl font-semibold sm:text-2xl">DODALAR / Food Hunters</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative animate-float">
          <div className="aurora-orb absolute -left-16 -top-10 h-56 w-56 rounded-full bg-[color:var(--color-saffron)]/30 blur-3xl" />
          <div className="aurora-orb-reverse absolute -bottom-10 -right-16 h-60 w-60 rounded-full bg-[color:var(--color-spice)]/24 blur-3xl" />
          <div className="absolute -left-4 top-10 h-36 w-36 rounded-full bg-[color:var(--color-saffron)]/35 blur-3xl" />
          <div className="absolute -right-4 bottom-12 h-40 w-40 rounded-full bg-[color:var(--color-spice)]/25 blur-3xl" />
          <div className="surface-panel shimmer-border relative overflow-hidden border border-black/10 bg-[color:var(--color-ink)] p-3 shadow-[0_30px_90px_rgba(37,24,15,0.24)]">
            <div className="surface-media relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Plov%20Tashkent.jpg"
                alt="Uzbek plov being prepared in Tashkent"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(18,12,9,0.08),_rgba(18,12,9,0.68))]" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6 text-[color:var(--color-paper)]">
                <Badge className="rounded-full bg-[color:var(--color-saffron)] text-[color:var(--color-ink)]">Signature dish</Badge>
                <p className="max-w-sm font-serif text-3xl leading-tight">
                  A plate of osh can simultaneously represent home, family rhythm, and Uzbek hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="about-heading" className="section-shell-tight">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Core ideas</p>
          <h2 id="about-heading" className="font-serif text-[clamp(2.1rem,9vw,3.5rem)] leading-tight">
            Three principles explain why osh matters beyond the plate.
          </h2>
          <p className="text-base leading-7 text-foreground/74 sm:text-lg sm:leading-8">
            These themes frame the rest of the project: plov as a national symbol, as a disciplined cooking practice,
            and as a communal ritual that carries memory.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon

            return (
              <Card
                key={highlight.title}
                className="motion-card reveal-stack rounded-[1.8rem] border-black/10 bg-white/68 shadow-[0_18px_50px_rgba(70,43,20,0.06)]"
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

      <section id="research-notes" className="section-shell">
        <div className="surface-panel grid gap-8 border border-black/10 bg-[color:var(--color-ink)] p-4 text-[color:var(--color-paper)] shadow-[0_25px_80px_rgba(31,18,11,0.22)] sm:p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
          <div className="space-y-5">
            <Badge className="w-fit rounded-full bg-[color:var(--color-saffron)] px-4 py-1.5 text-[color:var(--color-ink)]">
              From the references
            </Badge>
            <h2 className="font-serif text-[clamp(2.75rem,12vw,4.5rem)] leading-none md:text-6xl">Key findings from the research</h2>
            <p className="text-base leading-7 text-[color:var(--color-paper-muted)] sm:text-lg sm:leading-8">
              The sources extend the analysis beyond ingredients. They present plov as protected heritage, a lunchtime
              ritual, a craft involving specialized tools, and a public dish that scales from domestic tables to major
              urban plov centers.
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

      <section id="heritage" className="section-shell">
        <div className="surface-panel grid gap-8 border border-black/10 bg-white/58 p-4 shadow-[0_22px_70px_rgba(70,43,20,0.06)] sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="space-y-5">
            <Badge variant="outline" className="rounded-full border-black/10 bg-white/80 px-4 py-1.5">
              Why this dish matters
            </Badge>
            <h2 className="font-serif text-[clamp(2.35rem,10vw,3.75rem)] leading-tight md:text-5xl">Osh functions as both a recipe and a cultural archive.</h2>
            <p className="text-base leading-7 text-foreground/78 sm:text-lg sm:leading-8">
              In Uzbek households, plov preserves more than flavor. It stores technique, timing, language, and social
              etiquette. When families prepare it in another city or country, they reproduce not only a meal but also a
              sense of belonging.
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
                    Plov appears at celebrations, family meetings, and community events; therefore, it becomes a public
                    sign of Uzbek identity. Sources describe it as both everyday food and ceremonial food, which explains
                    why it is remembered collectively as well as individually.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="pt-5">
              <Card className="rounded-[1.75rem] border-black/10 bg-white/75 shadow-none">
                <CardContent className="space-y-5 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[color:var(--color-spice)]" />
                    <p className="text-sm uppercase tracking-[0.3em] text-foreground/55">Foundation</p>
                  </div>
                  <p className="text-lg leading-8 text-foreground/78">
                    Rice, carrots, meat, garlic, and cumin form the recognizable base. The ingredient set may vary in
                    proportion, but these elements preserve the structure families associate with authentic osh.
                  </p>
                  <div className="grid gap-3">
                    {flavorFacts.map((fact) => (
                      <Card
                        key={fact.label}
                        className="surface-card overflow-hidden border-black/10 bg-white/72 py-0 shadow-[0_12px_34px_rgba(70,43,20,0.05)]"
                      >
                        <div className="grid gap-0 sm:grid-cols-[8.5rem_1fr]">
                          <div className="relative min-h-[8.5rem] border-b border-black/10 bg-[rgba(214,162,76,0.12)] sm:min-h-full sm:border-b-0 sm:border-r">
                            <Image src={fact.image} alt={`${fact.label} illustration`} fill className="object-cover p-4" />
                          </div>
                          <CardContent className="px-5 py-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-spice)]">
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
              <Card className="rounded-[1.75rem] border-black/10 bg-white/75 shadow-none">
                <CardContent className="space-y-4 px-6 py-6">
                  <div className="flex items-center gap-3">
                    <MapPinned className="h-5 w-5 text-[color:var(--color-spice)]" />
                    <p className="text-sm uppercase tracking-[0.3em] text-foreground/55">Diaspora link</p>
                  </div>
                  <p className="text-lg leading-8 text-foreground/78">
                    In migration contexts, ingredient substitutions may occur, but the ritual structure often remains.
                    For this reason, plov becomes a stable marker of Uzbek identity even when geographic location changes.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section aria-labelledby="memory-heading" className="section-shell-tight grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Card className="surface-panel border-black/10 bg-[color:var(--color-ink)] py-0 text-[color:var(--color-paper)] shadow-[0_25px_80px_rgba(31,18,11,0.24)]">
          <CardHeader className="space-y-4 border-b border-white/10 px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--color-paper-muted)]">Language and memory</p>
            <CardTitle id="memory-heading" className="font-serif text-[clamp(2.25rem,10vw,3.75rem)] leading-tight md:text-5xl">
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
          <div className="surface-panel relative min-h-[18rem] overflow-hidden border border-black/10 sm:min-h-[22rem]">
            <Image src="/food-family.jpg" alt="Family preparing food together" fill className="object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(28,17,12,0.08),_rgba(28,17,12,0.64))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">Family transmission</p>
              <p className="mt-3 max-w-xs text-lg leading-7">
                Children often learn plov by observing parents and grandparents, thereby absorbing timing, smell, and
                rhythm through embodied practice.
              </p>
            </div>
          </div>

          <Card className="surface-panel border-black/10 bg-white/65 shadow-[0_16px_46px_rgba(70,43,20,0.06)]">
            <CardHeader className="space-y-3 px-6">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-[color:var(--color-spice)]" />
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Cooking logic</p>
              </div>
              <CardTitle className="font-serif text-3xl leading-tight">Plov is remembered through procedural sequence.</CardTitle>
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

      <section id="ritual" className="section-shell">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Regional identity</p>
            <h2 className="mt-3 font-serif text-[clamp(2.75rem,12vw,4.5rem)] leading-none md:text-6xl">Regional variation within a shared cultural symbol</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
            Regional variations demonstrate the diversity of Uzbek cuisine. Although the dish changes in detail, the
            cultural role of plov as a unifying national food remains consistent.
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

      <section className="section-shell-tight pt-4">
        <div className="surface-panel grid gap-8 border border-black/10 bg-[rgba(255,250,244,0.8)] p-4 shadow-[0_22px_70px_rgba(70,43,20,0.06)] sm:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Quick explanation</p>
            <h2 className="font-serif text-[clamp(2.35rem,10vw,3.75rem)] leading-tight md:text-5xl">Why this topic is analytically effective</h2>
            <p className="text-base leading-7 text-foreground/78 sm:text-lg sm:leading-8">
              Plov provides a clear case study for examining how food preserves identity. It connects memory, family
              roles, language, hospitality, and national culture within a single subject that can be communicated visually.
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

      <section id="references" className="section-shell">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Research base</p>
            <h2 className="mt-3 font-serif text-[clamp(2.75rem,12vw,4.5rem)] leading-none md:text-6xl">References supporting the analysis</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/72 sm:text-base sm:leading-8">
            These sources support the page&apos;s focus on plov as an expression of hospitality, national identity,
            regional practice, and communal cohesion within Uzbek communities.
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
                className="motion-card group block rounded-[1.5rem] border border-black/10 bg-white/64 p-5 shadow-[0_16px_46px_rgba(70,43,20,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/82"
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
            </li>
          ))}
        </ul>
      </section>

      <section id="team" className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/55">Project group</p>
            <h2 className="font-serif text-[clamp(2.75rem,12vw,4.5rem)] md:text-6xl">DODALAR</h2>
            <p className="text-base leading-7 text-foreground/76 sm:text-lg sm:leading-8">
              Also known as Food Hunters, the group examines plov, also called osh, as a significant topic within Uzbek
              cuisine.
            </p>
            <Separator className="bg-black/10" />
            <p className="text-sm leading-7 text-foreground/62">
              The group prepared this project to demonstrate how one dish can explain memory, hospitality, and Uzbek
              identity.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {teamMembers.map((member) => (
              <Card key={member} className="surface-card motion-card border-black/10 bg-white/68 shadow-[0_16px_46px_rgba(70,43,20,0.05)]">
                <CardContent className="flex items-center gap-4 px-5 py-5">
                  <Avatar className="size-12 border border-[color:var(--color-saffron)]/35 bg-[color:var(--color-saffron)]/18">
                    <AvatarFallback className="bg-transparent font-serif text-lg text-[color:var(--color-spice)]">
                      {member
                        .split(' ')
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <Badge variant="outline" className="rounded-full border-black/10 bg-white/70 px-3 py-1 text-[0.7rem] tracking-[0.22em]">
                      Group member
                    </Badge>
                    <p className="mt-3 text-xl font-semibold">{member}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[rgba(255,248,239,0.82)]">
        <div className="page-shell flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold">DODALAR | Plov / Osh Project</p>
            <p className="text-sm text-foreground/62">
              Copyright {new Date().getFullYear()} DODALAR. All rights reserved.
            </p>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/62">
            Topic: Plov, also known as osh, as a cultural symbol of Uzbek cuisine, memory, and hospitality.
          </p>
          <Button asChild variant="ghost" className="self-start rounded-full px-[1em] md:self-auto">
            <a href="#main-content">Back to top</a>
          </Button>
        </div>
      </footer>
    </main>
  )
}
