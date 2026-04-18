import React from 'react'

const skills = [
  { name: 'HTML5', level: 90, color: '#e34c26' },
  { name: 'CSS3', level: 85, color: '#264de4' },
  { name: 'JavaScript', level: 75, color: '#f7df1e' },
  { name: 'C', level: 80, color: '#007396' },
  { name: 'Java', level: 85, color: '#007396' },
  { name: 'React', level: 70, color: '#61dafb' },
  { name: 'Git & GitHub', level: 80, color: '#f05032' },
  { name: 'Spring Boot', level: 60, color: '#6db33f' },
]

const SkillBar = ({ name, level, color }) => (
  <div style={{ marginBottom: '1.2rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
      <span style={{ fontWeight: 500 }}>{name}</span>
      <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{level}%</span>
    </div>
    <div style={{
      background: 'var(--bg-card2)', borderRadius: '999px',
      height: '8px', overflow: 'hidden'
    }}>
      <div style={{
        width: `${level}%`, height: '100%',
        background: `linear-gradient(90deg, ${color}, var(--primary))`,
        borderRadius: '999px',
        transition: 'width 1s ease'
      }} />
    </div>
  </div>
)

const Skills = () => {
  return (
    <section id="skills" style={{
      padding: '5rem 2rem',
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
          My <span style={{ color: 'var(--primary)' }}>Skills</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Technologies I've learned and worked with
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '0 3rem'
        }}>
          {skills.map(skill => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        {/* Tech Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2.5rem', justifyContent: 'center' }}>
        {['C', 'Java', 'HTML', 'CSS', 'JavaScript', 'React', 'Spring Boot', 'Git'].map(tag => (
            <span key={tag} style={{
              padding: '0.4rem 1rem',
              background: 'rgba(108,99,255,0.15)',
              border: '1px solid var(--border)',
              borderRadius: '999px',
              fontSize: '0.85rem',
              color: 'var(--primary)',
              fontWeight: 500
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
