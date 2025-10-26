export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",              
        padding: "12px 0",           
        backgroundColor: "#ed9494ff",
        textAlign: "center",         
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.05)",
        position: "fixed",          
        bottom: 0,                   
        left: 0,                      
        right: 0,                     
        fontFamily: "Times New Roman",
        fontSize: "12px",           
        color: "#333",
        zIndex: 1000,                
      }}
    ><h2>
      © {new Date().getFullYear()} Harini | Thanks for visiting
      </h2>
    </footer>
  );
}
