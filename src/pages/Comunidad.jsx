import { useState } from "react";
import { Box, Typography, Button, IconButton, List, ListItem, ListItemText, Collapse } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import GalaxyImg from "../assets/images/comunidad phi  universo vector.svg";
import Estrellas from "../assets/images/Icono estrellas vector.svg";

// Definición de colores y tamaños
const COLORS = {
  green300: "#007a75",
  grey: "#636363",
  white: "#ffffff",
  greenBold: "#007a75",
  black: "#121212",
};

const SIZES = {
  fontSizeLarge: "1.5rem",
  iconFontSize: "2rem",
};

// Datos de la lista con texto y detalle
const listData = [
  {
    text: "Puedes ser SOCIO, ven te contamos ...",
    detail: "Más información sobre cómo puedes ser un socio y participar activamente en nuestra comunidad.",
  },
  {
    text: "Tu empresa puede ser PATROCINADOR. Conoce los beneficios",
    detail: "Descubre los beneficios de patrocinar nuestras actividades y eventos.",
  },
  {
    text: "Estamos necesitando VOLUNTARIOS. ¡Anímate!",
    detail: "Únete como voluntario y ayuda a hacer una diferencia significativa en nuestra comunidad.",
  },
  {
    text: "Estás comprometido con el cambio, únete como COLABORADOR",
    detail: "Participa como colaborador y contribuye con tus habilidades y conocimientos.",
  },
  {
    text: "¿Te llama la atención y quieres seguir de cerca nuestro trabajo?, REGÍSTRATE para estar INFORMADO",
    detail: "Regístrate para recibir noticias y actualizaciones sobre nuestros proyectos y eventos.",
  },
];

export default function Comunidad() {
  const [expanded, setExpanded] = useState(null);



  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
      <Box sx={{ width: "100%",  padding: { xs: "2rem", md: "4rem" }, marginTop: "4rem" }}>
        {/* Sección Superior */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          {/* Columna Izquierda (Imagen) */}
          <Box
            component="img"
            src={GalaxyImg}
            alt="Galaxy"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "auto",
              borderRadius: "16px",
            }}
          />

          {/* Columna Derecha (Texto y Botón) */}
          <Box sx={{ width: { xs: "100%", md: "50%" }, display: "flex", flexDirection: "column", justifyContent: "left" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: COLORS.black, mb: 1 }}>
              Únete a nuestra comunidad
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: COLORS.green300, mb: 2 }}>
              PHI ALLIANCE
            </Typography>
            <Box sx={{ textAlign: "left" }}>
              <Button
                href="/join"
                variant="outlined"
                sx={{
                  padding: "0.5vw 1.5vw",
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
        </Box>

        {/* Sección Inferior */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, mt: 6 }}>
          {/* Columna Izquierda (Texto) */}
          <Box sx={{ width: { xs: "100%", md: "30%" }, mb: { xs: 4, md: 0 } }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: COLORS.black, mb: 1 }}>
              Has parte
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: COLORS.green300 }}>
              del cambio
            </Typography>
            
          </Box>
          <Box
            component="img"
            src={Estrellas}
            alt="Estrellas"
            sx={{
              position:"relative",
              top:{ xs: "-5rem", md: "-10rem" },
              left:{xs:"50%",md:"0"},
              width: { xs: "4rem", md: "4rem" },
              height: "auto",
              margin:"1rem",
            }}
          />        
          {/* Columna Derecha (Lista Expandible) */}
          <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <List>
              {listData.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontWeight: "bold",
                    marginBottom:"1rem",
                    border: "1px #737373 solid",
                    borderRadius: "30px",
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    "&:hover": {
                      backgroundColor: "#e0f7fa",
                    },
                  }}
                  onClick={() => toggleExpand(index)}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <ListItemText primary={item.text} />
                    <IconButton>
                      {expanded === index ? <RemoveIcon /> : <AddIcon />}
                    </IconButton>
                  </Box>
                  <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                    <Box sx={{fontWeight: "italic", mt: 2, borderRadius: "24px", padding: "0.5rem 1rem", width: "100%" }}>
                      <Typography variant="body1">{item.detail}</Typography>
                    </Box>
                  </Collapse>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
  );
}
