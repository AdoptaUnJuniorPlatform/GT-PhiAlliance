import { useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Image1 from "../../../assets/images/siguenos/Evento1.webp";
import Image2 from "../../../assets/images/siguenos/Evento2.webp";
import Image3 from "../../../assets/images/siguenos/Evento3.webp";
import Section from "../../Section/Section";
import "./FollowUs.css";

export default function FollowUs() {
  const cardsData = [
    {
      image: Image2,
      title: "Explorando el potencial de experiencias regenerativas",
      description:
        "El pasado 22 de noviembre de 2024, tuvimos el privilegio de reunirnos para explorar el poder transformador de las experiencias regenerativas.",
      link: "https://www.linkedin.com/company/phialliance/",
    },
    {
      image: Image1,
      title: "Aprender de referentes: una experiencia transformadora",
      description:
        "El pasado 13 de marzo de 2024, vivimos una jornada inolvidable en el evento Abundance360 organizado por SingularityU Madrid.",
      link: "https://www.linkedin.com/company/phialliance/",
    },
    {
      image: Image3,
      title: "¡Qué evento tan espectacular vivimos juntos!",
      description:
        "Todavía estamos saboreando la increíble energía que nos dejó el último encuentro de PHI Alliance el pasado 19 de septiembre de 2024",
      link: "https://www.linkedin.com/posts/phialliance_phi-19sept2024-activity-7242884828524630016-Z_x3?utm_source=share&utm_medium=member_desktop",
    },
  ];

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <Section>
      <Box
        component="section"
        id="Síguenos"
        sx={{
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Título de la Sección */}
        <Typography
          variant="h4"
          sx={{ fontSize: "2.5rem", mb: 3, textAlign: "left" }}
        >
          Síguenos
        </Typography>

        {/* Carrusel en móviles y grilla en pantallas grandes */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* Botón Izquierdo (Solo en móviles) */}
          <IconButton
            onClick={scrollLeft}
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              top: "50%",
              left: 0,
              zIndex: 2,
              border: "2px #574ea0 solid",
              color: "#574ea0",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "&:hover": { backgroundColor: "#9bb4ee" },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Contenedor de Tarjetas */}
          <Box
            ref={scrollContainerRef}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" },
              overflowX: { xs: "scroll", md: "visible" },
              scrollBehavior: "smooth",
              gap: 3,
              padding: "1rem 0",
              "&::-webkit-scrollbar": { display: "none" },
              justifyContent: { md: "space-between" },
              width: "100%",
            }}
          >
            {cardsData.map((card, index) => (
              <Card
                key={index}
                sx={{
                  flex: { xs: "0 0 100%", md: "1" },
                  borderRadius: 4,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  maxWidth: { xs: "100%", md: "30%" },
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 16px rgba(96, 191, 186, 0.5)",
                  },
                  "&:hover .card-image": {
                    transform: "scale(1.04)",
                  },
                  "&:hover .bounce-icon": {
                    animation: "bounce 0.6s ease-in-out",
                  },
                }}
              >
                {/* Imagen */}
                <CardMedia
                  className="card-image"
                  component="img"
                  height="300"
                  image={card.image}
                  alt={`Image ${index + 1}`}
                  sx={{
                    borderRadius: "4px 4px 0 0",
                    transition: "transform 1s ease",
                  }}
                />

                {/* Contenido de la Tarjeta */}
                <CardContent
                  sx={{ backgroundColor: "#e0f7fa", textAlign: "left" }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {card.description}
                  </Typography>
                </CardContent>

                {/* Acción de la Tarjeta */}
                <CardActions
                  sx={{ backgroundColor: "#e0f7fa", paddingLeft: 2 }}
                >
                  <Button
                    size="small"
                    color="primary"
                    endIcon={
                      <ArrowForwardIcon
                        className="bounce-icon"
                        sx={{ fontSize: "1.5rem" }}
                      />
                    }
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      color: "#00695c",
                    }}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leer más
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>

          {/* Botón Derecho (Solo en móviles) */}
          <IconButton
            onClick={scrollRight}
            sx={{
              display: { xs: "flex", md: "none" },
              position: "absolute",
              top: "50%",
              right: 0,
              zIndex: 2,
              border: "2px #574ea0 solid",
              color: "#574ea0",
              backgroundColor: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              "&:hover": { backgroundColor: "#9bb4ee" },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box>
    </Section>
  );
}
