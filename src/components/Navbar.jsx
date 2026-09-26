import { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
const links = [{to:"/",label:"Home"},{to:"/about",label:"About"},{to:"/skills",label:"Skills"},{to:"/projects",label:"Projects"},{to:"/education",label:"Education"}]
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", s)
    return () => window.removeEventListener("scroll", s)
  }, [])
  const close = () => setOpen(false)
  return (<>
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <div className="logo" onClick={() => navigate("/")}>&lt;<em>dev</em> /&gt;</div>
        <ul className="nav-ul">
          {links.map(l => (<li key={l.to}><NavLink to={l.to} className={({isActive}) => isActive ? "active" : ""} end={l.to === "/"}>{l.label}</NavLink></li>))}
          <li><NavLink to="/contact" className="nav-cta">Contact</NavLink></li>
        </ul>
        <button className="ham" onClick={() => setOpen(!open)} aria-label="Menu"><span/><span/><span/></button>
      </div>
    </nav>
    <div className={`mob ${open ? "open" : ""}`}>
      {[...links,{to:"/contact",label:"Contact"}].map(l => (<NavLink key={l.to} to={l.to} onClick={close} end={l.to === "/"}>{l.label}</NavLink>))}
    </div>
  </>)
}