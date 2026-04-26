'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, CheckCircle2, ChefHat, Flame, RotateCcw, Sparkles, Timer, Trophy } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'

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
  { id: 'stir-rice', label: 'Disrupt the rice layer early', mark: 'X1', hint: 'Breaks the grain structure.' },
  { id: 'add-dessert', label: 'Introduce dessert ingredients first', mark: 'X2', hint: 'Does not belong in osh preparation.' },
  { id: 'turn-off', label: 'Terminate heat prematurely', mark: 'X3', hint: 'Stops the dish before it develops.' },
]

const feedbackByMistake = [
  'This action is premature. Osh depends on sequence, timing, and patience.',
  'The zirvak must be established before the rice can be steamed effectively.',
  'The selected action is close, but Uzbek plov requires careful adherence to procedural order.',
]

const optionLayouts = [
  [1, 0, 2, 3],
  [2, 3, 0, 1],
  [3, 1, 2, 0],
  [0, 2, 1, 3],
]

const phaseNames = [
  'Heat control',
  'Flavor base',
  'Aromatic layer',
  'Color and sweetness',
  'Seasoning',
  'Rice structure',
  'Steam finish',
  'Communal service',
]

export default function CookingPage() {
  const [stepIndex, setStepIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [feedback, setFeedback] = useState('Start by reading the instruction and choosing the first action.')
  const [lastResult, setLastResult] = useState<'idle' | 'correct' | 'mistake'>('idle')
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const currentStep = cookingSteps[stepIndex]
  const isFinished = stepIndex === cookingSteps.length
  const progress = Math.round((stepIndex / cookingSteps.length) * 100)
  const remainingSteps = Math.max(0, cookingSteps.length - stepIndex)
  const heatLevel = Math.max(0, Math.min(100, 25 + stepIndex * 9 - mistakes * 3))
  const aromaLevel = Math.min(100, stepIndex * 13)
  const finalScore = Math.max(0, score - mistakes * 5)
  const currentPhase = isFinished ? 'Serving' : phaseNames[stepIndex]

  const options = isFinished
    ? []
    : optionLayouts[stepIndex % optionLayouts.length].map((index) => [currentStep, ...decoys][index])

  function chooseAction(actionId: string) {
    if (isFinished || !currentStep) {
      return
    }

    if (actionId === currentStep.id) {
      setCompletedSteps((steps) => [...steps, currentStep.id])
      setScore((value) => value + 15)
      setFeedback(currentStep.success)
      setLastResult('correct')
      setStepIndex((index) => index + 1)
      return
    }

    setMistakes((value) => value + 1)
    setScore((value) => Math.max(0, value - 3))
    setFeedback(feedbackByMistake[mistakes % feedbackByMistake.length])
    setLastResult('mistake')
  }

  function resetGame() {
    setStepIndex(0)
    setScore(0)
    setMistakes(0)
    setFeedback('Start by reading the instruction and choosing the first action.')
    setLastResult('idle')
    setCompletedSteps([])
  }

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,_rgba(214,162,76,0.36),_transparent_25%),radial-gradient(circle_at_86%_18%,_rgba(164,82,43,0.22),_transparent_28%),radial-gradient(circle_at_50%_85%,_rgba(36,24,19,0.12),_transparent_36%),linear-gradient(180deg,_rgba(248,238,222,1),_rgba(238,221,194,1))]" />
        <div className="grain-overlay absolute inset-0 opacity-30" />
      </div>

      <header className="nav-glass fixed inset-x-0 top-0 z-[100] border-b border-black/10 bg-background/80 backdrop-blur-2xl">
        <div className="page-shell flex flex-wrap items-center justify-between gap-3 py-3">
          <Button asChild variant="ghost" className="magnetic-link rounded-full px-[1em] py-[1.35em] text-sm font-semibold">
            <Link href="/">
              <ArrowLeft className="icon-em" />
              Back to project
            </Link>
          </Button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-foreground/55 sm:text-sm sm:tracking-[0.28em]">
            <ChefHat className="icon-em" />
            Osh game
          </div>
        </div>
      </header>

      <section className="hero-shell grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:pb-14">
        <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="space-y-5">
            <Badge className="rounded-full bg-[color:var(--color-saffron)] px-4 py-1.5 text-[color:var(--color-ink)]">
              Interactive culinary sequence study
            </Badge>
            <h1 className="max-w-[9ch] break-words font-serif text-[clamp(3.15rem,15vw,6.6rem)] leading-[0.86] tracking-[-0.055em]">
              Master the osh sequence
            </h1>
            <p className="max-w-2xl text-base leading-7 text-foreground/76 sm:text-lg sm:leading-8">
              A focused cooking challenge about order, heat, and patience. Read the prompt, choose the next move,
              and keep the kazan under control.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-[1.45em] border border-black/10 bg-white/68 shadow-[0_20px_70px_rgba(70,43,20,0.08)] backdrop-blur">
            <StatBlock label="Score" value={finalScore} tone="dark" />
            <StatBlock label="Progress" value={`${progress}%`} />
            <StatBlock label="Mistakes" value={mistakes} />
          </div>

          <Card className="surface-card border-black/10 bg-white/62 shadow-[0_16px_46px_rgba(70,43,20,0.05)]">
            <CardContent className="space-y-3 p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-spice)]">Round rule</p>
              <p className="text-sm leading-6 text-foreground/72">
                Read the current instruction, then choose the action that should happen immediately next. There are{' '}
                {remainingSteps} step{remainingSteps === 1 ? '' : 's'} left in the sequence.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="surface-panel shimmer-border relative overflow-hidden gap-0 border-black/10 bg-[color:var(--color-ink)] py-0 text-[color:var(--color-paper)] shadow-[0_34px_110px_rgba(37,24,15,0.28)]">
          <div className="aurora-orb absolute -left-28 bottom-16 h-72 w-72 rounded-full bg-[color:var(--color-spice)]/22 blur-3xl" />
          <div className="absolute -right-16 -top-14 h-56 w-56 rounded-full bg-[color:var(--color-saffron)]/22 blur-3xl" />

          <div className="relative border-b border-white/10 px-5 py-3 sm:px-7 sm:py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className="rounded-full bg-[color:var(--color-saffron)] px-3 py-1 text-[color:var(--color-ink)]">
                    {isFinished ? 'Ready to serve' : `Step ${stepIndex + 1} / ${cookingSteps.length}`}
                  </Badge>
                  <Badge variant="outline" className="rounded-full border-white/12 bg-white/5 text-[color:var(--color-paper-muted)]">
                    {mistakes === 0 ? 'Clean run' : `${mistakes} correction${mistakes === 1 ? '' : 's'}`}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--color-paper-muted)]">Current phase</p>
                  <CardTitle className="mt-1 font-serif text-[clamp(2.1rem,7vw,4.6rem)] leading-[0.95] tracking-[-0.035em]">
                    {isFinished ? 'Osh is ready' : currentPhase}
                  </CardTitle>
                </div>
              </div>
              <Button
                onClick={resetGame}
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 px-[1em] text-[color:var(--color-paper-muted)] hover:bg-white/10 hover:text-[color:var(--color-paper)]"
              >
                <RotateCcw className="icon-em" />
                Reset
              </Button>
            </div>
            <Progress
              value={progress}
              className="mt-5 h-[0.55em] bg-white/10 [&_[data-slot=progress-indicator]]:bg-[linear-gradient(90deg,_var(--color-saffron),_var(--color-spice))]"
            />
          </div>

          <CardContent className="relative grid gap-6 px-5 py-5 sm:px-7 sm:py-7 xl:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-[1.65em] border border-white/10 bg-[radial-gradient(circle_at_50%_30%,_rgba(214,162,76,0.18),_rgba(255,255,255,0.06)_34%,_rgba(0,0,0,0.12)_80%)] p-5">
                <div className="kazan-pulse relative mx-auto flex aspect-square w-full max-w-[22rem] items-center justify-center rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(214,162,76,0.27),_rgba(87,47,25,0.3)_45%,_rgba(20,13,10,0.88)_68%)] shadow-inner">
                  <div className="absolute inset-[10%] rounded-full border border-[color:var(--color-saffron)]/30" />
                  <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle,_rgba(214,162,76,0.44),_rgba(164,82,43,0.62)_48%,_rgba(36,24,19,0.92))]" />
                  <div className="absolute inset-[25%] rounded-full border border-white/8" />
                  <div className="relative text-center">
                    <p className="font-serif text-6xl leading-none tracking-[-0.06em] sm:text-8xl">
                      {isFinished ? '08' : currentStep.mark}
                    </p>
                    <p className="mt-3 text-xs uppercase tracking-[0.34em] text-[color:var(--color-paper-muted)]">
                      {isFinished ? 'Dastarkhan' : 'Kazan'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                <Meter icon={Flame} label="Heat" value={heatLevel} />
                <Meter icon={Sparkles} label="Aroma" value={aromaLevel} />
                <Meter icon={Timer} label="Timing" value={Math.max(12, 100 - mistakes * 14)} />
              </div>
            </div>

            <div className="space-y-5">
              <Alert className="rounded-[1.35em] border-white/10 bg-white/8 p-5 text-[color:var(--color-paper)]">
                <ChefHat className="icon-em text-[color:var(--color-saffron)]" />
                <AlertTitle className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-paper-muted)]">
                  Current instruction
                </AlertTitle>
                <AlertDescription className="text-[color:var(--color-paper)] [&_p]:text-base [&_p]:leading-7 sm:[&_p]:text-xl sm:[&_p]:leading-8">
                  <p>
                    {isFinished
                      ? 'The sequence has been completed. Serve the plov communally from the central platter.'
                      : currentStep.instruction}
                  </p>
                </AlertDescription>
              </Alert>

              <Alert
                className={`rounded-[1.35em] p-5 text-[color:var(--color-paper)] ${
                  lastResult === 'correct'
                    ? 'border-[color:var(--color-saffron)]/35 bg-[color:var(--color-saffron)]/12'
                    : lastResult === 'mistake'
                      ? 'border-[color:var(--color-spice)]/45 bg-[color:var(--color-spice)]/16'
                      : 'border-white/10 bg-white/6'
                }`}
              >
                <Sparkles className="icon-em text-[color:var(--color-saffron)]" />
                <AlertTitle className="text-xs uppercase tracking-[0.28em] text-[color:var(--color-paper-muted)]">
                  Last action feedback
                </AlertTitle>
                <AlertDescription className="text-[color:var(--color-paper-muted)] [&_p]:leading-7">
                  <p>{feedback}</p>
                </AlertDescription>
              </Alert>

              {isFinished ? (
                <Alert className="rounded-[1.35em] border-[color:var(--color-saffron)]/35 bg-[color:var(--color-saffron)]/14 p-5 text-[color:var(--color-paper)]">
                  <Trophy className="h-5 w-5 text-[color:var(--color-saffron)]" />
                  <AlertTitle className="text-xl font-semibold sm:text-2xl">The osh sequence is complete.</AlertTitle>
                  <AlertDescription className="text-[color:var(--color-paper-muted)] [&_p]:leading-7">
                    <p>
                      Final score: {finalScore}. A successful preparation preserves the canonical order: oil, meat,
                      onions, carrots, seasoning, rice, steam, and service.
                    </p>
                  </AlertDescription>
                </Alert>
              ) : (
                <Card className="surface-card border-white/10 bg-white/6 shadow-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif text-3xl">Choose the next move</CardTitle>
                    <CardDescription className="text-[color:var(--color-paper-muted)]">
                      One action fits the current instruction. Wrong moves stay playable but cost points.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 pt-0 sm:grid-cols-2">
                    {options.map((option) => (
                      <Button
                        key={option.id}
                        onClick={() => chooseAction(option.id)}
                        variant="ghost"
                        className="surface-card motion-card group grid h-auto min-h-40 w-full grid-rows-[auto_1fr_auto] items-stretch justify-normal whitespace-normal border border-white/10 bg-white/8 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-saffron)]/45 hover:bg-white/14 hover:text-[color:var(--color-paper)] focus-visible:border-[color:var(--color-saffron)]"
                      >
                        <span className="flex w-full min-w-0 items-center justify-between gap-3">
                          <Badge className="rounded-full bg-[color:var(--color-saffron)]/18 px-2.5 py-1 font-serif text-base text-[color:var(--color-saffron)] hover:bg-[color:var(--color-saffron)]/18">
                            {option.mark}
                          </Badge>
                          <span className="shrink-0 text-xs uppercase tracking-[0.22em] text-[color:var(--color-paper-muted)] opacity-70 transition group-hover:opacity-100">
                            Select
                          </span>
                        </span>
                        <span className="mt-4 block w-full min-w-0 self-start text-wrap text-lg font-semibold leading-tight">
                          {option.label}
                        </span>
                        {'hint' in option ? (
                          <span className="mt-3 block w-full min-w-0 self-end text-wrap text-sm font-normal leading-5 text-[color:var(--color-paper-muted)]">
                            {option.hint}
                          </span>
                        ) : (
                          <span className="mt-3 block w-full min-w-0 self-end text-wrap text-sm font-normal leading-5 text-[color:var(--color-paper-muted)]">
                            Fits the current cooking phase.
                          </span>
                        )}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card className="surface-card border-white/10 bg-white/6 shadow-none">
                <CardHeader className="pb-3">
                  <CardTitle className="font-serif text-2xl">Sequence tracker</CardTitle>
                  <CardDescription className="text-[color:var(--color-paper-muted)]">
                    Completed stages stay highlighted so the user can read the dish as a process.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2 pt-0">
                  {cookingSteps.map((step, index) => {
                    const isDone = completedSteps.includes(step.id)
                    const isCurrent = !isFinished && currentStep.id === step.id

                    return (
                      <div key={step.id}>
                        <div
                          className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                            isDone
                              ? 'border-[color:var(--color-saffron)]/35 bg-[color:var(--color-saffron)]/12'
                              : isCurrent
                                ? 'border-white/20 bg-white/10'
                                : 'border-white/8 bg-white/5 text-[color:var(--color-paper-muted)]'
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 className="icon-em text-[color:var(--color-saffron)]" />
                          ) : (
                            <Badge
                              variant="outline"
                              className="rounded-full border-white/10 bg-transparent font-serif text-[0.9rem] text-inherit"
                            >
                              {step.mark}
                            </Badge>
                          )}
                          <span className="font-medium">{step.label}</span>
                          {isCurrent ? (
                            <Badge className="ml-auto rounded-full bg-white/10 text-[color:var(--color-paper)] hover:bg-white/10">
                              Current
                            </Badge>
                          ) : null}
                        </div>
                        {index < cookingSteps.length - 1 ? <Separator className="my-1 bg-transparent" /> : null}
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

function StatBlock({ label, value, tone = 'light' }: { label: string; value: string | number; tone?: 'light' | 'dark' }) {
  return (
    <div
      className={`p-4 text-center sm:p-5 ${
        tone === 'dark'
          ? 'bg-[color:var(--color-ink)] text-[color:var(--color-paper)]'
          : 'border-l border-black/10 text-foreground'
      }`}
    >
      <p className="text-[0.65rem] uppercase tracking-[0.24em] opacity-60">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{value}</p>
    </div>
  )
}

function Meter({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: number }) {
  return (
    <div className="rounded-[1.15em] border border-white/10 bg-white/6 p-4">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-[color:var(--color-paper-muted)]">
        <span className="flex items-center gap-2">
          <Icon className="icon-em" />
          {label}
        </span>
        <span>{value}%</span>
      </div>
      <Progress
        value={value}
        className="h-[0.5em] bg-white/10 [&_[data-slot=progress-indicator]]:bg-[linear-gradient(90deg,_var(--color-saffron),_var(--color-spice))]"
      />
    </div>
  )
}
