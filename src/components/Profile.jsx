export default function Profile() {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "700px",
    textAlign: "left",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "default",
  };

  const cardHover = (e, hover) => {
    e.currentTarget.style.transform = hover ? "translateY(-5px)" : "translateY(0)";
    e.currentTarget.style.boxShadow = hover
      ? "0 8px 20px rgba(0,0,0,0.15)"
      : "0 4px 12px rgba(0,0,0,0.1)";
  };

  return (
    <div style={{ padding: "40px", backgroundColor: "#f4d7dcff", borderRadius: "20px", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>My Projects</h2>

      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3>🌿 GreenGuard</h3>
        <p>AI-powered plant disease detection using image processing and machine learning.</p>
      </div>


      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3>🏥 NewLife Hospital Appointment System</h3>
        <p>Web-based system for managing doctor-patient appointments efficiently.</p>
      </div>


      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3>🏸 Online Sports Court Booking System</h3>
        <p>Book sports courts online with real-time availability and reservation management.</p>
      </div>

  
      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3>💡 Portfolio Website</h3>
        <p>Personal portfolio website showcasing projects, skills, and contact information.</p>
      </div>
    </div>
  );
}
