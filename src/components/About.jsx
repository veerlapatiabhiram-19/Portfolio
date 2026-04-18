import React from 'react'

const About = () => {
  return (
    <section id="about" style={{
      padding: '5rem 2rem',
      maxWidth: '1100px',
      margin: '0 auto'
    }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
        About <span style={{ color: 'var(--primary)' }}>Me</span>
      </h2>

      <div style={{
        display: 'flex', gap: '3rem', alignItems: 'center',
        flexWrap: 'wrap', justifyContent: 'center'
      }}>
        {/* Text */}
        <div style={{ maxWidth: '550px', flex: 1, minWidth: '280px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            I am a motivated <strong style={{ color: 'var(--text)' }}>B.Tech CSE student</strong> at KL University
            with a strong foundation in programming and web development.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            I enjoy building <strong style={{ color: 'var(--text)' }}>innovative projects</strong> with strong skills in
            Java, HTML, CSS, and JavaScript. I'm passionate about creating clean, user-friendly interfaces.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>
            Currently focused on expanding my skills in full stack development and UI/UX design principles.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'University', value: 'KL University' },
              { label: 'CGPA', value: '8.6' },
              { label: 'GitHub', value: 'veerlapatiabhiram-19' },
            ].map(item => (
              <div key={item.label} style={{
                background: 'var(--bg-card2)', borderRadius: '8px',
                padding: '0.6rem 1rem', border: '1px solid var(--border)'
              }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.label}</p>
                <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
