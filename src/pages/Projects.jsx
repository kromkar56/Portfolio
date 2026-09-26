const projects = [
  {
    emoji:"💊",
    type:"Web Platform · Vercel",
    title:"MediPort — Medicine Ordering Platform",
    desc:"A user-friendly web platform for browsing and ordering medicines online. Features medicine search, product selection, cart management, and order placement workflows — with a responsive, intuitive interface built for simplicity.",
    stack:["HTML5","CSS3","JavaScript","Responsive Design","Vercel"],
    demo:"https://mediport-hazel.vercel.app/",
    code:"https://github.com/kromkar56/mediport",
    featured: true,
  },
  {
    emoji:"🛒",
    type:"React.js · Frontend",
    title:"Pilgrim E-Commerce Clone",
    desc:"A fully responsive e-commerce website front end built with reusable React components. Includes product listings, cart UI, and navigation — optimised for both desktop and mobile screens.",
    stack:["React.js","Component Architecture","Responsive Design","GitHub Pages"],
    demo:"https://kromkar56.github.io/pilgrim-clone/",
    code:"https://github.com/kromkar56/pilgrim-clone",
  },
  {
    emoji:"📡",
    type:"HTML · CSS · JavaScript",
    title:"Multi-Channel Message Broadcaster",
    desc:"A unified messaging interface supporting multiple communication channels from a single UI. Features form validation, dynamic channel selection, and a fully responsive layout.",
    stack:["HTML5","CSS3","JavaScript","Responsive Design","Form Validation"],
    demo:"https://kromkar56.github.io/Multi-Channel-Message-Broadcaster/",
    code:"https://github.com/kromkar56/Multi-Channel-Message-Broadcaster",
  },
]
export default function Projects() {
  return (
    <section className="section page-in">
      <div className="container">
        <div className="section-tag">Projects</div>
        <h2 className="section-title">Things I've <span className="grad">Built</span></h2>
        <p className="section-sub">Independently built and deployed projects — real code, live on the web.</p>
        <div className="pj-grid">
          {projects.map((p, i) => (
            <div className={`pc${p.featured ? " pc-feat" : ""}`} key={i}>
              <div className="pc-img">{p.emoji}</div>
              <div className="pc-body">
                <div className="pc-type">{p.type}</div>
                <div className="pc-title">{p.title}</div>
                <div className="pc-desc">{p.desc}</div>
                <div className="pc-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                <div className="pc-links">
                  <a className="pla" href={p.demo} target="_blank" rel="noreferrer">🔗 Live Demo</a>
                  <a className="pla" href={p.code} target="_blank" rel="noreferrer">⌥ GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}