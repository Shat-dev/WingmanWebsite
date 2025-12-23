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
            <p className="hero-subtitle">Coming soon to iOS</p>
            <p className="hero-ownership">Wingman is a mobile application developed and operated by Lazul Pty Ltd, an Australian proprietary limited company based in Sydney, Australia.</p>
            <div className="hero-image">
              <img src="/The Physical Approach.png" alt="The Physical Approach" />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © {new Date().getFullYear()} Lazul PTY LTD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

