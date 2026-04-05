import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function Auth({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!email || !password) return alert("Enter all fields");
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      localStorage.setItem(
        "tempUser",
        JSON.stringify({ email: userCredential.user.email }),
      );
      navigate("/details");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    if (!email || !password) return alert("Enter all fields");
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      localStorage.setItem(
        "tempUser",
        JSON.stringify({ email: userCredential.user.email }),
      );
      navigate("/chat");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem(
        "tempUser",
        JSON.stringify({ email: result.user.email }),
      );
      navigate("/details");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <div className="card">
        <h2>TechTutor AI</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleSignup} disabled={loading}>
          {loading ? <div className="btn-loader"></div> : "Signup"}
        </button>

        <button className="btn-secondary" onClick={handleLogin} disabled={loading}>
          {loading ? <div className="btn-loader"></div> : "Login"}
        </button>
                <div className="or">OR</div> 
        <button className="btn-google" onClick={handleGoogle} disabled={loading}>
          {loading ? <div className="btn-loader"></div> : "Google"}
        </button>
      </div>
    </div>
  );
}
