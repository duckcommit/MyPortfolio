const links = [
  { icon: '✉', label: 'official.vysh@gmail.com', href: 'mailto:official.vysh@gmail.com' },
  { icon: 'in', label: 'LinkedIn',        href: '#' },
  { icon: '⌥', label: 'Resume PDF',      href: '#' },
  { icon: '◈', label: 'GitHub',           href: '#' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-label">Get in touch</div>
        <h2 className="contact-title">
          Let&apos;s build<br /><em>something great.</em>
        </h2>
        <p className="contact-sub">
          I&apos;m actively looking for PM and Associate PM roles where I can
          bring a builder&apos;s instinct and a designer&apos;s eye. If that
          sounds useful to your team, let&apos;s talk.
        </p>
        <div className="contact-links">
          {links.map(({ icon, label, href }) => (
            <a href={href} className="contact-link" key={label}>
              <span className="contact-link-icon">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
