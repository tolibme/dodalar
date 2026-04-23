'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, CheckCircle2, ChefHat, Flame, RotateCcw, Sparkles, Timer, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const cookingSteps = [
  {
    id: 'heat-oil',
    label: 'Heat oil',
    mark: '01',
    instruction: 'Begin by heating oil in the kazan to establish the thermal base of the dish.',
    success: 'The oil has reached the appropriate visual shimmer, indicating that the kazan is prepared for the next stage.',
  },
  {
    id: 'brown-meat',
    label: 'Brown meat',
    mark: '02',
    instruction: 'Add lamb or beef in order to develop the first layer of concentrated flavor.',
    success: 'The meat has browned, contributing a roasted aroma to the foundational base.',
  },
  {
    id: 'add-onions',
    label: 'Add onions',
    mark: '03',
    instruction: 'Add onions, which sweeten the zirvak and support the distribution of spices.',
    success: 'The onions have turned golden, indicating the development of aromatic complexity.',
  },
  {
    id: 'add-carrots',
    label: 'Add carrots',
    mark: '04',
    instruction: 'Add carrots, which contribute color, sweetness, and the recognizable character of Uzbek plov.',
    success: "The carrots have softened into the zirvak and strengthened the dish's visual identity.",
  },
  {
    id: 'season',
    label: 'Cumin + garlic',
    mark: '05',
    instruction: 'Season with cumin, garlic, and salt while allowing sufficient time for the aromatics to develop.',
    success: 'The cumin and garlic have activated the aromatic profile that signals the emergence of osh.',
  },
  {
    id: 'add-rice',
    label: 'Layer rice',
    mark: '06',
    instruction: 'Layer the rice carefully and preserve the separation between the rice and the zirvak.',
    success: 'The rice has been positioned evenly on top and is ready for the steaming phase.',
  },
  {
    id: 'steam',
    label: 'Steam slowly',
    mark: '07',
    instruction: 'Reduce the heat and allow steam to complete the cooking of the grains.',
    success: 'The grains have separated appropriately, indicating successful steam-based finishing.',
  },
  {
    id: 'serve',
    label: 'Serve together',
    mark: '08',
    instruction: 'Serve the plov communally, since the dish reaches its full social meaning through sharing.',
    success: 'The osh is ready to be presented at the dastarkhan.',
  },
]

const decoys = [
  { id: 'stir-rice', label: 'Disrupt the rice layer early', mark: 'X1' },
  { id: 'add-dessert', label: 'Introduce dessert ingredients first', mark: 'X2' },
  { id: 'turn-off', label: 'Terminate heat prematurely', mark: 'X3' },
]

const feedbackByMistake = [
  'This action is premature. Osh depends on sequence, timing, and patience.',
  'The zirvak must be established before the rice can be steamed effectively.',
  'The selected action is close, but Uzbek plov requires careful adherence to procedural order.',
]

