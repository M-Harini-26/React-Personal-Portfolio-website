import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, loginUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      
      const user = users.find((u) => u.email === form.email && u.password === form.password);
      if (user) {
        dispatch(loginUser({ name: user.name, email: user.email }));
        navigate("/"); 
      } else {
        alert("Invalid credentials!");
      }
    } else {
      
      dispatch(signupUser(form));
      alert("Signup successful! Please login.");
      setIsLogin(true);
      setForm({ name: "", email: "", password: "" });
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <form
        style={{ maxWidth: "400px", margin: "20px auto", textAlign: "left" }}
        onSubmit={handleSubmit}
      >
        {!isLogin && (
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              style={{ width: "100%", padding: "6px", margin: "6px 0" }}
              required
            />
          </label>
        )}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px", margin: "6px 0" }}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px", margin: "6px 0" }}
            required
          />
        </label>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            backgroundColor: "#ed9494ff",
            border: "none",
            color: "#fff",
            borderRadius: "5px",
          }}
        >
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>

      <p style={{ marginTop: "10px" }}>
        {isLogin ? "New user?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{ border: "none", background: "none", color: "#ed9494ff", cursor: "pointer" }}
        >
          {isLogin ? "Signup" : "Login"}
        </button>
      </p>
    </div>
  );
}

