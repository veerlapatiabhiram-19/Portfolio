import React from 'react'

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'K L University',
    score: 'CGPA: 8.6 (current)',
    icon: '🎓',
    color: '#6c63ff'
  },
  {
    degree: 'Intermediate (Class 12)',
    institution: 'Narayana Junior College',
    score: 'Percentage: 91.8%',
    icon: '📘',
    color: '#00d4ff'
  },
  {
    degree: 'SSC (Class 10)',
    institution: 'Shastra High School',
    score: '',
    icon: '🏫',
    color: '#ff6b6b'
  },
]

const Education = () => {
  return (
    <section id="education" style={{
      padding: '5rem 2rem',
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
          My <span style={{ color: 'var(--primary)' }}>Education</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Academic background and qualifications
        </p>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: '24px', top: 0, bottom: 0,
            width: '2px', background: 'var(--border)'
          }} />

          {education.map((edu, i) => (
            <div key={i} style={{
              display: 'flex', gap: '1.5rem', marginBottom: '2rem',
              position: 'relative'
            }}>
              {/* Icon */}
              <div style={{
                width: '50px', height: '50px', borderRadius: '50%',
                background: `${edu.color}22`,
                border: `2px solid ${edu.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.3rem', flexShrink: 0, zIndex: 1,
                boxShadow: `0 0 15px ${edu.color}44`
              }}>
                {edu.icon}
              </div>

              {/* Content */}
              <div style={{
                background: 'var(--bg-card2)',
                border: '1px solid var(--border)',
                borderRadius: '12px', padding: '1.25rem 1.5rem',
                flex: 1
              }}>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>{edu.degree}</h3>
                <p style={{ color: edu.color, fontSize: '0.9rem', fontWeight: 500 }}>{edu.institution}</p>
                {edu.score && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.3rem' }}>{edu.score}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
