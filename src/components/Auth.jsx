
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup, login } from "../features/userSlice";

export default function Auth() {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupData.name || !signupData.email || !signupData.password) {
      setError("All fields are required");
      return;
    }
    dispatch(signup(signupData));
    setLoginData({ email: signupData.email, password: signupData.password });
    setIsLogin(true);
    setError("");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
    setError("Invalid credentials or please signup first");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "40px auto", textAlign: "left", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        <button onClick={() => setIsLogin(true)} style={tabStyle(isLogin)}>Login</button>
        <button onClick={() => setIsLogin(false)} style={tabStyle(!isLogin)}>Signup</button>
      </div>

      {isLogin ? (
        <form onSubmit={handleLoginSubmit}>
          <label>Email:</label>
          <input type="email" value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} style={inputStyle} />
          <label>Password:</label>
          <input type="password" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} style={inputStyle} />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={submitBtnStyle}>Login</button>
        </form>
      ) : (
        <form onSubmit={handleSignupSubmit}>
          <label>Name:</label>
          <input type="text" value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })} style={inputStyle} />
          <label>Email:</label>
          <input type="email" value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} style={inputStyle} />
          <label>Password:</label>
          <input type="password" value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })} style={inputStyle} />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" style={submitBtnStyle}>Signup</button>
        </form>
      )}
    </div>
  );
}

const tabStyle = (active) => ({
  padding: "10px 20px",
  background: active ? "#ed9494ff" : "#f0f0f0",
  color: active ? "#fff" : "#333",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
});

const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "6px 0 12px 0",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const submitBtnStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#ed9494ff",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
