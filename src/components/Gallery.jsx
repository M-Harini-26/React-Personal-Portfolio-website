import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image4 from "../assets/image4.png";

function ImageCard({ src, title, description }) {
  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "15px",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const hoverEffect = (e, hover) => {
    e.currentTarget.style.transform = hover ? "translateY(-5px)" : "translateY(0)";
    e.currentTarget.style.boxShadow = hover
      ? "0 8px 20px rgba(0,0,0,0.15)"
      : "0 4px 12px rgba(0,0,0,0.1)";
  };

  const imgStyle = {
    height: "200px",
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => hoverEffect(e, true)}
      onMouseLeave={(e) => hoverEffect(e, false)}
    >
      <img src={src} alt={title} style={imgStyle} />
      <h3 style={{ marginTop: "15px", color: "#333" }}>{title}</h3>
      <p style={{ color: "#555", fontSize: "14px" }}>{description}</p>
    </div>
  );
}
export default function Gallery() {
  const galleryContainer = {
    padding: "40px",
    backgroundColor: "#d6d6f7ff",
    borderRadius: "20px",
    minHeight: "100vh",
    textAlign: "center",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  return (
    <div style={galleryContainer}>
      <h2 style={{ color: "#333", marginBottom: "30px" }}>My Gallery</h2>

      <div style={gridStyle}>
        <ImageCard
          src={image1}
          title="GreenGuard Project"
          description="AI-powered leaf disease detection system."
        />
        <ImageCard
          src={image2}
          title="NewLife Hospital"
          description="Web-based hospital appointment management."
        />
        <ImageCard
          src={image4}
          title="Sports Court Booking System"
          description="Online-based Sports court booking system."
        />  
      </div>
    </div>
  );
}
