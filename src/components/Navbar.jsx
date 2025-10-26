import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const [openServices, setOpenServices] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesRef = useRef();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setOpenServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        style={{
          backgroundColor: "#ed9494ff",
          borderRadius: "10px",
          margin: "10px",
          padding: "10px 20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          flexWrap: "wrap",
        }}
      >
       
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "linear-gradient(135deg,#f8c6c6,#f2f0ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              color: "#150b0fff",
              fontSize: "20px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            title="Harini Portfolio"
          >
            H
          </div>

          <div style={{ display: "flex", flexDirection: "column", color: "#2c2626ff" }}>
            <span style={{ fontWeight: "700", fontSize: "17px" }}>Harini’s Portfolio</span>
            <span style={{ fontSize: "12px", color: "#4b4b4bff" }}>Personal Portfolio</span>
          </div>
        </Link>

      
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            cursor: "pointer",
            gap: "5px",
          }}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>

      
        <nav
          className={`nav-links ${menuOpen ? "open" : ""}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            position: "relative",
            flexWrap: "wrap",
          }}
        >
          <HoverLink to="/">Home</HoverLink>
          <HoverLink to="/about">About</HoverLink>

          <div style={{ position: "relative" }} ref={servicesRef}>
            <Link
              to="/services"
              style={{
                ...linkStyle,
                background: openServices ? "#cf7f7f" : "transparent",
                border: "none",
                cursor: "pointer",
                display: "inline-block",
              }}
              onClick={() => setOpenServices((s) => !s)}
            >
              Services ▾
            </Link>

            {openServices && (
              <div
                style={{
                  position: "absolute",
                  top: "38px",
                  left: 0,
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                  padding: "8px",
                  minWidth: "180px",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  zIndex: 1000,
                }}
              >
                <HoverDropdown to="/service1" closeDropdown={() => setOpenServices(false)}>
                  AI & ML Projects
                </HoverDropdown>
                <HoverDropdown to="/service2" closeDropdown={() => setOpenServices(false)}>
                  Web Development
                </HoverDropdown>
                <HoverDropdown to="/service3" closeDropdown={() => setOpenServices(false)}>
                  Research & Innovation
                </HoverDropdown>
              </div>
            )}
          </div>

          <HoverLink to="/profile">Projects</HoverLink>
          <HoverLink to="/gallery">Gallery</HoverLink>
          <HoverLink to="/contact">Contact</HoverLink>

          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <HoverLink to="/register">Register</HoverLink>
            <img
              src={user.isLoggedIn && user.avatarUrl ? user.avatarUrl : "/avatar.png"}
              alt="User Avatar"
              onError={(e) => {
              e.currentTarget.src = "/avatar.png";            
              }}
              style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              cursor: "default",
              }}
             title={user.isLoggedIn && user.name ? user.name : "Guest"}
            /> 
            <div
              style={{
                fontWeight: 600,
                fontSize: "14px",
                color: "#2c2626ff",
                minWidth: "70px",
                textAlign: "left",
              }}
            >
              {user.isLoggedIn && user.name ? user.name : "Guest"}
            </div>
          </div>
        </nav>
      </header>

    
      <style>{`
        @media (max-width: 768px) {
          .menu-toggle {
            display: flex !important;
          }
          .menu-toggle .bar {
            width: 25px;
            height: 3px;
            background: #2c2626ff;
            border-radius: 2px;
            transition: 0.3s;
          }
          .nav-links {
            display: none !important;
            flex-direction: column !important;
            width: 100%;
            background: #fbeaea;
            border-radius: 8px;
            margin-top: 10px;
            padding: 10px 0;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          .nav-links.open {
            display: flex !important;
          }
          .nav-links a {
            text-align: center;
            padding: 10px 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

function HoverLink({ to, children }) {
  const hoverEffect = (e, hover) => {
    e.currentTarget.style.color = hover ? "#ffffff" : "#2c2626ff";
    e.currentTarget.style.backgroundColor = hover ? "#cf7f7f" : "transparent";
    e.currentTarget.style.transform = hover ? "translateY(-2px)" : "translateY(0)";
  };
  return (
    <Link
      to={to}
      style={{ ...linkStyle, position: "relative" }}
      onMouseEnter={(e) => hoverEffect(e, true)}
      onMouseLeave={(e) => hoverEffect(e, false)}
    >
      {children}
    </Link>
  );
}

function HoverDropdown({ to, children, closeDropdown }) {
  const style = {
    display: "block",
    padding: "6px 8px",
    color: "#333",
    textDecoration: "none",
    fontSize: "14px",
    borderRadius: "5px",
    transition: "0.3s",
  };
  return (
    <Link
      to={to}
      style={style}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f3c2c2")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      onClick={closeDropdown}
    >
      {children}
    </Link>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#2c2626ff",
  fontWeight: "600",
  padding: "6px 12px",
  borderRadius: "6px",
  transition: "0.3s ease",
  cursor: "pointer",
};

export default Navbar;
