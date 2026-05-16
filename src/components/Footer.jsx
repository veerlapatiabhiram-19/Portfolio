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
      
      
        
      
    </footer>
  )
}

export default Footer
