export default function Services() {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    margin: "20px auto",
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
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>Our Services</h2>

    
      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3 style={{ color: "#ed9494ff" }}>🤖 AI & ML Projects</h3>
        <p>
          Developing intelligent solutions using Machine Learning and AI for
          real-world applications like plant disease detection and data
          prediction.
        </p>
      </div>

     
      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3 style={{ color: "#ed9494ff" }}>💻 Web Development</h3>
        <p>
          Designing and building responsive, interactive, and modern web
          applications using technologies like HTML, CSS, JavaScript, and React.
        </p>
      </div>

     
      <div
        style={cardStyle}
        onMouseEnter={(e) => cardHover(e, true)}
        onMouseLeave={(e) => cardHover(e, false)}
      >
        <h3 style={{ color: "#ed9494ff" }}>🧠 Research & Innovation</h3>
        <p>
          Exploring innovative ideas through academic projects, research papers,
          and experiments in AI, data science, and image processing.
        </p>
      </div>
    </div>
  );
}
