import { useState } from "react"
export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({name:"",email:"",subject:"",message:""})
  const handle = e => setForm({...form, [e.target.name]: e.target.value})
  const submit = e => {
    e.preventDefault()
    setTimeout(() => setSent(true), 400)
  }
  return (
    <section className="section page-in">
      <div className="container">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">Let's <span className="grad">Work Together</span></h2>
        <p className="section-sub">Have a project, an opportunity, or just want to say hi? I'd love to hear from you.</p>
        <div className="ct-grid">
          <div className="ct-info">
            <h2>Get In <span className="grad">Touch</span></h2>
            <p>I'm actively looking for internship and junior developer opportunities. If you think we'd be a good fit, reach out — I typically reply within 24 hours.</p>
            <div className="ct-item">
              <div className="ct-ico">📧</div>
              <div>
                <div className="ct-lbl">Email</div>
                <div className="ct-val">kromkar56@gmail.com</div>
              </div>
            </div>
            <div className="ct-item">
              <div className="ct-ico">📱</div>
              <div>
                <div className="ct-lbl">Phone</div>
                <div className="ct-val">+91 8603310937</div>
              </div>
            </div>
            <div className="ct-item">
              <div className="ct-ico">📍</div>
              <div>
                <div className="ct-lbl">Location</div>
                <div className="ct-val">Patna, Bihar, India</div>
              </div>
            </div>
            <div className="ct-item">
              <div className="ct-ico">💼</div>
              <div>
                <div className="ct-lbl">Status</div>
                <div className="ct-val" style={{color:"#22c55e"}}>Open to opportunities</div>
              </div>
            </div>
            <div className="soc-row">
              <a className="soc-a" href="https://github.com/kromkar56" target="_blank" rel="noreferrer" title="GitHub">🐙</a>
              <a className="soc-a" href="https://www.linkedin.com/in/omkar-60653237b" target="_blank" rel="noreferrer" title="LinkedIn">💼</a>
              <a className="soc-a" href="mailto:kromkar56@gmail.com" title="Email">📧</a>
            </div>
          </div>
          <form className="ct-form" onSubmit={submit}>
            <div className="f2">
              <div className="fg"><label>Name</label><input name="name" value={form.name} onChange={handle} placeholder="Your Name" required /></div>
              <div className="fg"><label>Email</label><input type="email" name="email" value={form.email} onChange={handle} placeholder="your@email.com" required /></div>
            </div>
            <div className="fg"><label>Subject</label><input name="subject" value={form.subject} onChange={handle} placeholder="Internship / Collaboration" required /></div>
            <div className="fg"><label>Message</label><textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about the opportunity or project..." required /></div>
            <button type="submit" className="btn btn-p" style={{width:"100%",justifyContent:"center"}}>Send Message 🚀</button>
            <div className={`f-ok${sent ? " show" : ""}`}>✅ Message sent! I'll get back to you within 24 hours.</div>
          </form>
        </div>
      </div>
    </section>
  )
}