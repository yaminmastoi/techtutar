import { useState, useEffect, useRef } from "react";
import { generateReply } from "../utils/replyGenerator";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2>TechTutor AI</h2>

        {/* <button className="logout-btn" onClick={logout}>
          Logout
        </button>*/}
      </div>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      <div className="chat-main">
        <div className="top-bar">
          Powered By:{" "}
          <a href="https://mastoitechsolution.com/">Mastoi Tech Solution</a>
          <button className="logout-icon-btn" onClick={logout} title="Logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V4"
              />
            </svg>
          </button>
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
            placeholder="Ask TechTutar AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

          <button onClick={sendMessage}>➤</button>
        </div>
      </div>
    </div>
  );
}
