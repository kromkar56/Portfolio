import { useEffect, useRef } from "react"
const cats = [
  {icon:"⚛️", label:"Frontend", items:["React.js","JavaScript (ES6+)","HTML5","CSS3","Bootstrap","Responsive Design","Component Architecture","Mobile-first Design"]},
  {icon:"🛠️", label:"Tools & Workflow", items:["Git","GitHub","Chrome DevTools","Cross-browser Testing","VS Code","GitHub Pages"]},
  {icon:"💻", label:"Languages", items:["JavaScript","HTML5","CSS3","Python"]},
  {icon:"📚", label:"Currently Learning", items:["Node.js","Express.js","MySQL","PostgreSQL","REST APIs","Full-Stack Development"]},
]
const top = [
  {name:"HTML5 / CSS3", pct:90},
  {name:"JavaScript (ES6+)", pct:82},
  {name:"React.js", pct:80},
  {name:"Bootstrap & Responsive Design", pct:78},
  {name:"Git & GitHub", pct:72},
  {name:"Python", pct:60},
]
export default function Skills() {
  const refs = useRef([])
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.style.width = e.target.dataset.pct + "%"
    }), { threshold: 0.3 })
    refs.current.forEach(r => r && obs.observe(r))
    return () => obs.disconnect()
  }, [])
  return (
    <section className="section page-in">
      <div className="container">
        <div className="section-tag">Skills</div>
        <h2 className="section-title">My <span className="grad">Tech Stack</span></h2>
        <p className="section-sub">Technologies and tools I use to build modern web interfaces.</p>
        <div className="sk-grid">
          {cats.map(c => (
            <div className="card" key={c.label}>
              <div className="sk-cat"><span className="sk-ico">{c.icon}</span>{c.label}</div>
              <div className="bdgs">{c.items.map(i => <span className="bdg" key={i}>{i}</span>)}</div>
            </div>
          ))}
        </div>
        <div className="bars" style={{maxWidth:620, marginTop:52}}>
          <h3 style={{fontSize:"1.1rem", fontWeight:700, marginBottom:28}}>Proficiency</h3>
          {top.map((s, i) => (
            <div className="bar-item" key={s.name}>
              <div className="bar-hd">
                <span>{s.name}</span>
                <span style={{color:"var(--ac)"}}>{s.pct}%</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill" data-pct={s.pct} ref={el => refs.current[i] = el} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}