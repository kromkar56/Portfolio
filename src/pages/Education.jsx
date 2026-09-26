const edu = [
  {
    date:"2025 – Expected Jul 2029",
    title:"B.Tech, Computer Science (AI & ML)",
    sub:"Medhavi Skills University, Sikkim",
    desc:"GPA: 9.15 · Focused on Artificial Intelligence, Machine Learning, Data Structures, and Web Development.",
  },
]
const exp = [
  {
    date:"May 2026 – Jun 2026",
    title:"Frontend Developer Intern",
    sub:"Cheerio Technologies Pvt. Ltd., Patna",
    desc:"Built reusable React.js UI components adopted across multiple pages, refactored frontend architecture for maintainability, and implemented responsive layouts for desktop and mobile.",
  },
  {
    date:"Nov 2025 – Jan 2026",
    title:"Project Intern",
    sub:"Cheerio Technologies Pvt. Ltd., Patna",
    desc:"Built responsive interfaces with HTML, CSS & JavaScript. Assisted in UI/UX improvements and fixed cross-browser frontend bugs.",
  },
]
const certs = [
  {emo:"🟡", name:"JavaScript Essentials 1", issuer:"Cisco Networking Academy / JS Institute", year:"Aug 2026"},
]
export default function Education() {
  return (
    <section className="section page-in">
      <div className="container">
        <div className="section-tag">Education, Experience & Certifications</div>
        <h2 className="section-title">My <span className="grad">Journey</span></h2>
        <p className="section-sub">Where I've studied, where I've worked, and what I've earned along the way.</p>

        <div className="edu-grid">
          <div>
            <h3 style={{fontSize:"1.05rem",fontWeight:700,marginBottom:24,color:"var(--ts)"}}>🎓 Education</h3>
            <div className="tl">
              {edu.map((e, i) => (
                <div className="tl-item" key={i}>
                  <div className="tl-dot" />
                  <div className="tl-date">{e.date}</div>
                  <div className="tl-title">{e.title}</div>
                  <div className="tl-sub">{e.sub}</div>
                  <div className="tl-desc">{e.desc}</div>
                </div>
              ))}
            </div>

            <h3 style={{fontSize:"1.05rem",fontWeight:700,marginBottom:24,marginTop:40,color:"var(--ts)"}}>💼 Experience</h3>
            <div className="tl">
              {exp.map((e, i) => (
                <div className="tl-item" key={i}>
                  <div className="tl-dot" />
                  <div className="tl-date">{e.date}</div>
                  <div className="tl-title">{e.title}</div>
                  <div className="tl-sub">{e.sub}</div>
                  <div className="tl-desc">{e.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{fontSize:"1.05rem",fontWeight:700,marginBottom:24,color:"var(--ts)"}}>🏅 Certifications</h3>
            <div className="cert-list">
              {certs.map((c, i) => (
                <div className="cert-row" key={i}>
                  <div className="cert-emo">{c.emo}</div>
                  <div>
                    <div className="cert-nm">{c.name}</div>
                    <div className="cert-is">{c.issuer}</div>
                    <span className="cert-yr">{c.year}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="card" style={{marginTop:24}}>
              <div style={{fontSize:"1.5rem",marginBottom:10}}>🎯</div>
              <div style={{fontWeight:700,marginBottom:8}}>Currently Pursuing</div>
              <div style={{color:"var(--ts)",fontSize:".88rem",lineHeight:1.7}}>
                Actively learning <strong style={{color:"var(--tp)"}}>Node.js, Express.js, and SQL</strong> to transition into full-stack development.
                Building side projects to apply concepts in real-world scenarios.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}