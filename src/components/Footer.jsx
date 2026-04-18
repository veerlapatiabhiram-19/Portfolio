import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Veerlapati Abhiram</span>. All rights reserved.
      </p>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.4rem' }}>
        Built with React + Vite · Deployed on Vercel
      </p>
      <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem' }}>
        <a href="https://github.com/veerlapatiabhiram-19" target="_blank" rel="noopener noreferrer"
          style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--primary)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >GitHub ↗</a>
        <a href="#home"
          style={{ color: 'var(--text-muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--primary)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >Back to Top ↑</a>
      </div>
    </footer>
  )
}

export default Footer
