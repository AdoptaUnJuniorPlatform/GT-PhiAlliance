import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import { Box, Typography, Button } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import GalaxyImg from "../../assets/images/Galaxy.png";
import { grey } from "@mui/material/colors";
import Espiral from "../../assets/images/Vector espiral logo.svg";

// Variables de estilo
const COLORS = {
  green300: "#007a75",
  yellow300: "#ffb802",
  black: "#121212",
  grey: "#636363",
  purple300: "#574ea0",
  purple200: "#9b84ee",
  green200: "#60bfba",
  yellow200: "#fcbf1b",
  purple100: "#dec8fe",
  white: "#ffffff",
};
const SIZES = {
  circleBase: "7vw",
  iconFontSize: "2rem",
  fontSizeSmall: "0.8rem",
  fontSizeLarge: "1.5rem",
};

const randomOrder = [0, 3, 1, 4, 2];

const InteractiveCircle = ({ color, text, link, size, position, isActive }) => (
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
      display: "flex",
      boxShadow: isActive ? `0px 4px 12px grey` : "none",

      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      fontSize: SIZES.fontSizeSmall,
      textAlign: "center",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      color: COLORS.white,
      cursor: "pointer",
      transform: isActive ? "scale(1.2)" : "scale(1)",
      transition: "transform 0.6s ease",
    }}
  >
    {/* Texto aparece solo si isActive es verdadero */}
    <Typography
      sx={{
        display: isActive ? "block" : "none",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "100%",
        color: COLORS.white,
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default function Team() {
  const [activeCircle, setActiveCircle] = useState(null);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setActiveCircle(randomOrder[index]);
      index = (index + 1) % randomOrder.length;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

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
          padding: { xs: "2rem 1rem" },
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
            opacity: 0.16,
            zIndex: -1,
          },
        }}
      >
        <Box component="section" marginBottom="3rem">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "5vw", md: "3vw" },
              color: COLORS.green300,
              mb: "0.5vw",
              textAlign: "left",
            }}
          >
            Comunidad PHI
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "3vw", md: "1.2vw" },
              color: COLORS.grey,
              mb: "1vw",
              textAlign: "left",
            }}
          >
            Creemos firmemente en el poder colectivo para multiplicar esfuerzos
            individuales y generar un cambio exponencial. Queremos inpirarte,
            movilizarte y que formes parte de este movimiento. ¡Porque el cambio
            que soñamos empieza contigo!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "0.3vw",
            backgroundColor: COLORS.black,
            m: "2vw auto",
            position: "relative",
            top: { xs: "35%", sm: "40%", md: "30%" },
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
              top: "-6vw",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "orange",
            }}
          >
            <Box
              component="img"
              src={Espiral}
              alt="Espiral Logo"
              sx={{
                width: "50%",
                height: "50%",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Círculos decorativos (no interactivos) */}
          <Box
            sx={{
              backgroundColor: COLORS.green300,
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              position: "absolute",
              top: { xs: "-6000%", sm: "-6000%", md: "-4000%" },
              right: "27%",
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              backgroundColor: COLORS.purple300,
              width: "1vw",
              height: "1vw",
              borderRadius: "50%",
              position: "absolute",
              top: { xs: "-3000%", sm: "-3000%", md: "-1500%" },
              right: "30%",
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              backgroundColor: COLORS.purple100,
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              position: "absolute",
              top: { xs: "1000%", sm: "1500%", md: "1000%" },
              left: "27%",
              opacity: 0.6,
            }}
          />
          <Box
            sx={{
              position: "relative",
              backgroundColor: COLORS.black,
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              top: "-0.9vw",
              left: "-2%",
            }}
          />
          <Box
            sx={{
              backgroundColor: COLORS.black,
              width: "2vw",
              height: "2vw",
              borderRadius: "50%",
              position: "absolute",
              top: "-0.9vw",
              right: "-2%",
            }}
          />
        </Box>

        {/* Círculos interactivos con animación */}
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <InteractiveCircle
            color={COLORS.yellow200}
            text="Benefactores"
            link="/link1"
            size="7.5vw"
            position={{ top: { xs: "25%", md: "5%" }, left: "25%" }}
            isActive={activeCircle === 0}
          />
          <InteractiveCircle
            color={COLORS.purple300}
            text="Colaboradores"
            link="/link2"
            size="8vw"
            position={{ top: { xs: "15%", md: "-25%" }, left: "50%" }}
            isActive={activeCircle === 1}
          />
          <InteractiveCircle
            color={COLORS.purple200}
            text="Voluntarios"
            link="/link3"
            size="6vw"
            position={{ top: { xs: "30%", md: "8%" }, left: "75%" }}
            isActive={activeCircle === 2}
          />
          <InteractiveCircle
            color={COLORS.green300}
            text="Socios"
            link="/link4"
            size="5.5vw"
            position={{ top: { xs: "70%", md: "70%" }, left: "20%" }}
            isActive={activeCircle === 3}
          />
          <InteractiveCircle
            color={COLORS.green200}
            text="Patrocinadores"
            link="/link5"
            size="8.5vw"
            position={{ top: { xs: "60%", md: "60%" }, left: "70%" }}
            isActive={activeCircle === 4}
          />
        </Box>

        {/* Botón Únete */}
        <Box sx={{ marginTop: "auto", textAlign: "center", py: 3 }}>
          <Button
            href="/join"
            variant="outlined"
            sx={{
              padding: "0.5vw 1.5vw",
              top: "6%",
              borderColor: COLORS.green300,
              borderRadius: "30px",
              color: COLORS.green300,
              fontSize: SIZES.fontSizeLarge,
              textDecoration: "none",
              transition: "background 0.3s, color 0.3s",
              "&:hover": {
                backgroundColor: COLORS.green300,
                color: COLORS.white,
                "& .icon-circle": {
                  backgroundColor: COLORS.white,
                  color: COLORS.green300,
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
                color: COLORS.white,
                background: COLORS.green300,
                borderRadius: "50%",
                fontSize: SIZES.iconFontSize,
              }}
            />
          </Button>
        </Box>
      </Box>
    </Section>
  );
}
