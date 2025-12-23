import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="logo">Wingman</h1>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container">
            <h2 className="hero-title">Wingman</h2>
            <div className="about-section">
              <h3 className="about-heading">About</h3>
              <p className="about-text">Wingman helps men build real-world social confidence through structured lessons and daily practice.</p>
            </div>
            <div className="hero-image">
              <img src="/The Physical Approach.png" alt="The Physical Approach" />
            </div>
            <p className="hero-subtitle">Coming soon to iOS</p>
            <p className="hero-ownership">Wingman is a mobile application developed and operated by Lazul Pty Ltd, an Australian proprietary limited company based in Sydney, Australia.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="mailto:support@getwingman.app" className="footer-link">support@getwingman.app</a>
              <span className="footer-separator">•</span>
              <a href="https://www.instagram.com/app.wingman" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
            </div>
            <p className="footer-text">
              © {new Date().getFullYear()} Lazul PTY LTD. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

