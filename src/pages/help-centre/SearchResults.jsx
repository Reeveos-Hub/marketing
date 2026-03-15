import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import HelpLayout from './HelpLayout'
import { ARTICLES, CATEGORY_MAP } from '../../data/helpData'

const F = 'Figtree, system-ui, sans-serif'
const GOLD = '#C9A84C'
const BLACK = '#111111'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''

  const results = useMemo(() => {
    if (!q) return []
    const lower = q.toLowerCase()
    return ARTICLES.filter(a =>
      a.title.toLowerCase().includes(lower) ||
      a.intro.toLowerCase().includes(lower) ||
      a.sections.some(s =>
        (s.title || '').toLowerCase().includes(lower) ||
        s.steps.some(st => st.text.toLowerCase().includes(lower))
      ) ||
      (a.faqs || []).some(f => f.q.toLowerCase().includes(lower) || f.a.toLowerCase().includes(lower))
    )
  }, [q])

  return (
    <HelpLayout>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
          <Link to="/help-centre" style={{ fontFamily: F, fontSize: 14, color: '#888', textDecoration: 'none' }}>Help Centre</Link>
          <span style={{ color: '#ccc' }}>›</span>
          <span style={{ fontFamily: F, fontSize: 14, color: BLACK }}>Search results</span>
        </div>

        <h1 style={{ fontFamily: F, fontSize: 24, fontWeight: 800, color: BLACK, marginBottom: 6 }}>
          {results.length > 0 ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${q}"` : `No results for "${q}"`}
        </h1>

        {results.length === 0 ? (
          <div style={{ marginTop: 32 }}>
            <p style={{ fontFamily: F, fontSize: 15, color: '#666', marginBottom: 20 }}>
              We couldn't find anything matching that. Try different words, or browse by topic below.
            </p>
            <Link to="/help-centre/knowledge-base" style={{ fontFamily: F, fontSize: 15, color: GOLD, fontWeight: 600, textDecoration: 'none' }}>
              Browse all topics →
            </Link>
          </div>
        ) : (
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {results.map(a => {
              const cat = CATEGORY_MAP[a.categoryId]
              return (
                <Link
                  key={a.id}
                  to={`/help-centre/knowledge-base/${a.categoryId}/${a.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '16px 18px', transition: 'border-color 0.15s, box-shadow 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = '0 2px 8px rgba(201,168,76,0.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{ fontFamily: F, fontSize: 12, fontWeight: 600, color: GOLD, background: '#FBF6E9', padding: '2px 8px', borderRadius: 4 }}>
                        {cat?.icon} {cat?.title}
                      </span>
                    </div>
                    <div style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: BLACK, marginBottom: 4 }}>{a.title}</div>
                    <div style={{ fontFamily: F, fontSize: 13, color: '#888', lineHeight: 1.5 }}>
                      {a.intro.length > 160 ? a.intro.slice(0, 160) + '…' : a.intro}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </HelpLayout>
  )
}
