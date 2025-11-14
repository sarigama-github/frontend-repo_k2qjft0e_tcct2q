import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, MousePointerClick, FileCheck2, Send, ShieldCheck } from 'lucide-react'

// Easily change your redirect URL here
const CTA_LINK = 'https://beatly.online/your-spotify-redirect'

function ParticleBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 6 + Math.random() * 10,
      delay: Math.random() * 6,
      duration: 10 + Math.random() * 12,
      opacity: 0.08 + Math.random() * 0.12,
    }))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(16,185,129,0.20)_0%,rgba(0,0,0,0)_55%)]" />

      {/* Ambient glow blobs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-500/20 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-emerald-500/20 blur-[140px]" />
      <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-green-400/10 blur-[100px]" />

      {/* Minimal floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-emerald-300/30 shadow-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animation: `floatY ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
            opacity: p.opacity,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  )
}

function VouchNotifications() {
  const names = [
    'Amelia R.', 'Liam S.', 'Olivia K.', 'Noah P.', 'Sophia L.', 'Jackson C.', 'Mia T.', 'Ethan B.',
    'Isla H.', 'Lucas D.', 'Ava W.', 'James M.', 'Harper V.', 'Mason G.', 'Ella F.'
  ]

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let hideTimer

    const cycle = () => {
      setVisible(true)
      hideTimer = window.setTimeout(() => {
        setVisible(false)
      }, 5000) // visible for 5s
    }

    cycle()
    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % names.length)
      cycle()
    }, 13000) // 5s visible + 8s hidden

    return () => {
      if (hideTimer) window.clearTimeout(hideTimer)
      window.clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div
        className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
          rounded-xl bg-[#0c1117]/70 backdrop-blur-md border border-emerald-500/20 shadow-glow-soft px-4 py-3 flex items-center gap-3`}
      >
        <div className="h-9 w-9 rounded-lg bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center shadow-glow-soft">
          <ShieldCheck className="h-5 w-5 text-emerald-400" />
        </div>
        <div className="text-sm leading-tight">
          <p className="text-zinc-200">
            <span className="font-semibold text-white">{names[index]}</span> just applied for the Spotify job role
          </p>
          <p className="text-xs text-zinc-400">Verified applicant</p>
        </div>
      </div>
    </div>
  )
}

function Step({ number, icon: Icon, title, text }) {
  return (
    <div className="group rounded-2xl p-5 bg-[#0e141b]/70 border border-emerald-500/10 backdrop-blur-md hover:border-emerald-500/30 transition-colors">
      <div className="flex items-start gap-4">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/20 shadow-glow-soft">
          <span className="absolute -top-2 -right-2 text-[11px] px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 shadow-glow">
            {number}
          </span>
          <Icon className="h-5 w-5 text-emerald-300" />
        </div>
        <div>
          <h4 className="text-white/95 font-semibold mb-1">{title}</h4>
          <p className="text-sm text-zinc-400">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0F14] text-white">
      <ParticleBackground />
      <VouchNotifications />

      {/* Top gradient glow overlay */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(16,185,129,0.18)_0%,rgba(10,15,20,0)_60%)]" />
      </div>

      {/* Content */}
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-28">
          {/* Hook */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 shadow-glow-soft mb-5 animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-dot" />
              Spotify Remote Role • Premium Opportunity
            </div>
            <h1 className="glow-text text-4xl leading-tight font-extrabold md:text-6xl md:leading-[1.05]">
              Work with Spotify — Remotely.
              <br className="hidden md:block" />
              Do meaningful work from anywhere.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400 md:text-lg">
              A modern, flexible position with competitive compensation and world‑class culture. Designed for talented applicants who value impact, autonomy, and craft.
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <a
                href={CTA_LINK}
                className="group inline-flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/15 to-emerald-500/10 px-7 py-3.5 text-base font-semibold text-white shadow-glow hover:border-emerald-300/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 transition-all"
              >
                Start application
                <ArrowRight className="h-5 w-5 text-emerald-300 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Step
              number="01"
              icon={MousePointerClick}
              title="Open the application"
              text="Use the button above to access the secure application portal."
            />
            <Step
              number="02"
              icon={FileCheck2}
              title="Share your background"
              text="Provide your experience and portfolio. Keep it concise and focused."
            />
            <Step
              number="03"
              icon={Send}
              title="Submit & confirm"
              text="Complete the final check and confirm your submission in minutes."
            />
          </div>
        </section>

        {/* Notice */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-emerald-400/20 bg-[#0c1218]/80 px-6 py-5 backdrop-blur-md shadow-glow-soft flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-emerald-300 mt-0.5" />
              <p className="text-sm leading-relaxed text-zinc-300">
                This job application is available only to residents of the United Kingdom, United States, Canada, or Australia.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer subtle line */}
      <div className="relative z-10 border-t border-white/5/0" />
    </div>
  )
}
