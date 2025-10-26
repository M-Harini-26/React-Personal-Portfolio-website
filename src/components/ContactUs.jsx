export default function ContactUs() {
  const containerStyle = {
    padding: "40px",
    backgroundColor: "#b5dfe8ff",
    borderRadius: "20px",
    minHeight: "40vh",
    maxWidth: "700px",
    margin: "30px auto",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Times New Roman",
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "20px",
    fontSize: "28px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#130202ff",
    marginBottom: "15px",
  };

  const linkStyle = {
    color: "#df7b65ff",
    textDecoration: "none",
    fontWeight: "600",
    transition: "0.3s",
  };

  const linkHover = (e, hover) => {
    e.currentTarget.style.color = hover ? "#072ce2ff" : "#ed9494ff";
    e.currentTarget.style.transform = hover ? "translateY(-2px)" : "translateY(0)";
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Me</h2>
      <p style={textStyle}>
        Feel free to reach out to me via email or connect with me on my social platforms!
      </p>

      <p style={textStyle}>
        📧 <b>Email:</b>{" "}
        <a
          href="mailto:mharini2606@gmail.com"
          style={linkStyle}
          onMouseEnter={(e) => linkHover(e, true)}
          onMouseLeave={(e) => linkHover(e, false)}
        >
          mharini2606@gmail.com
        </a>
      </p>

      <p style={textStyle}>
        🔗 <b>LinkedIn:</b>{" "}
        <a
          href="http://www.linkedin.com/in/harini-matheshwaran"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => linkHover(e, true)}
          onMouseLeave={(e) => linkHover(e, false)}
        >
          harini-matheshwaran
        </a>
      </p>

      <p style={textStyle}>
        💻 <b>GitHub:</b>{" "}
        <a
          href="https://github.com/M-Harini-26"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseEnter={(e) => linkHover(e, true)}
          onMouseLeave={(e) => linkHover(e, false)}
        >
          M-Harini-26
        </a>
      </p>
    </div>
  );
}
