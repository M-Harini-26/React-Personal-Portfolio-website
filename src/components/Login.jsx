import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ name, email }));
    navigate("/"); 
  };

  return (
    <div style={{ padding: "50px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
