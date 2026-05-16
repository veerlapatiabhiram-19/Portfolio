import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:veerlapatiabhiram@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const socialLinks = [
    {
      title: 'Email', href: 'mailto:veerlapatiabhiram@gmail.com', color: '#00A3FF',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    },
    {
      title: 'WhatsApp', href: 'https://wa.me/918341682118', color: '#00A3FF',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.17 1.535 5.943L.057 23.41c-.073.266.161.5.428.428l5.532-1.457A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.88 9.88 0 01-5.034-1.375l-.36-.214-3.733.982.998-3.648-.235-.374A9.88 9.88 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118c5.467 0 9.882 4.415 9.882 9.882 0 5.467-4.415 9.882-9.882 9.882z"/></svg>
    },
    {
      title: 'GitHub', href: 'https://github.com/veerlapatiabhiram-19', color: '#00A3FF',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
    },
    {
      title: 'LinkedIn', href: 'https://www.linkedin.com/in/veerlapati-abhiram/', color: '#00A3FF',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    },
    {
      title: 'Telegram', href: 'https://t.me/Abhiram1910', color: '#00A3FF',
      icon: <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
    },
  ]

  const inputStyle = {
    width: '100%', background: '#13131f',
    border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px',
    padding: '0.85rem 1rem', color: 'var(--text)', fontSize: '0.95rem',
    outline: 'none', fontFamily: 'Roboto, sans-serif',
    transition: 'border-color 0.2s', marginTop: '0.4rem', display: 'block'
  }

  const labelStyle = {
    fontSize: '0.9rem', color: 'var(--text-muted)',
    fontWeight: 500, display: 'block', marginBottom: '0.1rem'
  }

  return (
    <section id="contact" style={{ padding: '5rem 4rem', background: '#0d0d1a', borderTop: '1px solid var(--border)' }}>
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, textAlign: 'center', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent), var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Get In Touch
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1rem' }}>
        Feel free to reach out for collaborations or just a friendly hello
      </p>

      <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'start' }}>

        {/* LEFT */}
        <div>
          <h3 style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--text)', marginBottom: '0.5rem' }}>Contact Information</h3>
          <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--primary), var(--accent))', borderRadius: '2px', marginBottom: '2.5rem' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>Vijayawada, India</p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            {socialLinks.map(link => (
              <a key={link.title} href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer" title={link.title}
                style={{ width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,163,255,0.1)', border: '1px solid rgba(0,163,255,0.3)', borderRadius: '8px', color: '#00A3FF', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,163,255,0.25)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,163,255,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,163,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--accent)' }}>Mail</span> <span style={{ color: 'var(--text)' }}>Me</span>
          </h3>
          <div style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, var(--primary), var(--accent))', borderRadius: '2px', marginBottom: '2rem' }} />

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'} />
            </div>
            <div>
              <label style={labelStyle}>Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} required style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'} />
            </div>
            <div>
              <label style={labelStyle}>Your Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={6}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'} onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'} />
            </div>
            <div>
              <button type="submit" style={{ padding: '0.85rem 2.5rem', background: 'linear-gradient(135deg, #00A3FF, #0066FF)', color: '#fff', border: 'none', borderRadius: '999px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 4px 20px rgba(0,163,255,0.4)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,163,255,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,163,255,0.4)' }}
              >
                {sent ? '✅ Sent!' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#contact { padding: 4rem 1.5rem !important; }
          section#contact > p + div { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}

export default Contact