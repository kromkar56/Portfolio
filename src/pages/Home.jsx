import { useNavigate } from "react-router-dom"
export default function Home() {
  const nav = useNavigate()
  return (
    <section className="hero">
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="hero-body container">
        <div className="hero-pill"><span className="dot" /> Available for opportunities</div>
        <h1 className="hero-name">Hi, I'm <span className="grad">Omkar</span> 👋</h1>
        <p className="hero-role">Frontend Developer · <strong>React.js &amp; Modern Web</strong></p>
        <p className="hero-desc">
          Second-year CS (AI &amp; ML) student with two internships building production
          React.js interfaces. Comfortable with component architecture, responsive layouts,
          and cross-browser UI — and actively growing into full-stack development.
        </p>
        <div className="hero-btns">
          <button className="btn btn-p" onClick={() => nav("/projects")}>View My Work →</button>
          <button className="btn btn-o" onClick={() => nav("/contact")}>Let's Talk</button>
        </div>
        <div className="hero-stats">
          <div><div className="stat-n">2</div><div className="stat-l">Internships</div></div>
          <div><div className="stat-n">3</div><div className="stat-l">Live Projects</div></div>
          <div><div className="stat-n">9.15</div><div className="stat-l">GPA</div></div>
          <div><div className="stat-n">5+</div><div className="stat-l">Technologies</div></div>
        </div>
      </div>
      <div className="scroll-cue"><div className="mouse" />Scroll</div>
    </section>
  )
}