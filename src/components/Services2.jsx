export default function Services2() {
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
    backgroundColor: "#f9f2f2",
    borderRadius: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>💻 Web Development</h2>

      <div style={cardStyle}>
        <h3>Front-End Development</h3>
        <p>
          Creating responsive and interactive user interfaces using HTML, CSS, JavaScript, React, and Bootstrap.
        </p>
      </div>

      <div style={cardStyle}>
        <h3>Back-End Development</h3>
        <p>
          Building scalable server-side applications using Node.js, Express, and database integration (MySQL, MongoDB).
        </p>
      </div>

      <div style={cardStyle}>
        <h3>Full-Stack Projects</h3>
        <p>
          Developing end-to-end web applications with authentication, dynamic content, API integration, and deployment.
        </p>
      </div>
    </div>
  );
}
