import React from 'react'

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 4rem 2rem',
      background: 'radial-gradient(ellipse at top left, #1a1a3e 0%, #0f0f1a 60%)',
      position: 'relative',
      overflow: 'hidden',
      gap: '3rem',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}>

      {/* ── LEFT SIDE ── */}
      <div style={{ flex: 1, minWidth: '280px', maxWidth: '600px' }}>

        <p style={{
          color: 'var(--accent)', fontSize: '1.1rem',
          fontWeight: 500, marginBottom: '0.5rem'
        }}>
          Hello, I'm
        </p>

        <h1 style={{
          fontSize: 'clamp(2.8rem, 7vw, 5rem)',
          fontWeight: 900, lineHeight: 1.1,
          color: 'var(--accent)',
          marginBottom: '1.2rem',
          textShadow: '0 0 40px rgba(0,212,255,0.3)'
        }}>
          Veerlapati<br />Abhiram
        </h1>

        <p style={{
          color: 'var(--text-muted)', fontSize: '1.05rem',
          lineHeight: 1.7, marginBottom: '0.8rem', maxWidth: '480px'
        }}>
          B.Tech CSE Student , Java Developer , html and CSS Developer also
        </p>

        <p style={{
          color: 'var(--text-muted)', fontSize: '1rem',
          lineHeight: 1.7, marginBottom: '2rem', maxWidth: '450px'
        }}>
          I learned perfectly C , java , html and css .
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <a href="#projects" style={{
            padding: '0.8rem 2rem',
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            color: '#fff', borderRadius: '8px', fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 4px 20px rgba(108,99,255,0.4)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(108,99,255,0.5)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(108,99,255,0.4)' }}
          >
            Explore My Work
          </a>
          <a href="#contact" style={{
            padding: '0.8rem 2rem',
            background: 'rgba(255,255,255,0.07)',
            color: 'var(--text)', border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '8px', fontWeight: 600, fontSize: '1rem',
            transition: 'background 0.2s, transform 0.2s'
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.13)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Skill Tags */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {['Html', 'CSS', 'Java', 'C'].map(tag => (
            <span key={tag} style={{
              padding: '0.45rem 1.2rem',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '999px',
              fontSize: '0.9rem',
              color: 'var(--text)',
              fontWeight: 500
            }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* ── RIGHT SIDE — Profile Card ── */}
      <div style={{
        flexShrink: 0,
        width: '300px',
        background: 'linear-gradient(160deg, #1e2a3a, #111827)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}>
        {/* Photo */}
        <div style={{ width: '100%', height: '320px', overflow: 'hidden' }}>
          <img
            src="/Abhiram.jepg"
            alt="Veerlapati Abhiram"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        </div>
        
      </div>
    </section>
  )
}

export default Hero