export default function CookingPage() {
  const [stepIndex, setStepIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [message, setMessage] = useState(cookingSteps[0].instruction)
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const currentStep = cookingSteps[stepIndex]
  const isFinished = stepIndex === cookingSteps.length
  const progress = Math.round((stepIndex / cookingSteps.length) * 100)
  const heatLevel = Math.max(0, Math.min(100, 25 + stepIndex * 9 - mistakes * 3))
  const aromaLevel = Math.min(100, stepIndex * 13)
  const finalScore = Math.max(0, score - mistakes * 5)

  const options = isFinished
    ? []
    : [...cookingSteps.slice(stepIndex, stepIndex + 1), ...decoys].sort((a, b) => a.label.localeCompare(b.label))

  function chooseAction(actionId: string) {
    if (isFinished || !currentStep) {
      return
    }

    if (actionId === currentStep.id) {
      setCompletedSteps((steps) => [...steps, currentStep.id])
      setScore((value) => value + 15)
      setMessage(currentStep.success)
      setStepIndex((index) => index + 1)
      return
    }

    setMistakes((value) => value + 1)
    setScore((value) => Math.max(0, value - 3))
    setMessage(feedbackByMistake[mistakes % feedbackByMistake.length])
  }

  function resetGame() {
    setStepIndex(0)
    setScore(0)
    setMistakes(0)
    setMessage(cookingSteps[0].instruction)
    setCompletedSteps([])
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,_rgba(214,162,76,0.32),_transparent_26%),radial-gradient(circle_at_86%_18%,_rgba(164,82,43,0.2),_transparent_28%),linear-gradient(180deg,_rgba(248,238,222,1),_rgba(238,221,194,1))]" />
        <div className="grain-overlay absolute inset-0 opacity-30" />
      </div>

      <header className="nav-glass fixed inset-x-0 top-0 z-[100] border-b border-black/10 bg-background/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-8">
          <Link href="/" className="magnetic-link inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70">
            <ArrowLeft className="h-4 w-4" />
            Back to project
          </Link>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/55 sm:text-sm sm:tracking-[0.28em]">
            <ChefHat className="h-4 w-4" />
            Osh game
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-28 sm:px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:pb-14 lg:pt-32">
        <div className="space-y-7">
          <div className="space-y-5">
            <Badge className="rounded-full bg-[color:var(--color-saffron)] px-4 py-1.5 text-[color:var(--color-ink)]">
              Interactive culinary sequence study
            </Badge>
            <h1 className="break-words font-serif text-[clamp(3.1rem,16vw,5.9rem)] leading-[0.92] tracking-[-0.045em] md:text-8xl">
              Reconstruct the osh preparation sequence
            </h1>
            <p className="max-w-2xl text-base leading-7 text-foreground/76 sm:text-lg sm:leading-8">
              Reconstruct Uzbek plov step by step by selecting the appropriate action, maintaining heat control, and
              concluding with communal presentation at the dastarkhan.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="motion-card rounded-[1.5rem] border-black/10 bg-white/66">
              <CardContent className="px-5 py-5">
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">Score</p>
                <p className="mt-2 text-3xl font-semibold">{finalScore}</p>
              </CardContent>
            </Card>
            <Card className="motion-card rounded-[1.5rem] border-black/10 bg-white/66">
              <CardContent className="px-5 py-5">
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">Progress</p>
                <p className="mt-2 text-3xl font-semibold">{progress}%</p>
              </CardContent>
            </Card>
            <Card className="motion-card rounded-[1.5rem] border-black/10 bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
              <CardContent className="px-5 py-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-paper-muted)]">Mistakes</p>
                <p className="mt-2 text-3xl font-semibold">{mistakes}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="shimmer-border relative overflow-hidden rounded-[1.6rem] border-black/10 bg-[color:var(--color-ink)] py-0 text-[color:var(--color-paper)] shadow-[0_30px_90px_rgba(37,24,15,0.24)] sm:rounded-[2.2rem]">
          <div className="aurora-orb absolute -left-20 bottom-8 h-56 w-56 rounded-full bg-[color:var(--color-spice)]/20 blur-3xl" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--color-saffron)]/20 blur-3xl" />
          <CardHeader className="relative border-b border-white/10 px-5 py-5 sm:px-6 sm:py-6 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-paper-muted)]">Kazan status</p>
                <CardTitle className="mt-2 font-serif text-[clamp(2rem,9vw,3.25rem)]">
                  {isFinished ? 'Osh preparation is complete' : `Step ${stepIndex + 1}: ${currentStep.label}`}
                </CardTitle>
              </div>
              <button
                type="button"
                onClick={resetGame}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-[color:var(--color-paper-muted)] transition-colors hover:bg-white/10"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </CardHeader>

          <CardContent className="relative grid gap-7 px-5 py-6 sm:px-6 sm:py-7 md:px-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="space-y-5">
              <div className="kazan-pulse relative mx-auto flex aspect-square w-full max-w-[18rem] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(214,162,76,0.22),_rgba(87,47,25,0.22)_46%,_rgba(20,13,10,0.8)_68%)] shadow-inner sm:max-w-sm">
                <div className="absolute inset-8 rounded-full border border-[color:var(--color-saffron)]/30" />
                <div className="absolute inset-14 rounded-full bg-[radial-gradient(circle,_rgba(164,82,43,0.75),_rgba(36,24,19,0.9))]" />
                <div className="relative text-center">
                  <p className="font-serif text-5xl sm:text-7xl">{isFinished ? 'OK' : currentStep.mark}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.28em] text-[color:var(--color-paper-muted)]">
                    {isFinished ? 'Dastarkhan' : 'Kazan'}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Meter icon={Flame} label="Heat" value={heatLevel} />
                <Meter icon={Sparkles} label="Aroma" value={aromaLevel} />
                <Meter icon={Timer} label="Timing" value={Math.max(12, 100 - mistakes * 14)} />
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/7 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-paper-muted)]">Chef note</p>
                <p className="mt-3 text-base leading-7 sm:text-xl sm:leading-8">{isFinished ? 'The sequence has been completed. Serve the plov communally from the central platter.' : message}</p>
              </div>

              {isFinished ? (
                <div className="rounded-[1.5rem] border border-[color:var(--color-saffron)]/35 bg-[color:var(--color-saffron)]/14 p-5">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-[color:var(--color-saffron)]" />
                    <p className="text-xl font-semibold sm:text-2xl">The osh sequence is complete.</p>
                  </div>
                  <p className="mt-3 leading-7 text-[color:var(--color-paper-muted)]">
                    Final score: {finalScore}. A successful preparation preserves the canonical order: oil, meat,
                    onions, carrots, seasoning, rice, steam, and service.
                  </p>
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => chooseAction(option.id)}
                      className="motion-card rounded-[1.25rem] border border-white/10 bg-white/8 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-saffron)]/45 hover:bg-white/14"
                    >
                      <span className="font-serif text-2xl text-[color:var(--color-saffron)] sm:text-3xl">{option.mark}</span>
                      <span className="mt-3 block text-base font-semibold">{option.label}</span>
                    </button>
                  ))}
                </div>
              )}

              <div className="grid gap-2">
                {cookingSteps.map((step) => {
                  const isDone = completedSteps.includes(step.id)
                  const isCurrent = !isFinished && currentStep.id === step.id

                  return (
                    <div
                      key={step.id}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${
                        isDone
                          ? 'border-[color:var(--color-saffron)]/35 bg-[color:var(--color-saffron)]/12'
                          : isCurrent
                            ? 'border-white/20 bg-white/10'
                            : 'border-white/8 bg-white/5 text-[color:var(--color-paper-muted)]'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="h-4 w-4 text-[color:var(--color-saffron)]" /> : <span>{step.mark}</span>}
                      <span>{step.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

function Meter({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[color:var(--color-paper-muted)]">
        <span className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          {label}
        </span>
        <span>{value}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,_var(--color-saffron),_var(--color-spice))] transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
