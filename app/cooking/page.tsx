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
    instruction: 'Start with hot oil in the kazan.',
    success: 'The oil shimmers. The kazan is ready.',
  },
  {
    id: 'brown-meat',
    label: 'Brown meat',
    mark: '02',
    instruction: 'Add lamb or beef and build the first deep flavor.',
    success: 'The meat browns and gives the base a roasted aroma.',
  },
  {
    id: 'add-onions',
    label: 'Add onions',
    mark: '03',
    instruction: 'Onions sweeten the zirvak and carry the spices.',
    success: 'The onions turn golden and the kitchen smells warm.',
  },
  {
    id: 'add-carrots',
    label: 'Add carrots',
    mark: '04',
    instruction: 'Carrots bring color, sweetness, and Uzbek plov character.',
    success: 'Orange and yellow carrots soften into the zirvak.',
  },
  {
    id: 'season',
    label: 'Cumin + garlic',
    mark: '05',
    instruction: 'Season with cumin, garlic, salt, and patience.',
    success: 'Cumin wakes up the pot. The aroma says osh is coming.',
  },
  {
    id: 'add-rice',
    label: 'Layer rice',
    mark: '06',
    instruction: 'Add rice carefully. Do not stir the layers.',
    success: 'The rice sits neatly on top, ready to steam.',
  },
  {
    id: 'steam',
    label: 'Steam slowly',
    mark: '07',
    instruction: 'Lower the heat and let steam finish the grains.',
    success: 'The grains separate and the kazan goes quiet.',
  },
  {
    id: 'serve',
    label: 'Serve together',
    mark: '08',
    instruction: 'Plov becomes complete when it is shared.',
    success: 'The osh is ready for the dastarkhan.',
  },
]

const decoys = [
  { id: 'stir-rice', label: 'Stir the rice early', mark: 'X1' },
  { id: 'add-dessert', label: 'Add dessert first', mark: 'X2' },
  { id: 'turn-off', label: 'Turn off heat now', mark: 'X3' },
]

const feedbackByMistake = [
  'Not yet. Osh depends on order, timing, and patience.',
  'Careful: the zirvak needs to be built before the rice steams.',
  'Almost, but Uzbek plov rewards the cook who follows the sequence.',
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
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,_rgba(214,162,76,0.32),_transparent_26%),radial-gradient(circle_at_86%_18%,_rgba(164,82,43,0.2),_transparent_28%),linear-gradient(180deg,_rgba(248,238,222,1),_rgba(238,221,194,1))]" />
        <div className="grain-overlay absolute inset-0 opacity-30" />
      </div>

      <header className="border-b border-black/10 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-65">
            <ArrowLeft className="h-4 w-4" />
            Back to project
          </Link>
          <div className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-foreground/55">
            <ChefHat className="h-4 w-4" />
            Osh game
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
        <div className="space-y-7">
          <div className="space-y-5">
            <Badge className="rounded-full bg-[color:var(--color-saffron)] px-4 py-1.5 text-[color:var(--color-ink)]">
              Interactive cooking challenge
            </Badge>
            <h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.045em] md:text-8xl">
              Cook osh in the right order
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-foreground/76">
              Build Uzbek plov step by step. Choose the correct action, protect the heat, and finish with a shared
              dastarkhan plate.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card className="rounded-[1.5rem] border-black/10 bg-white/66">
              <CardContent className="px-5 py-5">
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">Score</p>
                <p className="mt-2 text-3xl font-semibold">{finalScore}</p>
              </CardContent>
            </Card>
            <Card className="rounded-[1.5rem] border-black/10 bg-white/66">
              <CardContent className="px-5 py-5">
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">Progress</p>
                <p className="mt-2 text-3xl font-semibold">{progress}%</p>
              </CardContent>
            </Card>
            <Card className="rounded-[1.5rem] border-black/10 bg-[color:var(--color-ink)] text-[color:var(--color-paper)]">
              <CardContent className="px-5 py-5">
                <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-paper-muted)]">Mistakes</p>
                <p className="mt-2 text-3xl font-semibold">{mistakes}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="relative overflow-hidden rounded-[2.2rem] border-black/10 bg-[color:var(--color-ink)] py-0 text-[color:var(--color-paper)] shadow-[0_30px_90px_rgba(37,24,15,0.24)]">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[color:var(--color-saffron)]/20 blur-3xl" />
          <CardHeader className="relative border-b border-white/10 px-6 py-6 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-paper-muted)]">Kazan status</p>
                <CardTitle className="mt-2 font-serif text-4xl">
                  {isFinished ? 'Osh is ready' : `Step ${stepIndex + 1}: ${currentStep.label}`}
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

          <CardContent className="relative grid gap-7 px-6 py-7 md:px-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="space-y-5">
              <div className="relative mx-auto flex aspect-square max-w-sm items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(214,162,76,0.22),_rgba(87,47,25,0.22)_46%,_rgba(20,13,10,0.8)_68%)] shadow-inner">
                <div className="absolute inset-8 rounded-full border border-[color:var(--color-saffron)]/30" />
                <div className="absolute inset-14 rounded-full bg-[radial-gradient(circle,_rgba(164,82,43,0.75),_rgba(36,24,19,0.9))]" />
                <div className="relative text-center">
                  <p className="font-serif text-7xl">{isFinished ? 'OK' : currentStep.mark}</p>
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
                <p className="mt-3 text-xl leading-8">{isFinished ? 'Perfect. Serve the plov from the center and share it together.' : message}</p>
              </div>

              {isFinished ? (
                <div className="rounded-[1.5rem] border border-[color:var(--color-saffron)]/35 bg-[color:var(--color-saffron)]/14 p-5">
                  <div className="flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-[color:var(--color-saffron)]" />
                    <p className="text-2xl font-semibold">You cooked osh!</p>
                  </div>
                  <p className="mt-3 leading-7 text-[color:var(--color-paper-muted)]">
                    Final score: {finalScore}. The best cooks keep the order clean: oil, meat, onions, carrots, seasoning,
                    rice, steam, serve.
                  </p>
                </div>
              ) : (
                <div className="grid gap-3 sm:grid-cols-2">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => chooseAction(option.id)}
                      className="rounded-[1.25rem] border border-white/10 bg-white/8 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-saffron)]/45 hover:bg-white/14"
                    >
                      <span className="font-serif text-3xl text-[color:var(--color-saffron)]">{option.mark}</span>
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
