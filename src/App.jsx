import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// Help centre pages
import HelpHome       from './pages/help-centre/HelpHome'
import KnowledgeBase  from './pages/help-centre/KnowledgeBase'
import CategoryPage   from './pages/help-centre/CategoryPage'
import ArticlePage    from './pages/help-centre/ArticlePage'
import SearchResults  from './pages/help-centre/SearchResults'
import Academy        from './pages/help-centre/Academy'

// ─── IMAGES ───
const IMG = {
  hero: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1440&q=80',
  bookings: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  orders: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
  payments: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  crm: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  marketing: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  reviews: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80',
  branded: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&q=80',
  analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  epos: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80',
  restaurants: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80',
  barbers: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
  tutors: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
  shops: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
  cafes: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&q=80',
  fitness: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
}

const WORDS = [
  { word: 'restaurant', color: '#C9A84C' },
  { word: 'barbershop', color: '#00ccbc' },
  { word: 'café', color: '#ff4c00' },
  { word: 'salon', color: '#06c167' },
  { word: 'shop', color: '#eab308' },
  { word: 'gym', color: '#C9A84C' },
]

const F = 'Figtree, system-ui, sans-serif'

const HERO_IMAGES = [
  'https://images.pexels.com/photos/2506993/pexels-photo-2506993.jpeg?w=1440&q=80',
  'https://images.pexels.com/photos/6205600/pexels-photo-6205600.jpeg?w=1440&q=80',
  'https://images.pexels.com/photos/36137710/pexels-photo-36137710.jpeg?w=1440&q=80',
  'https://images.pexels.com/photos/1563678/pexels-photo-1563678.jpeg?w=1440&q=80',
  'https://images.pexels.com/photos/5858201/pexels-photo-5858201.jpeg?w=1440&q=80',
  'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?w=1440&q=80',
  'https://images.pexels.com/photos/3998405/pexels-photo-3998405.jpeg?w=1440&q=80',
]

/* ═══════════════ NAV ═══════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const h = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', h)
    return () => window.removeEventListener('resize', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || mobileOpen ? 'rgba(17,17,17,0.95)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C9A84C] rounded-xl flex items-center justify-center">
            <span className="text-[#111] font-bold text-xl md:text-2xl" style={{ fontFamily: F }}>R</span>
          </div>
          <span className="text-[#FAFAF8] font-bold text-xl md:text-2xl" style={{ fontFamily: F }}>ReeveOS</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[#FAFAF8] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Features</a>
          <a href="#pricing" className="text-[#FAFAF8] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Pricing</a>
          <a href="/help-centre" className="text-[#FAFAF8] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Help Centre</a>
          <a href="#" className="text-[#FAFAF8] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Log in</a>
          <a href="#" className="bg-[#C9A84C] text-[#111] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#d4b55e] transition-colors" style={{ fontFamily: F }}>Get Started</a>
        </div>

        <button
          className="md:hidden text-[#FAFAF8] p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(17,17,17,0.98)' }}
          >
            <div className="flex flex-col px-5 pb-6 pt-2 gap-1">
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-[#FAFAF8] text-base py-3 border-b border-[#222] hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Features</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-[#FAFAF8] text-base py-3 border-b border-[#222] hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Pricing</a>
              <a href="/help-centre" onClick={() => setMobileOpen(false)} className="text-[#FAFAF8] text-base py-3 border-b border-[#222] hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Help Centre</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="text-[#FAFAF8] text-base py-3 border-b border-[#222] hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Log in</a>
              <a href="#" onClick={() => setMobileOpen(false)} className="bg-[#C9A84C] text-[#111] text-base font-semibold px-6 py-3 rounded-full hover:bg-[#d4b55e] transition-colors text-center mt-3" style={{ fontFamily: F }}>Get Started</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

/* ═══════════════ HERO ═══════════════ */
function Hero() {
  const [wi, setWi] = useState(0)
  const [hi, setHi] = useState(() => Math.floor(Math.random() * HERO_IMAGES.length))
  useEffect(() => { const t = setInterval(() => setWi(i => (i + 1) % WORDS.length), 2500); return () => clearInterval(t) }, [])
  useEffect(() => {
    const t = setInterval(() => {
      setHi(prev => {
        let next = Math.floor(Math.random() * HERO_IMAGES.length)
        while (next === prev) next = Math.floor(Math.random() * HERO_IMAGES.length)
        return next
      })
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative w-full min-h-[520px] md:min-h-[600px] lg:h-[728px]" style={{ background: '#111' }}>
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.img
            key={hi}
            src={HERO_IMAGES[hi]}
            alt=""
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(17,17,17,0.7) 0%, rgba(17,17,17,0.5) 50%, rgba(17,17,17,0.8) 100%)' }} />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 md:px-8 pt-20 pb-12 md:pt-24 md:pb-16 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs md:text-sm mb-4 md:mb-5" style={{ fontFamily: F, fontWeight: 600, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.15em' }}>The all-in-one platform for UK high street businesses</p>
          <h1 className="text-3xl md:text-5xl lg:text-[64px] mb-4 md:mb-6" style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.05 }}>
            Built for your<br />
            <AnimatePresence mode="wait">
              <motion.span
                key={wi}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                style={{ color: WORDS[wi].color, display: 'inline-block' }}
              >
                {WORDS[wi].word}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="text-base md:text-xl mb-8 md:mb-10 max-w-2xl mx-auto" style={{ fontFamily: F, color: 'rgba(250,250,248,0.8)', lineHeight: 1.6 }}>
            Zero commission. Real tools. Everything you need to run and grow your business — bookings, payments, CRM, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="bg-[#C9A84C] text-[#111] font-semibold px-8 py-3.5 rounded-full hover:bg-[#d4b55e] transition-colors text-base" style={{ fontFamily: F }}>Start for free</a>
            <a href="/help-centre" className="border border-[rgba(250,250,248,0.3)] text-[#FAFAF8] font-semibold px-8 py-3.5 rounded-full hover:bg-[rgba(255,255,255,0.1)] transition-colors text-base" style={{ fontFamily: F }}>See how it works</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ═══════════════ STATS ═══════════════ */
