import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
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

export const metadata = {
  title: 'Video — DODALAR',
  description: 'Watch a documentary video about Uzbek plov and its cultural significance.',
}

export default function VideoPage() {
  return (
    <>
      <SiteHeader items={pageNavItems} />
      <main id="main-content" className="page-shell pt-[var(--header-offset)] pb-[var(--section-space)]">
        <div className="mx-auto max-w-4xl space-y-10 py-12">
          <div className="space-y-3">
            <Button asChild variant="ghost" size="sm" className="-ml-2 text-foreground/60 hover:text-foreground">
              <Link href="/">
                <ArrowLeft className="mr-1.5 h-4 w-4" />
                Back to home
              </Link>
            </Button>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">Video</h1>
            <p className="max-w-2xl text-foreground/70">
              A documentary look at Uzbek plov — its preparation, cultural meaning, and place in collective memory.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-black/10 bg-black shadow-xl">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/NTl19RjzS90?rel=0&modestbranding=1"
                title="Uzbek Plov Documentary"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
