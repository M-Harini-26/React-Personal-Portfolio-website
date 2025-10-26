export default function AboutUs() {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    margin: "15px auto",
    width: "80%",
    maxWidth: "600px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "default",
  };

  const cardHover = (e, hover) => {
    e.currentTarget.style.transform = hover ? "translateY(-5px)" : "translateY(0)";
    e.currentTarget.style.boxShadow = hover
      ? "0 8px 20px rgba(0,0,0,0.15)"
      : "0 4px 12px rgba(0,0,0,0.1)";
  };

  const sectionStyle = {
    padding: "30px",
    backgroundColor: "#d6d6f7ff",
    borderRadius: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>About Me</h2>

      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3 style={{ color: "#ed9494ff" }}>👩‍💻 Who I Am</h3>
        <p style={{ fontSize: "16px", color: "#555" }}>
          I'm <b>Harini</b>, a passionate Computer Science student who loves exploring
          new technologies and building creative solutions to real-world problems.
        </p>
      </div>

      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3 style={{ color: "#ed9494ff" }}>🎓 Education</h3>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Currently pursuing <b>B.E in Computer Science and Engineering</b>.
        </p>
      </div>

      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3 style={{ color: "#ed9494ff" }}>🧠 Skills</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.8",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <li>🌐 HTML, CSS, JavaScript, React(Basics)</li>
          <li>🐍 Java, Python & ML Basics</li>
          <li>🗄️ MySQL & DBMS Concepts</li>
          <li>💻 Git & GitHub</li>
        </ul>
      </div>
    </div>
  );
}
