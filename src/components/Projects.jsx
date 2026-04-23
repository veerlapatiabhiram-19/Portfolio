import React, { useState } from 'react'

const projects = [
  {
    title: 'Property Management System',
    description: 'A property management system that handles listings, rentals, and tenant information.',
  

    details: [
      'Developed a property management system for landlords and property managers',
      'Handled property listings, rental tracking, and tenant data efficiently',
      'Improved system usability with a clean and structured interface',
      'Ensured smooth navigation and data handling across modules',
    ],

    features: [
      'Property listing and management system',
      'Tenant information tracking',
      'Rental management and updates',
      'Search and filtering for properties',
      'User-friendly dashboard for landlords',
    ],

   design: [
  'Efficient handling of property listings and tenant records',
  'Organized data management for rentals and users',
  'Optimized system flow for better performance',
  'Structured modules for scalability and maintenance',
  'Reliable data handling across different operations',
],

    github: 'https://github.com/veerlapatiabhiram-19',
  }
]
const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: '16px',
      padding: '2rem',
      transition: 'transform 0.3s, box-shadow 0.3s',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      maxWidth: '700px',
      margin: '0 auto'
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,99,255,0.2)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)' }}
    >
      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--primary)' }}>
        {project.title}
      </h3>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.7' }}>
        {project.description}
      </p>

      {/* Links */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
          padding: '0.5rem 1.2rem',
          background: 'var(--primary)', color: '#fff',
          borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600
        }}>GitHub Repository ↗</a>
      </div>

      {/* Toggle Details */}
      <button onClick={() => setExpanded(!expanded)} style={{
        background: 'none', border: '1px solid var(--border)',
        color: 'var(--primary)', padding: '0.5rem 1.2rem',
        borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600,
        marginBottom: expanded ? '1.25rem' : 0
      }}>
        {expanded ? 'Hide Details ▲' : 'View Details ▼'}
      </button>

      {expanded && (
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
          <h4 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.5rem' }}>What I Built:</h4>
          <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
            {project.details.map((d, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{d}</li>)}
          </ul>

          <h4 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.5rem' }}>Key Features:</h4>
          <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem', marginBottom: '1rem' }}>
            {project.features.map((f, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{f}</li>)}
          </ul>

          <h4 style={{ color: 'var(--text)', fontWeight: 600, marginBottom: '0.5rem' }}>Design Highlights:</h4>
          <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.2rem' }}>
            {project.design.map((d, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{d}</li>)}
          </ul>
        </div>
      )}
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '5rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '0.5rem' }}>
        My <span style={{ color: 'var(--primary)' }}>Projects</span>
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
        Things I've built and designed
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </section>
  )
}

export default Projects