function Stats() {
  const s = [
    { v: '£0', l: 'Commission on bookings' },
    { v: '0.3%', l: 'Debit card processing' },
    { v: '20+', l: 'Business types supported' },
    { v: '24/7', l: 'Online booking, always on' },
  ]
  return (
    <section className="w-full py-10 md:py-14" style={{ background: '#111', borderTop: '1px solid #222' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {s.map(x => (
            <div key={x.l} className="text-center">
              <p className="text-3xl md:text-4xl mb-1.5" style={{ fontFamily: F, fontWeight: 800, color: '#C9A84C' }}>{x.v}</p>
              <p className="text-xs md:text-sm" style={{ fontFamily: F, color: '#999' }}>{x.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════ PROBLEM ═══════════════ */
function Problem() {
  const p = [
    { h: 'They take a cut of every booking', b: 'Fresha, Treatwell, and the rest charge 20–30% on top of your price. ReeveOS charges a flat monthly fee. That\'s it.' },
    { h: 'They own your client relationships', b: 'When you\'re on a marketplace, the platform owns the customer. With ReeveOS, your clients are yours — with your branding, your data, your control.' },
    { h: 'They make you dependent on them', b: 'Switch platforms and you lose everything. ReeveOS gives you your own website, your own booking system, your own data. You\'re never locked in.' },
  ]
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#111' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm mb-4" style={{ fontFamily: F, fontWeight: 600, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.15em' }}>THE PROBLEM</p>
          <h2 className="text-2xl md:text-4xl lg:text-[48px]" style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.1 }}>
            Other platforms work for themselves, not for you.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {p.map(x => (
            <div key={x.h} className="rounded-2xl p-6 md:p-8" style={{ background: '#181818', border: '1px solid #222' }}>
              <div className="w-8 h-8 mb-4 rounded-lg flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <span style={{ color: '#C9A84C', fontSize: 16 }}>✕</span>
              </div>
              <h3 className="text-lg mb-3" style={{ fontFamily: F, fontWeight: 700, color: '#FAFAF8' }}>{x.h}</h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: F, color: '#999' }}>{x.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════ FEATURES ═══════════════ */
function Features() {
  const f = [
    { t: 'Bookings & Calendar', d: 'Your calendar, online booking page, and appointment management — all in one place. Clients book themselves 24/7.', i: IMG.bookings },
    { t: 'Online Orders', d: 'Take orders for delivery, collection, and table service. Integrated with your menu and kitchen display.', i: IMG.orders },
    { t: 'Payments', d: '0.3% debit, 0.7% credit. Among the most competitive rates in the UK. Card readers, online payments, deposits — all built in.', i: IMG.payments },
    { t: 'Client Book & CRM', d: 'Every client, every visit, every note — in one place. The more you use it, the smarter it gets.', i: IMG.crm },
    { t: 'Marketing', d: 'Email campaigns, SMS reminders, and automated win-back messages. Built in, no extra tools needed.', i: IMG.marketing },
    { t: 'Analytics', d: 'Revenue, bookings, retention, no-shows, top services. Everything you need to understand your business.', i: IMG.analytics },
    { t: 'Website Builder', d: 'Your own professional website, hosted and managed for you. With SEO built in as standard.', i: IMG.branded },
    { t: 'EPOS & Floor Plan', d: 'Full EPOS for restaurants and service businesses. Floor plan, kitchen display, table management.', i: IMG.epos },
  ]
  return (
    <section id="features" className="w-full py-12 md:py-20" style={{ background: '#111' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm mb-4" style={{ fontFamily: F, fontWeight: 600, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.15em' }}>EVERYTHING IN ONE PLACE</p>
          <h2 className="text-2xl md:text-4xl lg:text-[48px]" style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.1 }}>
            Every tool your business needs.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {f.map(x => (
            <motion.div key={x.t} className="rounded-2xl overflow-hidden" style={{ background: '#181818', border: '1px solid #222' }} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <div className="h-36 md:h-44 overflow-hidden">
                <img src={x.i} alt={x.t} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-base mb-1.5" style={{ fontFamily: F, fontWeight: 600, color: '#FAFAF8' }}>{x.t}</h3>
                <p className="text-xs leading-relaxed" style={{ fontFamily: F, color: '#999' }}>{x.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════ BUSINESS TYPES ═══════════════ */
function BusinessTypes() {
  const t = [
    { t: 'Restaurants & Pubs', d: 'Table bookings, online ordering, and kitchen management.', i: IMG.restaurants },
    { t: 'Barbers & Salons', d: 'Appointment scheduling, client profiles, and reminders.', i: IMG.barbers },
    { t: 'Tutors & Services', d: 'Session bookings, payments, and student management.', i: IMG.tutors },
    { t: 'Shops & Convenience', d: 'Inventory, click & collect, and local delivery.', i: IMG.shops },
    { t: 'Cafés & Takeaways', d: 'Online orders, loyalty programmes, and menu updates.', i: IMG.cafes },
    { t: 'Health & Fitness', d: 'Class bookings, memberships, and client tracking.', i: IMG.fitness },
  ]
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#111' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm mb-4" style={{ fontFamily: F, fontWeight: 600, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.15em' }}>BUILT FOR YOUR BUSINESS</p>
          <h2 className="text-2xl md:text-4xl lg:text-[48px]" style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.1 }}>
            Whatever you run, Reeve runs it better.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.map(x => (
            <motion.div key={x.t} className="rounded-2xl overflow-hidden group cursor-pointer" style={{ background: '#181818', border: '1px solid #222' }} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <div className="h-44 md:h-56 overflow-hidden">
                <img src={x.i} alt={x.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-lg md:text-xl mb-1.5 md:mb-2" style={{ fontFamily: F, fontWeight: 600, color: '#FAFAF8' }}>{x.t}</h3>
                <p className="text-sm mb-2 md:mb-3" style={{ fontFamily: F, color: '#999' }}>{x.d}</p>
                <span className="text-sm font-medium" style={{ fontFamily: F, color: '#C9A84C' }}>Learn more →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════ DASHBOARD ═══════════════ */
function Dashboard() {
  const sidebar = [
    { n: 'Dashboard', a: true },
    { n: 'Bookings', a: false },
    { n: 'Orders', a: false },
    { n: 'Customers', a: false },
    { n: 'Marketing', a: false },
  ]
  const stats = [
    { label: "Today's Revenue", value: '£1,847', sub: '+12% vs yesterday', subCol: '#22c55e', valCol: '#C9A84C' },
    { label: 'Covers', value: '94', sub: '+8% vs yesterday', subCol: '#22c55e', valCol: '#FAFAF8' },
    { label: 'Active Orders', value: '12', sub: '3 pending', subCol: '#C9A84C', valCol: '#FAFAF8' },
  ]
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#111' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm mb-4" style={{ fontFamily: F, fontWeight: 600, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.15em' }}>SEE IT IN ACTION</p>
          <h2 className="text-2xl md:text-4xl lg:text-[48px]" style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.1 }}>
            Your business, at a glance.
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #222' }}>
          <div className="flex items-center gap-2 px-4" style={{ background: '#222', height: 32 }}>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ background: '#ef4444' }} />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ background: '#eab308' }} />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ background: '#22c55e' }} />
          </div>
          <div className="flex flex-col md:flex-row" style={{ background: '#111' }}>
            <div className="hidden md:flex flex-col gap-1 flex-shrink-0" style={{ width: 200, background: '#181818', borderRight: '1px solid #222', padding: '20px 16px' }}>
              {sidebar.map(s => (
                <div key={s.n} className="flex items-center gap-3 px-3 py-2.5 rounded-lg" style={{ background: s.a ? 'rgba(201,168,76,0.1)' : 'transparent', border: s.a ? '1px solid #C9A84C' : '1px solid transparent' }}>
                  <div className="w-3.5 h-3.5 rounded" style={{ background: s.a ? '#C9A84C' : '#999' }} />
                  <span className="text-sm" style={{ fontFamily: F, color: s.a ? '#C9A84C' : '#FAFAF8' }}>{s.n}</span>
                </div>
              ))}
            </div>
            <div className="flex-1 p-4 md:p-6 lg:p-8">
              <div className="flex md:hidden gap-2 mb-4 overflow-x-auto pb-2 -mx-1 px-1">
                {sidebar.map(s => (
                  <span key={s.n} className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full flex-shrink-0" style={{ fontFamily: F, background: s.a ? 'rgba(201,168,76,0.1)' : '#181818', border: s.a ? '1px solid #C9A84C' : '1px solid #222', color: s.a ? '#C9A84C' : '#FAFAF8' }}>
                    {s.n}
                  </span>
                ))}
              </div>
              <h3 className="text-lg md:text-2xl mb-4 md:mb-6" style={{ fontFamily: F, fontWeight: 600, color: '#FAFAF8' }}>Good evening, Sadkine</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                {stats.map(s => (
                  <div key={s.label} className="rounded-xl p-3.5 md:p-5" style={{ background: '#181818', border: '1px solid #222' }}>
                    <p className="text-xs mb-1.5" style={{ fontFamily: F, color: '#999' }}>{s.label}</p>
                    <p className="text-xl md:text-2xl mb-1" style={{ fontFamily: F, fontWeight: 700, color: s.valCol }}>{s.value}</p>
                    <p className="text-xs" style={{ fontFamily: F, color: s.subCol }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════ FOOTER ═══════════════ */
function Footer() {
  return (
    <footer className="w-full py-10 md:py-14" style={{ background: '#111', borderTop: '1px solid #222' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="flex items-center gap-2.5 md:gap-3 mb-6 md:mb-8">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C9A84C] rounded-xl flex items-center justify-center">
            <span className="text-xl md:text-2xl" style={{ fontFamily: F, fontWeight: 700, color: '#111' }}>R</span>
          </div>
          <span className="text-xl md:text-2xl" style={{ fontFamily: F, fontWeight: 700, color: '#FAFAF8' }}>ReeveOS</span>
        </div>
        <div className="flex gap-6 mb-6">
          <a href="/help-centre" style={{ fontFamily: F, fontSize: 14, color: '#999', textDecoration: 'none' }}>Help Centre</a>
          <a href="mailto:hello@reeveos.app" style={{ fontFamily: F, fontSize: 14, color: '#999', textDecoration: 'none' }}>Contact</a>
        </div>
        <p className="text-xs md:text-sm" style={{ fontFamily: F, color: '#999' }}>Zero-commission platform for UK independent businesses. © 2025 ReeveOS. All rights reserved.</p>
      </div>
    </footer>
  )
}

/* ═══════════════ HOMEPAGE ═══════════════ */
function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#111', fontFamily: F }}>
      <Nav />
      <Hero />
      <Stats />
      <Problem />
      <Features />
      <BusinessTypes />
      <Dashboard />
      <Footer />
    </div>
  )
}

/* ═══════════════ APP ROOT ═══════════════ */
export default function App() {
  return (
    <Routes>
      {/* Help centre */}
      <Route path="/help-centre" element={<HelpHome />} />
      <Route path="/help-centre/knowledge-base" element={<KnowledgeBase />} />
      <Route path="/help-centre/knowledge-base/:categoryId" element={<CategoryPage />} />
      <Route path="/help-centre/knowledge-base/:categoryId/:articleId" element={<ArticlePage />} />
      <Route path="/help-centre/search" element={<SearchResults />} />
      <Route path="/help-centre/academy" element={<Academy />} />

      {/* Marketing homepage — catch all */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
