import { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import HelpLayout from './HelpLayout'
import { CATEGORIES, ARTICLES } from '../../data/helpData'

const F = 'Figtree, system-ui, sans-serif'
const GOLD = '#C9A84C'
const BLACK = '#111111'

const POPULAR = [
  'set-up-business-profile',
  'first-steps-after-signing-up',
  'create-booking-calendar',
  'booking-fees',
  'consultation-forms-overview',
  'invite-staff-member',
  'set-up-booking-link',
  'add-a-service',
]

export default function HelpHome() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    if (query.length < 2) return []
    const q = query.toLowerCase()
    return ARTICLES.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.intro.toLowerCase().includes(q) ||
      a.sections.some(s => s.steps.some(st => st.text.toLowerCase().includes(q)))
    ).slice(0, 6)
  }, [query])

  const popularArticles = POPULAR.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean)

  function handleSearch(e) {
    e.preventDefault()
    if (query.trim()) navigate(`/help-centre/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <HelpLayout>
      {/* Hero */}
      <div style={{ background: BLACK, padding: '56px 24px 48px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>
            ReeveOS Help Centre
          </p>
          <h1 style={{ fontFamily: F, fontSize: 36, fontWeight: 800, color: '#FAFAF8', lineHeight: 1.1, marginBottom: 12 }}>
            How can we help?
          </h1>
          <p style={{ fontFamily: F, fontSize: 16, color: '#999', marginBottom: 28 }}>
            Search our guides, or browse the categories below.
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} style={{ position: 'relative', maxWidth: 520, margin: '0 auto' }}>
            <svg style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#666' }} width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search — e.g. 'how to cancel a booking'"
              style={{ width: '100%', padding: '14px 16px 14px 46px', borderRadius: 12, border: '2px solid #333', background: '#1a1a1a', color: '#FAFAF8', fontFamily: F, fontSize: 16, outline: 'none', boxSizing: 'border-box' }}
              autoFocus
            />

            {/* Live results dropdown */}
            {results.length > 0 && (
              <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#1a1a1a', border: '1px solid #333', borderRadius: 10, marginTop: 6, zIndex: 50, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                {results.map(a => {
                  const cat = CATEGORIES.find(c => c.id === a.categoryId)
                  return (
                    <Link
                      key={a.id}
                      to={`/help-centre/knowledge-base/${a.categoryId}/${a.id}`}
                      onClick={() => setQuery('')}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', textDecoration: 'none', borderBottom: '1px solid #2a2a2a' }}
                    >
                      <svg width="16" height="16" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                      </svg>
                      <div>
                        <div style={{ fontFamily: F, fontSize: 14, color: '#FAFAF8' }}>{a.title}</div>
                        <div style={{ fontFamily: F, fontSize: 12, color: '#666' }}>{cat?.title}</div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Category grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: BLACK, marginBottom: 20 }}>Browse by topic</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {CATEGORIES.map(cat => {
            const count = ARTICLES.filter(a => a.categoryId === cat.id).length
            return (
              <Link
                key={cat.id}
                to={`/help-centre/knowledge-base/${cat.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 12, padding: '20px', transition: 'box-shadow 0.15s, border-color 0.15s', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = '0 2px 12px rgba(201,168,76,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{cat.icon}</div>
                  <div style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: BLACK, marginBottom: 4 }}>{cat.title}</div>
                  <div style={{ fontFamily: F, fontSize: 13, color: '#888', marginBottom: 10, lineHeight: 1.4 }}>{cat.desc}</div>
                  <div style={{ fontFamily: F, fontSize: 13, color: GOLD, fontWeight: 500 }}>{count} article{count !== 1 ? 's' : ''}</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Popular articles */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px' }}>
        <h2 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: BLACK, marginBottom: 20 }}>Popular articles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 12 }}>
          {popularArticles.map(a => {
            const cat = CATEGORIES.find(c => c.id === a.categoryId)
            return (
              <Link
                key={a.id}
                to={`/help-centre/knowledge-base/${a.categoryId}/${a.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '16px', transition: 'border-color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = GOLD}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#E5E5E5'}
                >
                  <svg style={{ flexShrink: 0, marginTop: 2 }} width="16" height="16" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <div>
                    <div style={{ fontFamily: F, fontSize: 14, fontWeight: 600, color: BLACK, marginBottom: 3 }}>{a.title}</div>
                    <div style={{ fontFamily: F, fontSize: 12, color: '#888' }}>{cat?.title}</div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Still need help */}
      <div style={{ background: '#F5F0E8', borderTop: '1px solid #E8DEC9' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '48px 24px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: BLACK, marginBottom: 8 }}>Still need help?</h3>
          <p style={{ fontFamily: F, fontSize: 15, color: '#666', marginBottom: 20 }}>
            Can't find what you're looking for? Our team is happy to help — just drop us a message.
          </p>
          <a href="mailto:hello@reeveos.app" style={{ background: BLACK, color: '#FAFAF8', fontFamily: F, fontWeight: 600, fontSize: 15, padding: '12px 28px', borderRadius: 24, textDecoration: 'none', display: 'inline-block' }}>
            Get in touch
          </a>
        </div>
      </div>
    </HelpLayout>
  )
}
