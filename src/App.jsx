import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Profile from "./components/Profile.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Navbar from "./components/Navbar.jsx";
import Services1 from "./components/Services1.jsx";
import Services2 from "./components/Services2.jsx";
import Services3 from "./components/Services3.jsx";
import Register from "./components/Register.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          textAlign: "center",
          fontFamily: "Times New Roman",
          backgroundColor: "#e2e9f6ff",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Navbar />

        <main style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service1" element={<Services1 />} />
            <Route path="/service2" element={<Services2 />} />
            <Route path="/service3" element={<Services3 />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
