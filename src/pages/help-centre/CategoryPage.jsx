import { Link, useParams } from 'react-router-dom'
import HelpLayout from './HelpLayout'
import { CATEGORIES, ARTICLES, CATEGORY_MAP } from '../../data/helpData'

const F = 'Figtree, system-ui, sans-serif'
const GOLD = '#C9A84C'
const BLACK = '#111111'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const cat = CATEGORY_MAP[categoryId]
  const articles = ARTICLES.filter(a => a.categoryId === categoryId)

  if (!cat) return (
    <HelpLayout>
      <div style={{ maxWidth: 700, margin: '80px auto', textAlign: 'center', padding: '0 24px' }}>
        <h2 style={{ fontFamily: F, fontSize: 24, color: BLACK }}>Category not found</h2>
        <Link to="/help-centre/knowledge-base" style={{ color: GOLD }}>← Back to Knowledge Base</Link>
      </div>
    </HelpLayout>
  )

  return (
    <HelpLayout>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '40px 24px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28, flexWrap: 'wrap' }}>
          <Link to="/help-centre" style={{ fontFamily: F, fontSize: 14, color: '#888', textDecoration: 'none' }}>Help Centre</Link>
          <span style={{ color: '#ccc' }}>›</span>
          <Link to="/help-centre/knowledge-base" style={{ fontFamily: F, fontSize: 14, color: '#888', textDecoration: 'none' }}>Knowledge Base</Link>
          <span style={{ color: '#ccc' }}>›</span>
          <span style={{ fontFamily: F, fontSize: 14, color: BLACK }}>{cat.title}</span>
        </div>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
          <span style={{ fontSize: 32 }}>{cat.icon}</span>
          <h1 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: BLACK, margin: 0 }}>{cat.title}</h1>
        </div>
        <p style={{ fontFamily: F, fontSize: 16, color: '#666', marginBottom: 36 }}>{cat.desc}</p>

        {/* Articles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {articles.map((a, i) => (
            <Link
              key={a.id}
              to={`/help-centre/knowledge-base/${categoryId}/${a.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, background: '#fff', border: '1px solid #E5E5E5', borderRadius: 10, padding: '16px 18px', transition: 'border-color 0.15s, box-shadow 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.boxShadow = '0 2px 8px rgba(201,168,76,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E5E5'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <svg style={{ flexShrink: 0, marginTop: 3 }} width="16" height="16" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                </svg>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: BLACK, marginBottom: 4 }}>{a.title}</div>
                  <div style={{ fontFamily: F, fontSize: 13, color: '#888', lineHeight: 1.5 }}>
                    {a.intro.length > 140 ? a.intro.slice(0, 140) + '…' : a.intro}
                  </div>
                </div>
                <svg style={{ flexShrink: 0, color: '#ccc', marginTop: 3 }} width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </HelpLayout>
  )
}
