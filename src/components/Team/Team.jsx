import React from "react";
import Section from "../Section/Section";
import { Box, Typography, Button } from '@mui/material';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import GalaxyImg from "../../assets/images/Galaxy.png";

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
        textAlign: "center",
        overflow:"hidden",
        whiteSpace:"nowrap",
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
        component="section"
        id="comunidad"
        sx={{
          textAlign: "center",
          
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: { xs: "70vh", md: "50vw" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: 0,
          padding: { xs: "2rem 1rem", md: "2rem 8rem" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${GalaxyImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,                  
            zIndex: -1,                    
          },
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
            top: { xs: "35%",sm:"40%", md: "30%" }
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

          {/* Círculos decorativos */}
          <Box
            sx={{
              backgroundColor: "#217954",
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              position: "absolute",
              top: { xs: "-6000%",sm:"-6000%", md: "-4000%" },
              right: "27%",
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              backgroundColor: "#350076",
              width: "1vw",
              height: "1vw",
              borderRadius: "50%",
              position: "absolute",
              top: { xs: "-3000%",sm:"-3000%", md: "-1500%" },
              right: "30%",
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              backgroundColor: "#c8a2fd",
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              position: "absolute",
              top: { xs: "1000%",sm:"1500%", md: "1000%" },
              left: "27%",
              opacity: 0.6,
            }}
          />
          
          <Box
            sx={{
              position: "relative",
              backgroundColor: "#000000",
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              top: "-0.9vw",
              left: "-2%",
            }}
          />
          <Box
            sx={{
              backgroundColor: "#000000",
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              position: "absolute",
              top: "-0.9vw",
              right: "-2%",
            }}
          />
        </Box>

        {/* Círculos interactivos y decorativos */}
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          {/* Círculos interactivos */}
          <InteractiveCircle color="#febd3b" text="Benefactores" link="/link1" size="5.5vw" position={{ top: { xs: "25%",sm:"25%", md: "5%" }, left: "25%" }} />
          <InteractiveCircle color="#350076" text="Colaboradores" link="/link2" size="8vw" position={{ top: { xs: "15%",sm:"10%", md: "-25%" }, right: "40%" }} />
          <InteractiveCircle color="#9663d6b6" text="Voluntarios" link="/link3" size="6vw" position={{ top: { xs: "30%",sm:"30%", md: "8%" }, right: "20%" }} />
          <InteractiveCircle color="#217954" text="Socios"  link="/link4" size="7vw" position={{ top: { xs: "70%",sm:"75%", md: "70%" }, left: "20%"}} />
          <InteractiveCircle color="#02cdb8" text="Patrocinador" link="/link5" size="7.5vw" position={{ top: { xs: "60%",sm:"65%", md: "60%" }, right: "25%"  }} />
        </Box>
        

        {/* Botón Únete */}
        <Box sx={{ marginTop: "auto", textAlign: "center", py: 3 }}>
  <Button
    href="/join"
    variant="outlined"
    sx={{
      padding: "0.5vw 1.5vw",
      top: "6%",
      borderColor: "#00695c",
      borderRadius: "30px",
      color: "#00695c",
      fontSize: "1.5rem",
      textDecoration: "none",
      transition: "background 0.3s, color 0.3s",
      "&:hover": {
        backgroundColor: "#00695c",
        color: "#fff",
        "& .icon-circle": {
          backgroundColor: "#fff",
          color: "#00695c",
        },
      },
    }}
  >
    Únete
    <NorthEastIcon
      className="icon-circle"
      sx={{
        marginLeft: "0.5rem",
        padding: "0.3rem",
        color: "white",
        background: "#00695c",
        borderRadius: "50%",
        fontSize: "2rem",
      }}
    />
  </Button>
</Box>

      </Box>
    </Section>
  );
}



