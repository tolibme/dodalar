'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CheckCircle2, Flame, RotateCcw, Sparkles, Timer, Trophy, XCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
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

type Step = { id: string; label: string; instruction: string; success: string }
type Decoy = { id: string; label: string; wrong: string }
type Option = Step | Decoy

const steps: Step[] = [
  {
    id: 'heat-oil',
    label: 'Heat the oil',
    instruction: 'Begin by heating oil in the kazan. The oil must reach a visual shimmer before anything else is added.',
    success: 'The oil is shimmering — the kazan is ready for the next stage.',
  },
  {
    id: 'brown-meat',
    label: 'Brown the meat',
    instruction: 'Add lamb or beef to develop the first layer of concentrated, roasted flavor.',
    success: 'The meat has browned, adding deep aroma to the base.',
  },
  {
    id: 'add-onions',
    label: 'Add onions',
    instruction: 'Add onions to sweeten the zirvak and support the distribution of spices throughout the base.',
    success: 'Golden onions — aromatic complexity is building nicely.',
  },
  {
    id: 'add-carrots',
    label: 'Add carrots',
    instruction: 'Add carrots to contribute color, sweetness, and the recognizable character of Uzbek plov.',
    success: 'The carrots have softened into the zirvak. The dish is taking shape.',
  },
  {
    id: 'season',
    label: 'Season with cumin and garlic',
    instruction: 'Add cumin, garlic, and salt. Allow the aromatics enough time to fully activate in the heat.',
    success: 'Cumin and garlic are blooming — the unmistakable smell of osh is emerging.',
  },
  {
    id: 'add-rice',
    label: 'Layer the rice',
    instruction: 'Carefully layer rice over the zirvak, preserving the separation between the grain and the base.',
    success: 'The rice is evenly placed on top, ready to absorb steam.',
  },
  {
    id: 'steam',
    label: 'Steam slowly',
    instruction: 'Reduce heat to low and allow steam to finish cooking the grains to a perfectly separated texture.',
    success: 'The grains are separate and fully cooked. The zirvak is set.',
  },
  {
    id: 'serve',
    label: 'Serve communally',
    instruction: 'Present the plov from the central platter — the dish reaches its full meaning through shared eating.',
    success: 'The osh is ready at the dastarkhan. The sequence is complete.',
  },
]

const decoys: Decoy[] = [
  {
    id: 'stir-rice',
    label: 'Stir the rice layer',
    wrong: 'Stirring the rice before it has steamed breaks the grain structure and ruins the texture.',
  },
  {
    id: 'add-dessert',
    label: 'Add sweet fruit toppings',
    wrong: 'Sweet fruit toppings do not belong in this stage of traditional plov preparation.',
  },
  {
    id: 'turn-off',
    label: 'Turn off the heat early',
    wrong: 'Cutting heat too early leaves the grains undercooked and the zirvak unfinished.',
  },
]

const shuffles = [
  [1, 0, 2, 3],
  [2, 3, 0, 1],
  [3, 1, 2, 0],
  [0, 2, 1, 3],
]

const letters = ['A', 'B', 'C', 'D']

