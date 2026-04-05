import { seoPages } from "../data/seoPages"

export default function Home() {
  return (
    <div>

      <h1>AI Tools</h1>

      {seoPages.map((p, i) => (
        <div key={i}>
          <a href={`/${p.slug}`}>{p.keyword}</a>
        </div>
      ))}

    </div>
  )
}