export default function Message({ role, text }) {
  return (
    <div className={role === "user" ? "user" : "ai"}>
      {text}
    </div>
  )
}