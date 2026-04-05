import { useState, useEffect, useRef } from "react";
import { generateReply } from "../utils/replyGenerator";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const aiText = generateReply(input);

      const aiMsg = {
        text: aiText,
        sender: "ai",
      };

      setMessages((prev) => [...prev, aiMsg]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const logout = () => {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("tempUser");
    navigate("/");
  };
  return (
    <div
      className={`chat-page ${messages.length === 0 ? "empty-chat" : "active"}`}
    >
      <div className="sidebar">
        <h2>TechTutor AI</h2>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="chat-main">
        <div className="top-bar">
          Powered By:{" "}
          <a href="https://mastoitechsolution.com/">Mastoi Tech Solution</a>
        </div>

        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={msg.sender === "user" ? "user-msg" : "ai-msg"}
            >
              {msg.text}
            </div>
          ))}

          {loading && <div className="ai-msg typing"></div>}

          <div ref={chatEndRef}></div>
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Ask Mastoi AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button onClick={sendMessage}>➤</button>
          {/* <div className="chat-disclaimer">
            ⚠ Mastoi AI can make mistakes. Verify important information.
          </div> */}
        </div>
      </div>
    </div>
  );
}
