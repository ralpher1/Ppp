import './About.css'

function About() {
  return (
    <div className="about">
      <h1>About Ppp</h1>
      <p className="about-tagline">A modern React app built with Vite</p>

      <div className="about-cards">
        <div className="about-card">
          <h3>React 19</h3>
          <p>Built on the latest React with hooks, concurrent features, and modern patterns.</p>
        </div>
        <div className="about-card">
          <h3>Vite 7</h3>
          <p>Lightning-fast dev server and optimized builds with native ES modules.</p>
        </div>
        <div className="about-card">
          <h3>Client Routing</h3>
          <p>Smooth navigation powered by React Router with zero page reloads.</p>
        </div>
      </div>

      <p className="about-footer">
        Made with care. Check out the <a href="https://github.com" target="_blank" rel="noopener noreferrer">source</a>.
      </p>
    </div>
  )
}

export default About
