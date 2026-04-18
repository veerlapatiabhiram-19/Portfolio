import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const mailto = `mailto:your.email@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const socialLinks = [
    { icon: '✉️', href: 'veerlapatiabhiram@gmail.com', title: 'Email' },
    { icon: '📞', href: 'tel:+918341682118', title: 'Phone' },
    { icon: '💬', href: 'https://wa.me/918341682118', title: 'WhatsApp' },
    { icon: '🐙', href: 'https://github.com/veerlapatiabhiram-19', title: 'GitHub' },
    { icon: '💼', href: 'https://www.linkedin.com/in/veerlapati-abhiram/', title: 'LinkedIn' },
  ]

  const inputStyle = {
    width: '100%',
    background: '#13131f',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '10px',
    padding: '0.85rem 1rem',
    color: 'var(--text)',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'Roboto, sans-serif',
    transition: 'border-color 0.2s',
    marginTop: '0.4rem',
    display: 'block'
  }

  const labelStyle = {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    fontWeight: 500,
    display: 'block',
    marginBottom: '0.1rem'
  }

  return (
    <section id="contact" style={{
      padding: '5rem 4rem',
      background: '#0d0d1a',
      borderTop: '1px solid var(--border)'
    }}>
      {/* Header */}
      <h2 style={{
        fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
        textAlign: 'center', marginBottom: '0.5rem',
        background: 'linear-gradient(135deg, var(--accent), var(--primary))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>
        Get In Touch
      </h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1rem' }}>
        Feel free to reach out for collaborations or just a friendly hello
      </p>

      {/* Two Column Layout */}
      <div style={{
        maxWidth: '1050px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1.6fr',
        gap: '4rem',
        alignItems: 'start'
      }}>

        {/* ── LEFT: Contact Info ── */}
        <div>
          <h3 style={{
            fontWeight: 800, fontSize: '1.3rem',
            color: 'var(--text)', marginBottom: '0.5rem'
          }}>
            Contact Information
          </h3>
          {/* Purple underline */}
          <div style={{
            width: '40px', height: '3px',
            background: 'linear-gradient(90deg, var(--primary), var(--accent))',
            borderRadius: '2px', marginBottom: '2.5rem'
          }} />

          {/* Location */}
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2.5rem' }}>
            Vijayawada, India
          </p>


        </div>

        {/* ── RIGHT: Mail Me Form ── */}
        <div>
          <h3 style={{
            fontWeight: 800, fontSize: '1.3rem',
            marginBottom: '0.5rem'
          }}>
            <span style={{ color: 'var(--accent)' }}>Mail</span>{' '}
            <span style={{ color: 'var(--text)' }}>Me</span>
          </h3>
          {/* Purple underline */}
          <div style={{
            width: '40px', height: '3px',
            background: 'linear-gradient(90deg, var(--primary), var(--accent))',
            borderRadius: '2px', marginBottom: '2rem'
          }} />

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text" name="name"
                value={form.name} onChange={handleChange} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
              />
            </div>

            <div>
              <label style={labelStyle}>Subject</label>
              <input
                type="text" name="subject"
                value={form.subject} onChange={handleChange} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
              />
            </div>

            <div>
              <label style={labelStyle}>Your Message</label>
              <textarea
                name="message"
                value={form.message} onChange={handleChange} required
                rows={6}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
              />
            </div>

            {/* Gradient Send Button */}
            <div>
              <button type="submit" style={{
                padding: '0.85rem 2.5rem',
                background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
                color: '#0d0d1a',
                border: 'none',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                boxShadow: '0 4px 20px rgba(167,139,250,0.4)'
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(167,139,250,0.5)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(167,139,250,0.4)' }}
              >
                {sent ? '✅ Sent!' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#contact {
            padding: 4rem 1.5rem !important;
          }
          section#contact > p + div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact
