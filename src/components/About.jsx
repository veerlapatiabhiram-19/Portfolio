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
                I enjoy turning ideas into reality through <strong style={{ color: 'var(--text)' }}>clean and creative web experiences</strong>. With a strong foundation in HTML,CSS,JavaScript,and Python I focus on building interfaces that are both functional and visually appealing.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8' }}>
            Always curious and eager to grow — currently exploring <strong style={{ color: 'var(--text)' }}>Python and modern web development</strong> to craft smarter, more user-centered solutions.
           </p>
         
          </div>
        </div>
    </section>
  )
}

export default About
