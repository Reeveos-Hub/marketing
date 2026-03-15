import { Link } from 'react-router-dom'
import HelpLayout from './HelpLayout'
import { CATEGORIES, ARTICLES } from '../../data/helpData'
import CategoryIcon from '../../components/CategoryIcon'

const F = 'Figtree, system-ui, sans-serif'
const GOLD = '#C9A84C'
const BLACK = '#111111'

export default function KnowledgeBase() {
  return (
    <HelpLayout>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>

        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 28 }}>
          <Link to="/help-centre" style={{ fontFamily: F, fontSize: 14, color: '#888', textDecoration: 'none' }}>Help Centre</Link>
          <span style={{ color: '#ccc' }}>›</span>
          <span style={{ fontFamily: F, fontSize: 14, color: BLACK }}>Knowledge Base</span>
        </div>

        <h1 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: BLACK, marginBottom: 8 }}>Knowledge Base</h1>
        <p style={{ fontFamily: F, fontSize: 16, color: '#666', marginBottom: 36 }}>
          Step-by-step guides for everything in ReeveOS. Pick a topic to get started.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
          {CATEGORIES.map(cat => {
            const articles = ARTICLES.filter(a => a.categoryId === cat.id)
            const preview = articles.slice(0, 3)
            return (
              <div key={cat.id} style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 14, overflow: 'hidden' }}>
                <Link to={`/help-centre/knowledge-base/${cat.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #F0F0F0' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#FAFAF8'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <CategoryIcon name={cat.icon} size={22} />
                      <span style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: BLACK }}>{cat.title}</span>
                    </div>
                    <div style={{ fontFamily: F, fontSize: 13, color: '#888', lineHeight: 1.5 }}>{cat.desc}</div>
                  </div>
                </Link>
                <div style={{ padding: '12px 0' }}>
                  {preview.map(a => (
                    <Link
                      key={a.id}
                      to={`/help-centre/knowledge-base/${cat.id}/${a.id}`}
                      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 20px', textDecoration: 'none' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#FAFAF8'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <svg width="13" height="13" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                      </svg>
                      <span style={{ fontFamily: F, fontSize: 13, color: '#444' }}>{a.title}</span>
                    </Link>
                  ))}
                  {articles.length > 3 && (
                    <Link
                      to={`/help-centre/knowledge-base/${cat.id}`}
                      style={{ display: 'block', padding: '8px 20px', fontFamily: F, fontSize: 13, color: GOLD, textDecoration: 'none', fontWeight: 500 }}
                    >
                      +{articles.length - 3} more articles →
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </HelpLayout>
  )
}
