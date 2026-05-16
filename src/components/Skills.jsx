import React from 'react'

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '5rem 2rem', background: 'var(--bg-card)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
          My <span style={{ color: 'var(--primary)' }}>Skills</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Technologies I've learned and worked with
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          {['C', 'Python', 'HTML', 'CSS', 'JavaScript', 'Visual Studio Code', 'React','Git','SQL'].map(tag => (
            <span key={tag} style={{ padding: '0.4rem 1rem', background: 'rgba(108,99,255,0.15)', border: '1px solid var(--border)', borderRadius: '999px', fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500 }}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills