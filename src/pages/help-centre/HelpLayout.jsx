import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const F = 'Figtree, system-ui, sans-serif'
const GOLD = '#C9A84C'
const BLACK = '#111111'

export default function HelpLayout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const tabs = [
    { label: 'Help Centre Home', path: '/help-centre' },
    { label: 'Knowledge Base',   path: '/help-centre/knowledge-base' },
    { label: 'Academy',          path: '/help-centre/academy' },
  ]

  const activeTab = tabs.slice().reverse().find(t => location.pathname.startsWith(t.path))?.path || '/help-centre'

  function handleSearch(e) {
    e.preventDefault()
    if (query.trim()) navigate(`/help-centre/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FAFAF8', fontFamily: F }}>

      {/* Top bar */}
      <header style={{ background: BLACK, borderBottom: '1px solid #222' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
            {/* Logo back to marketing */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
              <div style={{ width: 36, height: 36, background: GOLD, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: BLACK }}>R</span>
              </div>
              <span style={{ fontFamily: F, fontWeight: 700, fontSize: 18, color: '#FAFAF8' }}>ReeveOS</span>
              <span style={{ fontFamily: F, fontSize: 14, color: '#666', marginLeft: 4 }}>/ Help Centre</span>
            </Link>

            {/* Search */}
            <form onSubmit={handleSearch} style={{ flex: 1, maxWidth: 400, margin: '0 32px' }}>
              <div style={{ position: 'relative' }}>
                <svg style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#666' }} width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
                <input
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search articles..."
                  style={{ width: '100%', padding: '8px 12px 8px 36px', borderRadius: 8, border: '1px solid #333', background: '#1a1a1a', color: '#FAFAF8', fontFamily: F, fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                />
              </div>
            </form>

            {/* CTA */}
            <a href="https://portal.rezvo.app" style={{ background: GOLD, color: BLACK, fontFamily: F, fontWeight: 600, fontSize: 14, padding: '8px 18px', borderRadius: 20, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Go to dashboard
            </a>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 0 }}>
            {tabs.map(t => {
              const isActive = t.path === activeTab
              return (
                <Link
                  key={t.path}
                  to={t.path}
                  style={{
                    fontFamily: F, fontSize: 14, fontWeight: isActive ? 600 : 400,
                    color: isActive ? GOLD : '#999',
                    padding: '12px 18px',
                    borderBottom: isActive ? `2px solid ${GOLD}` : '2px solid transparent',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                >
                  {t.label}
                </Link>
              )
            })}
          </div>
        </div>
      </header>

      {/* Page content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #E5E5E5', padding: '32px 24px', marginTop: 64 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 28, height: 28, background: BLACK, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: F, fontWeight: 700, fontSize: 14, color: GOLD }}>R</span>
            </div>
            <span style={{ fontFamily: F, fontSize: 14, color: '#666' }}>ReeveOS Help Centre</span>
          </div>
          <span style={{ fontFamily: F, fontSize: 13, color: '#999' }}>
            Couldn't find what you needed?{' '}
            <a href="mailto:hello@reeveos.app" style={{ color: GOLD, textDecoration: 'none' }}>Contact us</a>
          </span>
        </div>
      </footer>
    </div>
  )
}
