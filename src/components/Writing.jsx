const posts = [
  {
    num: '01',
    title: "Why Duolingo's streak mechanic is both brilliant and broken",
    desc: 'A product teardown of one of the most effective — and controversial — retention mechanisms in consumer apps today.',
    cta: 'Read teardown →',
  },
  {
    num: '02',
    title: "How I'd redesign Google Pay's split bill experience",
    desc: "A spec exercise: user stories, tradeoffs, and a proposed solution for one of the most frustrating flows in India's top UPI app.",
    cta: 'Read spec →',
  },
  {
    num: '03',
    title: 'What Flutter taught me about shipping fast without shipping ugly',
    desc: "Speed and quality aren't opposites. Three lessons from building production Flutter apps that apply directly to product decision-making.",
    cta: 'Read essay →',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="writing-section">
      <div className="section-label">PM Thinking</div>
      <h2 className="section-title">
        How I think<br />about product.
      </h2>

      <div className="writing-grid">
        {posts.map(({ num, title, desc, cta }) => (
          <a href="#" className="writing-card" key={num}>
            <div className="writing-num">{num}</div>
            <div className="writing-title">{title}</div>
            <div className="writing-desc">{desc}</div>
            <div className="writing-read">{cta}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
