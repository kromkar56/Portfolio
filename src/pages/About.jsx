export default function About() {
  const tags = ["React.js","JavaScript (ES6+)","HTML5","CSS3","Bootstrap","Python","Git","GitHub","Chrome DevTools","Node.js (Learning)"]
  return (
    <section className="section page-in">
      <div className="container">
        <div className="section-tag">About Me</div>
        <div className="about-grid">
          <div className="av-wrap">
            <div className="av-box">👨‍💻</div>
            <div className="av-ring" />
            <div className="av-badge">🚀 Open to Work</div>
          </div>
          <div className="about-text">
            <h2>Building Interfaces, <span className="grad">One Component at a Time</span></h2>
            <p>
              I'm <strong>Omkar</strong>, a Frontend Developer and second-year B.Tech Computer Science
              (AI &amp; ML) student based in Patna, Bihar. I've completed two internships at
              Cheerio Technologies, where I built production-ready React.js interfaces used
              across multiple pages.
            </p>
            <p>
              I enjoy writing clean, reusable component code, crafting responsive layouts,
              and debugging cross-browser inconsistencies. I care deeply about the details —
              both in code and in UI.
            </p>
            <p>
              Right now I'm expanding my skill set into full-stack development — learning
              Node.js, Express.js, and SQL alongside my frontend fundamentals. Always building,
              always learning.
            </p>
            <div className="a-tags">{tags.map(t => <span className="a-tag" key={t}>{t}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}