export default function CookingPage() {
  const [stepIndex, setStepIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [mistakes, setMistakes] = useState(0)
  const [feedback, setFeedback] = useState<{ type: 'idle' | 'correct' | 'wrong'; text: string }>({
    type: 'idle',
    text: 'Read the instruction and choose the correct next action.',
  })
  const [completedIds, setCompletedIds] = useState<string[]>([])
  const [wrongId, setWrongId] = useState<string | null>(null)

  const current = steps[stepIndex]
  const isFinished = stepIndex === steps.length
  const progress = Math.round((stepIndex / steps.length) * 100)
  const finalScore = Math.max(0, score - mistakes * 3)
  const heatLevel = Math.max(0, Math.min(100, 25 + stepIndex * 9 - mistakes * 3))
  const aromaLevel = Math.min(100, stepIndex * 13)
  const timingLevel = Math.max(12, 100 - mistakes * 14)

  const options: Option[] = isFinished
    ? []
    : shuffles[stepIndex % shuffles.length].map((i) => ([current, ...decoys] as Option[])[i])

  function choose(id: string) {
    if (isFinished || !current) return
    setWrongId(null)
    if (id === current.id) {
      setCompletedIds((prev) => [...prev, current.id])
      setScore((s) => s + 15)
      setFeedback({ type: 'correct', text: current.success })
      setStepIndex((i) => i + 1)
    } else {
      setMistakes((m) => m + 1)
      const d = decoys.find((dec) => dec.id === id)
      setFeedback({
        type: 'wrong',
        text: d?.wrong ?? 'That step is out of sequence. Osh requires careful, ordered preparation.',
      })
      setWrongId(id)
    }
  }

  function reset() {
    setStepIndex(0)
    setScore(0)
    setMistakes(0)
    setFeedback({ type: 'idle', text: 'Read the instruction and choose the correct next action.' })
    setCompletedIds([])
    setWrongId(null)
  }

  return (
    <>
      <SiteHeader items={pageNavItems} />
      <main id="main-content" className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,234,216,1),rgba(238,220,196,0.98))]" />
          <div className="grain-overlay absolute inset-0 opacity-20" />
        </div>

        <div className="page-shell pt-[var(--header-offset)] pb-16">

          {/* Page header */}
          <div className="py-8 md:py-10 space-y-2.5">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge className="rounded-full px-4 py-1.5 text-white" style={{ backgroundColor: 'var(--color-cobalt)' }}>
                Interactive culinary sequence
              </Badge>
              {!isFinished && (
                <span className="text-sm text-foreground/45">
                  {steps.length - stepIndex} step{steps.length - stepIndex !== 1 ? 's' : ''} remaining
                </span>
              )}
            </div>
            <h1 className="font-serif text-[clamp(2.4rem,8vw,4.5rem)] leading-[0.9] tracking-tight">
              Master the Osh Sequence
            </h1>
            <p className="max-w-[46ch] text-foreground/55 text-base leading-relaxed">
              Follow the correct order to cook Uzbek plov — from heating the kazan to serving at the dastarkhan.
            </p>
          </div>

          {/* Mobile stats pill */}
          <div className="mb-5 flex flex-wrap items-center gap-2 lg:hidden">
            {[
              { label: 'Score', val: finalScore, color: 'var(--color-cobalt)' },
              { label: 'Mistakes', val: mistakes, color: mistakes > 0 ? 'var(--color-spice)' : undefined },
              { label: `${progress}% done`, val: null, color: undefined },
            ].map(({ label, val, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm backdrop-blur"
              >
                <span className="text-foreground/40 text-xs">{val !== null ? label : ''}</span>
                <span className="font-semibold" style={color ? { color } : undefined}>
                  {val !== null ? val : label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid gap-5 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px]">

            {/* ── Main game column ── */}
            <div className="space-y-4">

              {/* Step indicator strip */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5" role="list" aria-label="Cooking steps">
                {steps.map((step, i) => {
                  const done = completedIds.includes(step.id)
                  const active = !isFinished && i === stepIndex
                  return (
                    <div key={step.id} className="flex shrink-0 items-center gap-1.5" role="listitem">
                      <div
                        title={step.label}
                        aria-current={active ? 'step' : undefined}
                        className={cn(
                          'flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300',
                          done
                            ? 'bg-[var(--color-emerald)] text-white shadow-sm'
                            : active
                              ? 'bg-[var(--color-cobalt)] text-white shadow-sm ring-4 ring-[var(--color-cobalt)]/20'
                              : 'bg-black/8 text-foreground/35',
                        )}
                      >
                        {done ? <CheckCircle2 className="h-3.5 w-3.5" /> : i + 1}
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className={cn(
                            'h-0.5 w-6 rounded-full transition-all duration-500',
                            done ? 'bg-[var(--color-emerald)]' : 'bg-black/10',
                          )}
                        />
                      )}
                    </div>
                  )
                })}
                {/* Trophy cap */}
                <div className="flex shrink-0 items-center gap-1.5">
                  <div className={cn('h-0.5 w-6 rounded-full transition-all duration-500', isFinished ? 'bg-[var(--color-saffron)]' : 'bg-black/10')} />
                  <div className={cn('flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300', isFinished ? 'bg-[var(--color-saffron)] text-white shadow-sm' : 'bg-black/8 text-foreground/20')}>
                    <Trophy className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>

              {/* ── Victory screen ── */}
              {isFinished ? (
                <div
                  className="relative overflow-hidden rounded-2xl p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.26)]"
                  style={{ background: 'linear-gradient(145deg, var(--color-ink) 0%, color-mix(in srgb, var(--color-emerald) 28%, var(--color-ink)) 100%)' }}
                >
                  <div className="uzbek-pattern absolute inset-0 opacity-[0.07]" />
                  <div className="relative space-y-7 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-spice)] shadow-[0_8px_32px_rgba(232,160,32,0.45)]">
                      <Trophy className="h-9 w-9 text-white" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.38em] text-white/40">Sequence complete</p>
                      <h2 className="mt-2 font-serif text-4xl leading-tight text-white sm:text-5xl">The osh is ready.</h2>
                      <p className="mt-3 text-sm leading-relaxed text-white/50 max-w-[34ch] mx-auto">
                        Oil → meat → onions → carrots → seasoning → rice → steam → serve. The canonical order is preserved.
                      </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                      <div className="rounded-xl border border-white/12 bg-white/8 px-6 py-4 text-center">
                        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/35">Final Score</p>
                        <p className="mt-1.5 font-serif text-4xl text-[var(--color-saffron)]">{finalScore}</p>
                      </div>
                      <div className="rounded-xl border border-white/12 bg-white/8 px-6 py-4 text-center">
                        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/35">Mistakes</p>
                        <p className="mt-1.5 font-serif text-4xl text-white">{mistakes}</p>
                      </div>
                      {mistakes === 0 && (
                        <div className="rounded-xl border border-[var(--color-saffron)]/30 bg-[var(--color-saffron)]/12 px-6 py-4 text-center">
                          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[var(--color-saffron)]/60">Bonus</p>
                          <p className="mt-1.5 font-serif text-2xl text-[var(--color-saffron)]">Perfect</p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                      <Button
                        onClick={reset}
                        className="rounded-full bg-[var(--color-saffron)] px-7 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-saffron)]/85"
                      >
                        <RotateCcw className="mr-2 h-4 w-4" />
                        Play again
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-white/18 bg-white/8 px-7 text-white hover:bg-white/15"
                      >
                        <Link href="/">Back to project</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Active game card ── */
                <div
                  className="relative overflow-hidden rounded-2xl shadow-[0_24px_72px_rgba(0,0,0,0.22)]"
                  style={{ background: 'linear-gradient(155deg, var(--color-ink) 0%, color-mix(in srgb, var(--color-cobalt) 28%, var(--color-ink)) 100%)' }}
                >
                  <div className="uzbek-pattern absolute inset-0 opacity-[0.06]" />

                  {/* Top bar */}
                  <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-7">
                    <div className="flex items-center gap-2.5">
                      <Badge
                        className="rounded-full px-3 py-1 font-semibold text-[var(--color-ink)]"
                        style={{ backgroundColor: 'var(--color-saffron)' }}
                      >
                        Step {stepIndex + 1} / {steps.length}
                      </Badge>
                      <Badge variant="outline" className="rounded-full border-white/15 bg-white/8 text-white/55">
                        {mistakes === 0 ? 'Perfect run' : `${mistakes} mistake${mistakes !== 1 ? 's' : ''}`}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-[var(--color-saffron)]">{finalScore} pts</span>
                      <Button
                        onClick={reset}
                        variant="ghost"
                        size="sm"
                        className="h-8 rounded-full border border-white/15 bg-white/8 px-3 text-xs text-white/55 hover:bg-white/15 hover:text-white"
                      >
                        <RotateCcw className="mr-1.5 h-3 w-3" />
                        Reset
                      </Button>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1 bg-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-cobalt)] transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Body */}
                  <div className="relative space-y-6 px-5 py-7 sm:px-7 sm:py-8">

                    {/* Instruction */}
                    <div className="space-y-1.5">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-white/30">
                        What to do next
                      </p>
                      <p className="text-xl font-medium leading-snug text-white sm:text-[1.35rem] sm:leading-snug">
                        {current.instruction}
                      </p>
                    </div>

                    {/* Feedback banner */}
                    <div
                      className={cn(
                        'flex items-start gap-3 rounded-xl border px-4 py-3.5 text-sm leading-relaxed transition-all duration-300',
                        feedback.type === 'correct'
                          ? 'border-[var(--color-emerald)]/30 bg-[var(--color-emerald)]/10 text-white'
                          : feedback.type === 'wrong'
                            ? 'border-[var(--color-spice)]/35 bg-[var(--color-spice)]/12 text-white'
                            : 'border-white/10 bg-white/5 text-white/50',
                      )}
                    >
                      {feedback.type === 'correct' ? (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-emerald)]" />
                      ) : feedback.type === 'wrong' ? (
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-spice)]" />
                      ) : (
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-saffron)]" />
                      )}
                      <p>{feedback.text}</p>
                    </div>

                    {/* Choice grid */}
                    <div className="space-y-3">
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-white/30">
                        Choose the next action
                      </p>
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {options.map((opt, i) => {
                          const isWrong = wrongId === opt.id
                          return (
                            <button
                              key={opt.id}
                              onClick={() => choose(opt.id)}
                              className={cn(
                                'group relative overflow-hidden rounded-xl border px-5 py-4 text-left transition-all duration-200 active:scale-[0.98]',
                                isWrong
                                  ? 'cursor-default border-[var(--color-spice)]/45 bg-[var(--color-spice)]/14'
                                  : 'cursor-pointer border-white/12 bg-white/6 hover:border-[var(--color-saffron)]/45 hover:bg-white/12',
                              )}
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span
                                  className={cn(
                                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.68rem] font-bold leading-none transition-colors',
                                    isWrong
                                      ? 'bg-[var(--color-spice)]/25 text-[var(--color-spice)]'
                                      : 'bg-white/10 text-white/40 group-hover:bg-[var(--color-saffron)]/18 group-hover:text-[var(--color-saffron)]',
                                  )}
                                >
                                  {letters[i]}
                                </span>
                                {isWrong && <XCircle className="h-3.5 w-3.5 shrink-0 text-[var(--color-spice)]" />}
                              </div>
                              <p
                                className={cn(
                                  'mt-2.5 text-[0.95rem] font-semibold leading-snug',
                                  isWrong ? 'text-[var(--color-spice)]' : 'text-white',
                                )}
                              >
                                {opt.label}
                              </p>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Sidebar (desktop only) ── */}
            <aside className="hidden lg:block space-y-4 lg:sticky lg:top-28 lg:self-start" aria-label="Game stats">

              {/* Stats */}
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white/80 shadow-sm backdrop-blur">
                <div className="grid grid-cols-3 divide-x divide-black/8">
                  {[
                    { label: 'Score', val: finalScore, color: 'var(--color-cobalt)' as string | undefined },
                    { label: 'Progress', val: `${progress}%`, color: undefined },
                    { label: 'Mistakes', val: mistakes, color: mistakes > 0 ? 'var(--color-spice)' as string : undefined },
                  ].map(({ label, val, color }) => (
                    <div key={label} className="p-4 text-center">
                      <p className="text-[0.58rem] uppercase tracking-[0.28em] text-foreground/40">{label}</p>
                      <p
                        className="mt-1 font-serif text-2xl font-semibold"
                        style={color ? { color } : { color: 'var(--foreground)', opacity: mistakes === 0 && label === 'Mistakes' ? 0.3 : 1 }}
                      >
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sequence tracker */}
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white/80 shadow-sm backdrop-blur">
                <div className="border-b border-black/8 px-4 py-3">
                  <p className="font-serif text-[1.1rem] leading-none">Sequence</p>
                  <p className="mt-1 text-[0.68rem] text-foreground/40">The canonical order of osh</p>
                </div>
                <ul className="p-3 space-y-0.5">
                  {steps.map((step, i) => {
                    const done = completedIds.includes(step.id)
                    const active = !isFinished && i === stepIndex
                    return (
                      <li
                        key={step.id}
                        className={cn(
                          'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-300',
                          done
                            ? 'text-foreground/55'
                            : active
                              ? 'bg-[var(--color-cobalt)]/8 font-semibold text-foreground'
                              : 'text-foreground/30',
                        )}
                      >
                        <span
                          className={cn(
                            'flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.58rem] font-bold leading-none',
                            done
                              ? 'bg-[var(--color-emerald)] text-white'
                              : active
                                ? 'bg-[var(--color-cobalt)] text-white'
                                : 'bg-black/8 text-foreground/25',
                          )}
                        >
                          {done ? <CheckCircle2 className="h-2.5 w-2.5" /> : i + 1}
                        </span>
                        <span className="flex-1 leading-snug">{step.label}</span>
                        {active && (
                          <Badge
                            className="rounded-full px-2 py-0.5 text-[0.58rem] leading-none text-white"
                            style={{ backgroundColor: 'var(--color-cobalt)' }}
                          >
                            Now
                          </Badge>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Kazan meters */}
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white/80 p-4 shadow-sm backdrop-blur space-y-4">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-foreground/35">
                  Kazan status
                </p>
                <MeterBar icon={Flame} label="Heat" value={heatLevel} color="var(--color-spice)" />
                <MeterBar icon={Sparkles} label="Aroma" value={aromaLevel} color="var(--color-teal)" />
                <MeterBar icon={Timer} label="Timing" value={timingLevel} color="var(--color-cobalt)" />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}

function MeterBar({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: LucideIcon
  label: string
  value: number
  color: string
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="flex items-center gap-1.5 text-foreground/50">
          <Icon className="h-3.5 w-3.5" style={{ color }} />
          {label}
        </span>
        <span className="font-semibold" style={{ color }}>
          {value}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-black/8">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}
