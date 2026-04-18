import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(15,15,26,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      padding: '1rem 2rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)' }}>
        V. Abhiram
      </div>

      {/* Desktop Links */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }} className="desktop-nav">
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{
              color: 'var(--text)', fontWeight: 500, transition: 'color 0.2s',
              fontSize: '0.95rem'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text)'}
            >{link}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        background: 'none', border: 'none', color: 'var(--text)',
        fontSize: '1.5rem', display: 'none'
      }} className="mobile-menu-btn">☰</button>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
