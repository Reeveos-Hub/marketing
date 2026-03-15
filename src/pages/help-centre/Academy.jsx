import { Link } from 'react-router-dom'
import HelpLayout from './HelpLayout'

const F = 'Figtree, system-ui, sans-serif'
const GOLD = '#C9A84C'
const BLACK = '#111111'

const COURSES = [
  {
    id: 'launch-your-workspace',
    number: '01',
    title: 'Launch your workspace',
    desc: 'Get your account set up properly from day one — business profile, services, staff, and your first booking.',
    lessons: 6,
    duration: '12 min',
    walkthroughs: ['WT-01', 'WT-04'],
  },
  {
    id: 'take-bookings',
    number: '02',
    title: 'Taking bookings',
    desc: 'Set up your booking link, connect to Google and Instagram, and start filling your calendar.',
    lessons: 7,
    duration: '15 min',
    walkthroughs: ['WT-02', 'WT-03'],
  },
  {
    id: 'manage-your-clients',
    number: '03',
    title: 'Managing your clients',
    desc: 'Use the client book to track your customers, add notes, and set up consultation forms.',
    lessons: 6,
    duration: '11 min',
    walkthroughs: ['WT-05', 'WT-07'],
  },
  {
    id: 'grow-your-business',
    number: '04',
    title: 'Growing your business',
    desc: 'Use marketing campaigns, your online shop, and your website to bring in more revenue.',
    lessons: 5,
    duration: '10 min',
    walkthroughs: ['WT-06', 'WT-08'],
  },
  {
    id: 'run-your-team',
    number: '05',
    title: 'Running your team',
    desc: 'Add team members, set their hours, control what they can see, and manage your day together.',
    lessons: 4,
    duration: '8 min',
    walkthroughs: ['WT-09', 'WT-10'],
  },
]

export default function Academy() {
  return (
    <HelpLayout>
      {/* Hero */}
      <div style={{ background: BLACK, padding: '48px 24px 40px', borderBottom: '1px solid #222' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: GOLD, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>
            ReeveOS Academy
          </p>
          <h1 style={{ fontFamily: F, fontSize: 32, fontWeight: 800, color: '#FAFAF8', lineHeight: 1.1, marginBottom: 10 }}>
            Learn ReeveOS, your way
          </h1>
          <p style={{ fontFamily: F, fontSize: 16, color: '#999', marginBottom: 0 }}>
            Short video courses that walk you through every part of the platform. Start anywhere — each lesson is under 3 minutes.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 24px' }}>

        {/* Coming soon banner */}
        <div style={{ background: '#FBF6E9', border: '1px solid #E8DEC9', borderRadius: 12, padding: '16px 20px', marginBottom: 40, display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <svg width="18" height="18" fill="none" stroke={GOLD} strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <div>
            <p style={{ fontFamily: F, fontSize: 14, fontWeight: 600, color: '#8B7355', marginBottom: 2 }}>Video courses coming soon</p>
            <p style={{ fontFamily: F, fontSize: 13, color: '#B8A080', lineHeight: 1.5 }}>
              We're recording the walkthroughs now. In the meantime, all the same content is available as step-by-step written guides in the{' '}
              <Link to="/help-centre/knowledge-base" style={{ color: GOLD }}>Knowledge Base</Link>.
            </p>
          </div>
        </div>

        {/* Course list */}
        <h2 style={{ fontFamily: F, fontSize: 20, fontWeight: 700, color: BLACK, marginBottom: 20 }}>Courses</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {COURSES.map((course, i) => (
            <div
              key={course.id}
              style={{ background: '#fff', border: '1px solid #E5E5E5', borderRadius: 14, padding: '24px', display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: 20, alignItems: 'center' }}
            >
              {/* Number */}
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: BLACK, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: F, fontSize: 18, fontWeight: 800, color: GOLD }}>{course.number}</span>
              </div>

              {/* Info */}
              <div>
                <h3 style={{ fontFamily: F, fontSize: 17, fontWeight: 700, color: BLACK, marginBottom: 6 }}>{course.title}</h3>
                <p style={{ fontFamily: F, fontSize: 14, color: '#666', lineHeight: 1.5, marginBottom: 10 }}>{course.desc}</p>
                <div style={{ display: 'flex', gap: 16 }}>
                  <span style={{ fontFamily: F, fontSize: 13, color: '#999' }}>
                    <strong style={{ color: BLACK }}>{course.lessons}</strong> lessons
                  </span>
                  <span style={{ fontFamily: F, fontSize: 13, color: '#999' }}>
                    <strong style={{ color: BLACK }}>{course.duration}</strong>
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontFamily: F, fontSize: 12, color: '#aaa', marginBottom: 8 }}>Coming soon</div>
                <Link
                  to="/help-centre/knowledge-base"
                  style={{ display: 'inline-block', background: '#F5F0E8', color: BLACK, fontFamily: F, fontWeight: 600, fontSize: 13, padding: '8px 14px', borderRadius: 8, textDecoration: 'none' }}
                >
                  Read guide instead →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <p style={{ fontFamily: F, fontSize: 14, color: '#888', marginBottom: 16 }}>
            Prefer to read rather than watch? Every course topic has a full written guide.
          </p>
          <Link
            to="/help-centre/knowledge-base"
            style={{ background: BLACK, color: '#FAFAF8', fontFamily: F, fontWeight: 600, fontSize: 14, padding: '12px 24px', borderRadius: 24, textDecoration: 'none', display: 'inline-block' }}
          >
            Browse the Knowledge Base
          </Link>
        </div>
      </div>
    </HelpLayout>
  )
}
