import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendUserEmail } from "../utils/sendEmail";

export default function DetailsForm({ setUser }) {
  const navigate = useNavigate();
  const tempUser = JSON.parse(localStorage.getItem("tempUser"));

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    dob: "",
  });

  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    const { firstName, lastName, country, city, dob } = form;

    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !country?.trim() ||
      !city?.trim() ||
      !dob
    ) {
      return;
    }

    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age < 13 || age > 90) return alert("Age must be 13-90");

    setLoading(true);

    console.log("tempUser:", tempUser);

    const profile = {
      ...form,
      email: tempUser?.email || "", // ✅ FIX
    };

    if (setUser) setUser(profile); // ✅ FIX

    localStorage.setItem("userProfile", JSON.stringify(profile));

    console.log("BEFORE NAVIGATE"); // ✅ DEBUG

    navigate("/chat");
    sendUserEmail(form);
    setLoading(false);
  };
  return (
    <div className="page">
      <div className="card">
        <h2>Complete TechTutor AI Profile</h2>

        <input
          name="firstName" // ✅ FIXED
          placeholder="First Name"
          onChange={handle}
        />
        <input
          name="lastName" // ✅ FIXED 
          placeholder="Last Name"
          onChange={handle}
          required
        />
        <input name="country" placeholder="Country" onChange={handle} />
        <input name="city" placeholder="City" onChange={handle} />

        <div className="dob">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob" // ✅ FIXED
            onChange={handle} // ✅ FIXED
          />
        </div>

        <button className="btn-primary" onClick={submit} disabled={loading}>
          {loading ? "Loading..." : "Continue"} {/* ✅ loader simple */}
        </button>
      </div>
    </div>
  );
}
