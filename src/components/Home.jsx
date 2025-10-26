import { Link } from "react-router-dom";

export default function Home() {
  const sectionStyle = {
    padding: "40px",
    margin: "20px 0",
    borderRadius: "30px",
    backgroundColor: "rgba(189, 211, 241, 1)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const skillStyle = {
    display: "inline-block",
    margin: "8px 12px",
    padding: "6px 12px",
    borderRadius: "20px",
    backgroundColor: "#ed9494ff",
    color: "#fff",
    fontWeight: "600",
    fontSize: "14px",
  };

  const buttonStyle = {
    margin: "0 10px",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#ed9494ff",
    color: "#fff",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "600",
  };

  const socialLinkStyle = {
    textDecoration: "none",
    color: "#2c2626ff",
    fontWeight: "600",
  };

  return (
    <div style={{ padding: "40px" }}>

      <div style={sectionStyle}>
        <h2>Hi, I'm <span style={{ color: "#18191A" }}>Harini</span> 👋</h2>
        <h4>Computer Science Student | IEEE Member | AI & Web Development Enthusiast</h4>
        <p>
          I love building clean and creative web applications that make everyday
          tasks easier. Welcome to my portfolio!
        </p>
        <div style={{ marginTop: "15px" }}>
          <Link to="/profile" style={buttonStyle}>
            View Projects
          </Link>
          <Link to="/contact" style={buttonStyle}>
            Contact Me
          </Link>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3>🌟 My Skills</h3>
        <div style={{ marginTop: "15px" }}>
          <span style={skillStyle}>HTML</span>
          <span style={skillStyle}>CSS</span>
          <span style={skillStyle}>JavaScript</span>
          <span style={skillStyle}>React.js</span>
          <span style={skillStyle}>Java</span>
          <span style={skillStyle}>Machine Learning</span>
          <span style={skillStyle}>MySQL</span>
        </div>
      </div>

      <div style={sectionStyle}>
        <h3>🚀 Highlights</h3>
        <ul style={{ textAlign: "left", display: "inline-block", fontSize: "16px", lineHeight: "1.8" }}>
          <li>🌿 GreenGuard – AI Plant Disease Detection Web App</li>
          <li>🏥 NewLife Hospital Appointment System – Web-based Appointment Management</li>
          <li>🏸 Online Sports Court Booking System – Real-time Court Booking</li>
          <li>🏆 National Level Hackathon-Finalist(NASSCOM) – Achiever Award</li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h3>Connect With Me</h3>
        <p>Let's collaborate on amazing projects or just say hi!</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "10px" }}>
          <a href="https://www.linkedin.com/in/harini-profile" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>LinkedIn</a>
          <a href="https://github.com/harini-profile" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>GitHub</a>
        </div>
      </div>
    </div>
  );
}
