import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Home() {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' })
  }

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
            <h1 className="hero-title">Wingman</h1>
            <p className="hero-value-prop">Build real-world social confidence through structured lessons and daily practice.</p>
            <div className="hero-ctas">
              <a href="#" className="cta-primary">Join the Waitlist</a>
              <button onClick={scrollToFeatures} className="cta-secondary">View Features</button>
            </div>
            <p className="hero-compliance">Subscription required for full access. Cancel anytime.</p>
            <div className="hero-image">
              <img src="/The Physical Approach.png" alt="The Physical Approach" />
            </div>
            <p className="hero-ownership">Wingman is a mobile application developed and operated by Lazul Pty Ltd, an Australian proprietary limited company based in Sydney, Australia.</p>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2 className="section-title">Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3 className="feature-title">Daily Practice</h3>
                <ul className="feature-list">
                  <li>Users get a fresh set of questions every day</li>
                  <li>Reinforces key concepts through repetition</li>
                  <li>Builds consistent momentum with streak style progress</li>
                  <li>Focused on practical knowledge, not motivation</li>
                </ul>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Log Encounter Modal</h3>
                <ul className="feature-list">
                  <li>Users can log real world social encounters in a simple modal</li>
                  <li>Tracks attempts and reflections over time</li>
                  <li>Profile page shows historical approaches and progress trends</li>
                  <li>Private by default</li>
                </ul>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">100+ Lessons Library</h3>
                <ul className="feature-list">
                  <li>Lessons across Mindset & Foundations</li>
                  <li>Approach Readiness</li>
                  <li>Conversation Skills</li>
                  <li>Flirting Skills</li>
                  <li>Mastery & Integration</li>
                  <li>Delivered as short, structured lessons designed for daily use</li>
                </ul>
              </div>
              <div className="feature-card">
                <h3 className="feature-title">Practice Games</h3>
                <ul className="feature-list">
                  <li>Scenario based role play interactions</li>
                  <li>Real life examples with choices and feedback</li>
                  <li>Helps users apply lessons in context</li>
                  <li>Designed to reduce hesitation through rehearsal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <h2 className="section-title">How it works</h2>
            <div className="steps">
              <div className="step">
                <h3 className="step-title">Learn</h3>
                <p className="step-description">Lessons and daily practice</p>
              </div>
              <div className="step">
                <h3 className="step-title">Apply</h3>
                <p className="step-description">Practice games and real world encounters</p>
              </div>
              <div className="step">
                <h3 className="step-title">Track</h3>
                <p className="step-description">Profile progress history and insights</p>
              </div>
            </div>
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

