// import React from "react";
// import Section from "../Section/Section";
// import './Team.css'; 

// // Componente para cada círculo interactivo
// const InteractiveCircle = ({ color, text, link, size, position }) => {
//   return (
//     <a href={link} className={`circle interactive-circle ${color} ${size}`} style={position}>
//       <span className="hover-text">{text}</span>
//     </a>
//   );
// };

// export default function Team() {
//   return (
//     <Section>
//       <div className="comunidad-container">
//         <h1 className="comunidad-title">Comunidad PHI</h1>
//         <p className="comunidad-subtitle">Lorem ipsum dolor sit amet consectetur. Id at elementum</p>

//         {/* Línea horizontal central */}
//         <div className="comunidad-line">
//           {/* Círculo central sobre la línea */}
//           <div className="circle central-circle orange">
//             <span className="circle-icon">Φ</span>
//           </div>
//         </div>

//         {/* Círculos interactivos y decorativos */}
//         <div className="circles-container">
//           <InteractiveCircle color="yellow" text="Benefactores" link="/link1" size="medium" position={{ top: "10%", left: "30%" }} />
//           <InteractiveCircle color="purple2" text="Colaboradores" link="/link2" size="large" position={{ top: "-10%", right: "40%" }} />
//           <InteractiveCircle color="purple" text="Voluntarios" link="/link3" size="medium" position={{ top: "15%", right: "15%" }} />
//           <InteractiveCircle color="green" text="Socios" link="/link4" size="large" position={{ top: "55%", left: "20%" }} />
//           <InteractiveCircle color="teal" text="Patrocinadores" link="/link5" size="xlarge" position={{ top: "45%", right: "30%" }} />

//           {/* Otros círculos decorativos sin interacción */}
//           <div className="circle decor-circle small green" style={{ top: "5%", right: "28%" }}></div>
//           <div className="circle decor-circle xsmall purple2" style={{ top: "23%", right: "32%" }}></div>
//           <div className="circle decor-circle small violet" style={{ top: "40%", left: "27%" }}></div>
          
//         </div>

//         {/* Botón de Únete */}
//         <div className="button-container">
//           <a href="/join" className="join-button">Únete</a>
//         </div>
//       </div>
//     </Section>
//   );
// }

import React from "react";
import Section from "../Section/Section";
import { Box, Typography, Button } from '@mui/material';

const InteractiveCircle = ({ color, text, link, size, position }) => {
  return (
    <Box
      component="a"
      href={link}
      sx={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: "50%",
        position: "absolute",
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
        fontSize: "1rem",
        cursor: "pointer",
        transform: "scale(1)",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.67)",
          "& .hover-text": { display: "block" },
        },
      }}
    >
      <Typography className="hover-text" sx={{ display: "none" }}>{text}</Typography>
    </Box>
  );
};

export default function Team() {
  return (
    <Section>
      <Box
        component="section" id="comunidad"
        sx={{
          textAlign: "center",
          backgroundColor: "#f0f0f0",
          padding: { xs: "2rem 1rem", md: "2rem 8rem" },
          position: "relative",
          overflow: "hidden",
          width: "100vw",
          height: { xs: "70vh", md: "60vw" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: { xs: "5vw", md: "3vw" }, color: "#00695c", mb: "0.5vw", textAlign: "left" }}>
          Comunidad PHI
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "3vw", md: "1.2vw" }, color: "#686868", mb: "1vw", textAlign: "left" }}>
          Lorem ipsum dolor sit amet consectetur. Id at elementum
        </Typography>

        <Box
          sx={{
            width: "80%",
            height: "0.3vw",
            backgroundColor: "#000",
            m: "2vw auto",
            position: "relative",
            top: "20vw",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "12vw",
              height: "12vw",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5vw",
              color: "white",
              top: "-6vw",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#f28c26",
            }}
          >
            Φ
          </Box>
        </Box>

        {/* Círculos interactivos y decorativos */}
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {/* Círculos interactivos */}
          <InteractiveCircle color="#febd3b" text="Benefactores" link="/link1" size="8vw" position={{ top: "10%", left: "30%" }} />
          <InteractiveCircle color="#350076" text="Colaboradores" link="/link2" size="9vw" position={{ top: "-10%", right: "40%" }} />
          <InteractiveCircle color="#9663d6b6" text="Voluntarios" link="/link3" size="7vw" position={{ top: "15%", right: "15%" }} />
          <InteractiveCircle color="#217954" text="Socios" link="/link4" size="8vw" position={{ top: "70%", left: "20%" }} />
          <InteractiveCircle color="#02cdb8" text="Patrocinadores" link="/link5" size="10vw" position={{ top: "55%", right: "20%" }} />

          {/* Círculos decorativos sin interacción */}
          <Box
            sx={{
              backgroundColor: "#217954",
              width: "4vw",
              height: "4vw",
              borderRadius: "50%",
              position: "absolute",
              top: "5%",
              right: "28%",
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              backgroundColor: "#350076",
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              position: "absolute",
              top: "28%",
              right: "32%",
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              backgroundColor: "#c8a2fd",
              width: "4vw",
              height: "4vw",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "27%",
              opacity: 0.6,
            }}
          />
        </Box>

 {/* Botón Únete */}
 <Box sx={{ marginTop: "auto", textAlign: "center", py: 3 }}>
          <Button
            href="/join"
            variant="outlined"
            sx={{
              padding: "0.5vw 1.5vw",
              borderColor: "#00695c",
              borderRadius: "2vw",
              color: "#00695c",
              fontSize: "1vw",
              textDecoration: "none",
              transition: "background 0.3s, color 0.3s",
              "&:hover": {
                backgroundColor: "#00695c",
                color: "#fff",
              },
            }}
          >
            Únete
          </Button>
        </Box>
      </Box>
    </Section>
  );
}


