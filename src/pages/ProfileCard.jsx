import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function ProfileCard({ onClose, setUser }) {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("userProfile"));

  if (!data) {
    return (
      <div className="profile-overlay">
        <div className="profile-card">
          <p>No data found ❌</p>
        </div>
      </div>
    );
  }

  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("userProfile");
    setUser(null);
    navigate("/auth");
  };

  return (
    <div className="profile-overlay">
      <div className="profile-card">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>

        <h2>
          {data.first} {data.last}
        </h2>

        <p>
          <b>Email:</b> {data.email}
        </p>
        <p>
          <b>Country:</b> {data.country}
        </p>
        <p>
          <b>Region:</b> {data.region}
        </p>
        <p>
          <b>City:</b> {data.city}
        </p>
        <p>
          <b>DOB:</b> {data.dob}
        </p>

        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
