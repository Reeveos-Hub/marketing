import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// ─── IMAGES (Unsplash — matching Figma photography) ───
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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const h = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', h)
    return () => window.removeEventListener('resize', h)
  }, [])

  // Prevent body scroll when mobile menu is open
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
        {/* Logo */}
        <div className="flex items-center gap-2.5 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#C9A84C] rounded-xl flex items-center justify-center">
            <span className="text-[#111] font-bold text-xl md:text-2xl" style={{ fontFamily: F }}>R</span>
          </div>
          <span className="text-[#FAFAF8] font-bold text-xl md:text-2xl" style={{ fontFamily: F }}>ReeveOS</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[#FAFAF8] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Features</a>
          <a href="#pricing" className="text-[#FAFAF8] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Pricing</a>
          <a href="#" className="text-[#FAFAF8] text-sm hover:text-[#C9A84C] transition-colors" style={{ fontFamily: F }}>Log in</a>
          <a href="#" className="bg-[#C9A84C] text-[#111] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#d4b55e] transition-colors" style={{ fontFamily: F }}>Get Started</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#FAFAF8] p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
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
        {/* Mobile gradient: top-to-bottom so text over image is readable */}
        <div className="absolute inset-0 md:hidden" style={{ background: 'linear-gradient(to bottom, #111111 0%, rgba(17,17,17,0.85) 30%, rgba(17,17,17,0.5) 100%)' }} />
        {/* Desktop gradient: left-to-right as original */}
        <div className="absolute inset-0 hidden md:block" style={{ background: 'linear-gradient(to right, #111111 0%, rgba(17,17,17,0.8) 40%, transparent 70%)' }} />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-8 h-full flex items-center pt-24 pb-12 md:pt-0 md:pb-0">
        <div className="max-w-full md:max-w-[576px]">
          <h1
            className="text-[#FAFAF8] mb-4 md:mb-6"
            style={{ fontFamily: F, fontWeight: 800, fontSize: 'clamp(34px, 8vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.035em' }}
          >
            Run your{' '}
            <AnimatePresence mode="wait">
              <motion.span
                key={wi}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                style={{ color: WORDS[wi].color, display: 'inline-block' }}
              >
                {WORDS[wi].word}
              </motion.span>
            </AnimatePresence>
            <br />without the middleman.
          </h1>
          <p className="text-[#FAFAF8] text-base md:text-xl leading-relaxed mb-6 md:mb-8 max-w-[576px]" style={{ fontFamily: F, fontWeight: 400 }}>
            Bookings, orders, payments, CRM, and marketing — one system. You keep 100% of the revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#"
              className="bg-[#C9A84C] text-[#111] font-semibold text-base rounded-xl hover:bg-[#d4b55e] transition-colors text-center"
              style={{ fontFamily: F, padding: '16px 28px' }}
            >
              Get Started Free →
            </a>
            <a
              href="#"
              className="text-[#FAFAF8] font-semibold text-base rounded-xl hover:bg-white/10 transition-colors text-center"
              style={{ fontFamily: F, padding: '16px 28px', border: '1px solid #FAFAF8' }}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════ STATS ═══════════════ */
function Stats() {
  const d = [
    { v: '0%', l: 'Commission' },
    { v: '100%', l: 'Your Revenue' },
    { v: '£0', l: 'To Start' },
    { v: '24/7', l: 'Support' },
  ]
  return (
    <section className="w-full py-8 md:py-12" style={{ background: '#111', borderTop: '1px solid #222', borderBottom: '1px solid #222' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <p className="text-center text-sm md:text-base mb-6 md:mb-8" style={{ fontFamily: F, color: '#999' }}>
          Built for independent businesses across the UK
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {d.map(s => (
            <div key={s.l} className="text-center">
              <div className="text-3xl md:text-[48px] mb-2" style={{ fontFamily: F, fontWeight: 800, color: '#C9A84C' }}>{s.v}</div>
              <div className="text-sm md:text-base" style={{ fontFamily: F, color: '#999' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════ THE PROBLEM ═══════════════ */
function Problem() {
  const c = [
    { n: 'Deliveroo', p: '35%', col: '#00ccbc', bw: '35%' },
    { n: 'UberEats', p: '30%', col: '#06c167', bw: '30%' },
    { n: 'Just Eat', p: '14%+', col: '#ff4c00', bw: '14%' },
    { n: 'ReeveOS', p: '0%', col: '#C9A84C', bw: '0%', hl: true },
  ]
  return (
    <section className="w-full py-12 md:py-20" style={{ background: '#111' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm mb-4" style={{ fontFamily: F, fontWeight: 600, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.15em' }}>THE PROBLEM</p>
          <h2
            className="text-2xl md:text-4xl lg:text-[48px]"
            style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.1 }}
          >
            You're funding Silicon Valley with every order.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {c.map(x => (
            <div key={x.n} className="rounded-2xl p-4 md:p-6 lg:p-8" style={{ background: '#181818', border: x.hl ? '1px solid #C9A84C' : '1px solid #222' }}>
              <p className="text-sm md:text-xl mb-1 md:mb-3" style={{ fontFamily: F, fontWeight: 500, color: '#FAFAF8' }}>{x.n}</p>
              <p className="text-3xl md:text-5xl lg:text-[60px] mb-1 md:mb-3" style={{ fontFamily: F, fontWeight: 800, color: x.col }}>{x.p}</p>
              <p className="text-xs md:text-sm mb-3 md:mb-4" style={{ fontFamily: F, color: '#999' }}>per order</p>
              <div style={{ width: '100%', height: 6, background: '#222', borderRadius: 9999, overflow: 'hidden' }}>
                <div style={{ width: x.bw, height: '100%', background: x.col, borderRadius: 9999 }} />
              </div>
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
    { t: 'Bookings & Reservations', d: 'Table management, automated confirmations, and real-time availability. Never miss a booking.', i: IMG.bookings },
    { t: 'Orders & Delivery', d: 'Online ordering, menu management, and delivery tracking. Zero commission on every order.', i: IMG.orders },
    { t: 'Payments', d: 'Accept cards, contactless, and digital wallets. Fast payouts with transparent fees.', i: IMG.payments },
    { t: 'CRM & Customer Data', d: 'Know your customers. Track preferences, visit history, and lifetime value in one place.', i: IMG.crm },
    { t: 'Email & SMS Marketing', d: 'Send targeted campaigns, loyalty rewards, and automated reminders to bring customers back.', i: IMG.marketing },
    { t: 'Reviews & Reputation', d: 'Collect and showcase reviews. Build trust with automated review requests after every visit.', i: IMG.reviews },
    { t: 'Your Branded Page', d: 'A beautiful online presence with your branding. Bookings and orders without the middleman.', i: IMG.branded },
    { t: 'Analytics & Insights', d: 'Real-time reporting on revenue, customers, and performance. Make data-driven decisions.', i: IMG.analytics },
    { t: 'EPOS System', d: 'Full point-of-sale integration with inventory, staff management, and kitchen displays.', i: IMG.epos, cs: true },
  ]
  return (
    <section id="features" className="w-full py-12 md:py-20" style={{ background: '#181818' }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs md:text-sm mb-4" style={{ fontFamily: F, fontWeight: 600, color: '#C9A84C', textTransform: 'uppercase', letterSpacing: '0.15em' }}>EVERYTHING YOU NEED</p>
          <h2
            className="text-2xl md:text-4xl lg:text-[48px] mb-3 md:mb-4"
            style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.1 }}
          >
            One system. Nothing missing.
          </h2>
          <p className="text-base md:text-xl" style={{ fontFamily: F, color: '#999' }}>From first booking to repeat customer.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {f.map(x => (
            <motion.div
              key={x.t}
              className="rounded-2xl overflow-hidden group"
              style={{ background: '#111', border: '1px solid #222' }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-40 md:h-48 overflow-hidden">
                <img src={x.i} alt={x.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" rx="4" fill="#C9A84C" fillOpacity="0.2" /><rect x="3" y="3" width="10" height="10" rx="2" fill="#C9A84C" /></svg>
                  <h3 className="text-base md:text-lg" style={{ fontFamily: F, fontWeight: 600, color: '#FAFAF8' }}>{x.t}</h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ fontFamily: F, color: '#999' }}>{x.d}</p>
                {x.cs && (
                  <span className="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full" style={{ fontFamily: F, color: '#C9A84C', background: 'rgba(201,168,76,0.1)', border: '1px solid #C9A84C' }}>
                    Coming Soon
                  </span>
                )}
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
          <h2
            className="text-2xl md:text-4xl lg:text-[48px]"
            style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.1 }}
          >
            Whatever you run, Reeve runs it better.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {t.map(x => (
            <motion.div
              key={x.t}
              className="rounded-2xl overflow-hidden group cursor-pointer"
              style={{ background: '#181818', border: '1px solid #222' }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
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
          <h2
            className="text-2xl md:text-4xl lg:text-[48px]"
            style={{ fontFamily: F, fontWeight: 800, color: '#FAFAF8', letterSpacing: '-0.035em', lineHeight: 1.1 }}
          >
            Your business, at a glance.
          </h2>
        </div>
        {/* Browser chrome wrapper */}
        <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid #222' }}>
          {/* Traffic light dots */}
          <div className="flex items-center gap-2 px-4" style={{ background: '#222', height: 32 }}>
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ background: '#ef4444' }} />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ background: '#eab308' }} />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full" style={{ background: '#22c55e' }} />
          </div>
          <div className="flex flex-col md:flex-row" style={{ background: '#111' }}>
            {/* Sidebar — hidden on mobile */}
            <div className="hidden md:flex flex-col gap-1 flex-shrink-0" style={{ width: 200, background: '#181818', borderRight: '1px solid #222', padding: '20px 16px' }}>
              {sidebar.map(s => (
                <div key={s.n} className="flex items-center gap-3 px-3 py-2.5 rounded-lg" style={{ background: s.a ? 'rgba(201,168,76,0.1)' : 'transparent', border: s.a ? '1px solid #C9A84C' : '1px solid transparent' }}>
                  <div className="w-3.5 h-3.5 rounded" style={{ background: s.a ? '#C9A84C' : '#999' }} />
                  <span className="text-sm" style={{ fontFamily: F, color: s.a ? '#C9A84C' : '#FAFAF8' }}>{s.n}</span>
                </div>
              ))}
            </div>
            {/* Main content area */}
            <div className="flex-1 p-4 md:p-6 lg:p-8">
              {/* Mobile: horizontal nav pills replacing sidebar */}
              <div className="flex md:hidden gap-2 mb-4 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                {sidebar.map(s => (
                  <span
                    key={s.n}
                    className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full flex-shrink-0"
                    style={{
                      fontFamily: F,
                      background: s.a ? 'rgba(201,168,76,0.1)' : '#181818',
                      border: s.a ? '1px solid #C9A84C' : '1px solid #222',
                      color: s.a ? '#C9A84C' : '#FAFAF8',
                    }}
                  >
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
        <p className="text-xs md:text-sm" style={{ fontFamily: F, color: '#999' }}>Zero-commission platform for UK independent businesses. © 2025 ReeveOS. All rights reserved.</p>
      </div>
    </footer>
  )
}

/* ═══════════════ APP ═══════════════ */
export default function App() {
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
