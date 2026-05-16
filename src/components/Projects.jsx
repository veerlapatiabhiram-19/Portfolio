import React, { useState } from 'react'

const projects = [
  {
    title: 'TechPills',
    description: 'A multimodal web platform that provides text, image, and voice processing services in a unified interface using a pill-based modular architecture.',
    tech: ['HTML', 'CSS', 'JavaScript','React'],
    details: [
      'Designed and developed a pill-based modular platform integrating text, image, and voice AI functionalities into a single unified web interface.',
      'Implemented text processing features including summarization, grammar correction, keyword extraction, sentiment and emotion detection, and multilingual support.',
      'Built image processing pills including OCR, background removal, grayscale conversion, handwriting recognition, and document type detection.',
      'Developed voice processing features such as voice-to-text conversion, emotion and intent detection from speech, keyword extraction, and voice command processing.',
    ],
    features: [
      'Text summarization, grammar correction & keyword extraction',
      'Sentiment and emotion detection with multilingual support',
      'OCR, background removal & handwriting recognition',
      'Grayscale conversion & document type detection',
      'Voice-to-text, emotion & intent detection from speech',
      'Voice command processing & keyword extraction',
    ],
    design: [
      'Pill-based modular architecture for clean separation of features',
      'Unified interface combining text, image and voice in one platform',
      'User-friendly navigation across different processing modules',
      'Consistent and modern visual presentation throughout',
      'Responsive layout optimized for all screen sizes',
    ],
    github: 'https://github.com/TechPills-dev/Techpills-Development',
  },
  {
    title: 'Image Gallery',
    description: 'A simple front-end image gallery website built using HTML and CSS, allowing users to browse and view images across different categories.',
    tech: ['HTML', 'CSS'],
    details: [
      'Designed and developed a responsive image gallery website featuring diverse collections such as Portrait, Nature, Lifestyle, and Creative galleries.',
      'Created an interactive user experience with visually appealing sections and dynamic image displays.',
      'Built user-friendly navigation for seamless browsing across categories.',
      'Maintained a polished and consistent design through balanced layouts and cohesive color palettes.',
    ],
    features: [
      'Portrait, Nature, Lifestyle & Creative gallery categories',
      'Responsive grid layout for all screen sizes',
      'Dynamic image display with smooth browsing',
      'User-friendly navigation across categories',
      'Modern visual presentation with cohesive color palette',
    ],
    design: [
      'Clean and balanced grid-based layout',
      'Cohesive color palettes across all gallery sections',
      'Modern visual presentation with consistent styling',
      'Smooth and intuitive user experience',
      'Fully responsive design for mobile and desktop',
    ],
    github: 'https://github.com/veerlapatiabhiram-19/Image-Gallery',
  },
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

      {/* Tech Stack */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
        {project.tech.map(t => (
          <span key={t} style={{
            padding: '0.25rem 0.75rem',
            background: 'rgba(108,99,255,0.15)',
            border: '1px solid var(--border)',
            borderRadius: '999px',
            fontSize: '0.8rem',
            color: 'var(--accent)'
          }}>{t}</span>
        ))}
      </div>

      {/* GitHub Link */}
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