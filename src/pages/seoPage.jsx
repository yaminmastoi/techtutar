import { useState } from "react"
import { seoPages } from "../data/seoPages"

export default function SeoPage() {

  const path = window.location.pathname.replace("/", "")
  const page = seoPages.find(p => p.slug === path)

  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  if (!page) return <h1>Page Not Found</h1>

  const generate = () => {
    setOutput(`🔥 ${input} | ${page.keyword} | Dream Big 💯`)
  }

  return (
    <div className="tool">

      <h1>{page.keyword}</h1>

      {/* SEO meta */}
      <title>{page.keyword} Generator Free</title>

      <div className="ad">Ad</div>

      <input
        placeholder={`Enter text for ${page.keyword}`}
        onChange={(e)=>setInput(e.target.value)}
      />

      <button onClick={generate}>Generate</button>

      <p>{output}</p>

      <div className="ad">Ad</div>

    </div>
  )
}