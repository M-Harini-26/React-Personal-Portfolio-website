export default function Services1() {
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
    backgroundColor: "#f2f2ff",
    borderRadius: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>🤖 AI & ML Projects</h2>

      <div style={cardStyle}>
        <h3>Machine Learning Applications</h3>
        <p>
          Developing predictive models using supervised and unsupervised learning, including plant disease detection, stock predictions, and recommendation systems.
        </p>
      </div>

      <div style={cardStyle}>
        <h3>Deep Learning</h3>
        <p>
          Implementing convolutional neural networks (CNNs), recurrent neural networks (RNNs), and transformers for image and text-based projects.
        </p>
      </div>

      <div style={cardStyle}>
        <h3>AI Integration</h3>
        <p>
          Integrating AI into web and mobile applications to create intelligent and interactive solutions for real-world problems.
        </p>
      </div>
    </div>
  );
}
