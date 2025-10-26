export default function Services3() {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "700px",
    textAlign: "left",
  };

  const sectionStyle = {
    padding: "30px",
    backgroundColor: "#f2fff2",
    borderRadius: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>🧠 Research & Innovation</h2>

      <div style={cardStyle}>
        <h3>Academic Research</h3>
        <p>
          Conducting research in AI, Machine Learning, and Image Processing to explore new algorithms and methods.
        </p>
      </div>

      <div style={cardStyle}>
        <h3>Innovation Projects</h3>
        <p>
          Designing creative projects combining technology and problem-solving skills to develop innovative applications.
        </p>
      </div>

      <div style={cardStyle}>
        <h3>Publications & Papers</h3>
        <p>
          Writing and presenting research papers at conferences and workshops to share insights and findings.
        </p>
      </div>
    </div>
  );
}
