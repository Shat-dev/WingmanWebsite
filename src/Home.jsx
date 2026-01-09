import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">Wingman</Link>
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
            <p className="hero-subtitle">Coming soon</p>
            <p className="hero-ownership">Wingman is a mobile application developed and operated by Lazul Pty Ltd, an Australian proprietary limited company based in Sydney, Australia.</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <a href="mailto:support@getwingman.app?subject=Wingman Support&body=Please describe your issue and include your device iOS version:" className="footer-link">support@getwingman.app</a>
              <span className="footer-separator">•</span>
              <a href="https://www.instagram.com/app.wingman" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
              <span className="footer-separator">•</span>
              <a href="https://www.tiktok.com/@app.wingman" target="_blank" rel="noopener noreferrer" className="footer-link">TikTok</a>
              <span className="footer-separator">•</span>
              <a href="https://x.com/trywingmanapp" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
            </div>
            <div className="footer-legal-links">
              <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
              <span className="footer-separator">•</span>
              <Link to="/terms-and-conditions" className="footer-link">Terms & Conditions</Link>
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

export default Home

