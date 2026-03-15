import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HelpLayout from './HelpLayout'
import { ARTICLES, CATEGORIES, ARTICLE_MAP, CATEGORY_MAP } from '../../data/helpData'

const F = 'Figtree, system-ui, sans-serif'
const GOLD = '#C9A84C'
const BLACK = '#111111'

function ScreenshotSlot() {
  return (
    <div style={{ margin: '16px 0 8px', borderRadius: 10, overflow: 'hidden', border: '2px dashed #D4C9A8', background: '#FAF7F0' }}>
      <div style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="20" height="20" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <div>
          <div style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: '#8B7355' }}>Screenshot placeholder</div>
          <div style={{ fontFamily: F, fontSize: 12, color: '#B8A080' }}>Image will be added here once the UI is finalised</div>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #F0F0F0' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', background: 'none', border: 'none', padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontFamily: F, fontSize: 15, fontWeight: 600, color: BLACK }}>{q}</span>
        <svg style={{ flexShrink: 0, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} width="16" height="16" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && (
        <div style={{ fontFamily: F, fontSize: 14, color: '#555', lineHeight: 1.7, paddingBottom: 16, paddingRight: 28 }}>
          {a}
        </div>
      )}
    </div>
  )
}

export default function ArticlePage() {
  const { categoryId, articleId } = useParams()
  const article = ARTICLE_MAP[articleId]
  const cat = CATEGORY_MAP[categoryId]
  const [helpful, setHelpful] = useState(null)

  const relatedArticles = (article?.related || [])
    .map(id => ARTICLES.find(a => a.id === id))
    .filter(Boolean)
    .slice(0, 4)

  const otherInCategory = ARTICLES
    .filter(a => a.categoryId === categoryId && a.id !== articleId)
    .slice(0, 5)

  if (!article || !cat) return (
    <HelpLayout>
      <div style={{ maxWidth: 700, margin: '80px auto', textAlign: 'center', padding: '0 24px' }}>
        <h2 style={{ fontFamily: F, fontSize: 24, color: BLACK }}>Article not found</h2>
        <Link to="/help-centre/knowledge-base" style={{ color: GOLD }}>← Back to Knowledge Base</Link>
      </div>
    </HelpLayout>
  )

  let stepCounter = 0

  return (
    <HelpLayout>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: '1fr 280px', gap: 40, alignItems: 'start' }}>

        {/* Main content */}
        <div>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
            <Link to="/help-centre" style={{ fontFamily: F, fontSize: 13, color: '#888', textDecoration: 'none' }}>Help Centre</Link>
            <span style={{ color: '#ccc' }}>›</span>
            <Link to="/help-centre/knowledge-base" style={{ fontFamily: F, fontSize: 13, color: '#888', textDecoration: 'none' }}>Knowledge Base</Link>
            <span style={{ color: '#ccc' }}>›</span>
            <Link to={`/help-centre/knowledge-base/${categoryId}`} style={{ fontFamily: F, fontSize: 13, color: '#888', textDecoration: 'none' }}>{cat.title}</Link>
            <span style={{ color: '#ccc' }}>›</span>
            <span style={{ fontFamily: F, fontSize: 13, color: BLACK }}>{article.title}</span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: F, fontSize: 28, fontWeight: 800, color: BLACK, lineHeight: 1.2, marginBottom: 12 }}>
            {article.title}
          </h1>

          {/* Intro */}
          <p style={{ fontFamily: F, fontSize: 16, color: '#555', lineHeight: 1.7, marginBottom: 28, borderLeft: `3px solid ${GOLD}`, paddingLeft: 16 }}>
            {article.intro}
          </p>

          {/* In this article (TOC) */}
          {article.toc && article.toc.length > 1 && (
            <div style={{ background: '#F8F6F0', border: '1px solid #E8DEC9', borderRadius: 10, padding: '16px 20px', marginBottom: 36 }}>
              <p style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: '#8B7355', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>
                In this article
              </p>
              <ol style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {article.toc.map((item, i) => (
                  <li key={i} style={{ fontFamily: F, fontSize: 14, color: '#555' }}>{item}</li>
                ))}
              </ol>
            </div>
          )}

          {/* Sections */}
          {article.sections.map((section, si) => {
            return (
              <div key={si} style={{ marginBottom: 36 }}>
                {section.title && (
                  <h2 style={{ fontFamily: F, fontSize: 18, fontWeight: 700, color: BLACK, marginBottom: 16, paddingBottom: 10, borderBottom: '2px solid #F0F0F0' }}>
                    {section.title}
                  </h2>
                )}
                {section.steps.map((step, idx) => {
                  stepCounter++
                  return (
                    <div key={idx}>
                      <div style={{ display: 'flex', gap: 14, marginBottom: step.screenshot ? 0 : 14 }}>
                        <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: BLACK, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>
                          <span style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: GOLD }}>{stepCounter}</span>
                        </div>
                        <p style={{ fontFamily: F, fontSize: 15, color: '#333', lineHeight: 1.6, margin: 0, flex: 1 }}>
                          {step.text}
                        </p>
                      </div>
                      {step.screenshot && <div style={{ paddingLeft: 40 }}><ScreenshotSlot /></div>}
                      {!step.screenshot && <div style={{ height: 2 }} />}
                    </div>
                  )
                })}
              </div>
            )
          })}

          {/* FAQs */}
          {article.faqs && article.faqs.length > 0 && (
            <div style={{ marginTop: 40, background: '#fff', border: '1px solid #E5E5E5', borderRadius: 12, padding: '20px 24px' }}>
              <h3 style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: BLACK, marginBottom: 8 }}>
                Frequently asked questions
              </h3>
              <div>
                {article.faqs.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
              </div>
            </div>
          )}

          {/* Was this helpful */}
          <div style={{ marginTop: 40, background: '#F8F6F0', border: '1px solid #E8DEC9', borderRadius: 12, padding: '20px 24px', textAlign: 'center' }}>
            <p style={{ fontFamily: F, fontSize: 15, color: '#555', marginBottom: 14 }}>
              Was this guide helpful?
            </p>
            {helpful === null ? (
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <button onClick={() => setHelpful('yes')} style={{ background: BLACK, color: '#FAFAF8', fontFamily: F, fontWeight: 600, fontSize: 14, padding: '8px 20px', borderRadius: 20, border: 'none', cursor: 'pointer' }}>
                  Yes, thanks
                </button>
                <button onClick={() => setHelpful('no')} style={{ background: '#fff', color: BLACK, fontFamily: F, fontWeight: 600, fontSize: 14, padding: '8px 20px', borderRadius: 20, border: '1px solid #ccc', cursor: 'pointer' }}>
                  Not quite
                </button>
              </div>
            ) : helpful === 'yes' ? (
              <p style={{ fontFamily: F, fontSize: 14, color: '#22c55e', fontWeight: 600 }}>Brilliant — glad it helped!</p>
            ) : (
              <p style={{ fontFamily: F, fontSize: 14, color: '#555' }}>
                Sorry about that. <a href="mailto:hello@reeveos.app" style={{ color: GOLD }}>Let us know what was missing</a> and we'll improve it.
              </p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ position: 'sticky', top: 24 }}>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 12, padding: '16px 18px', marginBottom: 20 }}>
              <p style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                Related articles
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {relatedArticles.map(a => {
                  const aCat = CATEGORY_MAP[a.categoryId]
                  return (
                    <Link
                      key={a.id}
                      to={`/help-centre/knowledge-base/${a.categoryId}/${a.id}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                        <svg style={{ flexShrink: 0, marginTop: 3 }} width="13" height="13" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                        </svg>
                        <div>
                          <div style={{ fontFamily: F, fontSize: 13, color: '#333', lineHeight: 1.4 }}>{a.title}</div>
                          <div style={{ fontFamily: F, fontSize: 11, color: '#aaa' }}>{aCat?.title}</div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Others in category */}
          {otherInCategory.length > 0 && (
            <div style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 12, padding: '16px 18px', marginBottom: 20 }}>
              <p style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>
                More in {cat.title}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {otherInCategory.map(a => (
                  <Link
                    key={a.id}
                    to={`/help-centre/knowledge-base/${categoryId}/${a.id}`}
                    style={{ fontFamily: F, fontSize: 13, color: '#333', textDecoration: 'none', lineHeight: 1.4 }}
                    onMouseEnter={e => e.currentTarget.style.color = GOLD}
                    onMouseLeave={e => e.currentTarget.style.color = '#333'}
                  >
                    {a.title}
                  </Link>
                ))}
                <Link to={`/help-centre/knowledge-base/${categoryId}`} style={{ fontFamily: F, fontSize: 13, color: GOLD, textDecoration: 'none', fontWeight: 500, marginTop: 4 }}>
                  View all →
                </Link>
              </div>
            </div>
          )}

          {/* Need more help */}
          <div style={{ background: '#F8F6F0', border: '1px solid #E8DEC9', borderRadius: 12, padding: '16px 18px' }}>
            <p style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: BLACK, marginBottom: 6 }}>Still stuck?</p>
            <p style={{ fontFamily: F, fontSize: 13, color: '#777', marginBottom: 12, lineHeight: 1.5 }}>
              We're happy to help. Drop us a message and we'll get back to you quickly.
            </p>
            <a href="mailto:hello@reeveos.app" style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: GOLD, textDecoration: 'none' }}>
              Contact support →
            </a>
          </div>
        </div>
      </div>
    </HelpLayout>
  )
}
