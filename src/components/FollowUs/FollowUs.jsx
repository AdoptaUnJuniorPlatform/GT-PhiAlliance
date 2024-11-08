import React from "react";
import Section from "../Section/Section";
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Image1 from "../../assets/images/Imagen tarjeta blog 1.webp";
import Image2 from "../../assets/images/Imagen tarjeta blog 2.webp";
import Image3 from "../../assets/images/Imagen tarjeta blog 3.webp";
import "./FollowUs.css";

export default function FollowUs() {
  const cardsData = [
    {
      image: Image1,
      title: "Lorem ipsum dolor sit amet...",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam nunc molestie mi id.",
      link: "#",
    },
    {
      image: Image2,
      title: "Lorem ipsum dolor sit amet...",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam nunc molestie mi id.",
      link: "#",
    },
    {
      image: Image3,
      title: "Lorem ipsum dolor sit amet...",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam nunc molestie mi id.",
      link: "#",
    },
  ];

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: { xs: "2rem 1rem", md: "3rem 8rem" },
        }}
      >
        {/* Título de la Sección */}
        <Typography variant="h4" sx={{ fontSize: "2.5rem", mb: 3, textAlign: "left" }}>
          Síguenos
        </Typography>

        {/* Contenedor de Tarjetas */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            justifyContent: "space-between",
            width: "100%",
            overflowX: { xs: "auto", md: "visible" },
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
                minWidth: 0, 
                transition:"box-shadow 0.3s ease",
                "&:hover":{
                  boxShadow: "0 8px 16px rgba(96, 191, 186, 0.5)",
                },
                "&:hover .card-image": {
                transform: "scale(1.03)", // Aplica el zoom a la imagen
                },
                "&:hover .bounce-icon": {
                animation: "bounce 0.6s ease-in-out", // Aplica animación de rebote
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
              <CardContent sx={{ backgroundColor: "#e0f7fa", textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.description}
                </Typography>
              </CardContent>

              {/* Acción de la Tarjeta */}
              <CardActions sx={{ backgroundColor: "#e0f7fa", paddingLeft: 2 }}>
                <Button
                  size="small"
                  color="primary"
                  endIcon={
                  <ArrowForwardIcon
                  className="bounce-icon"
                  sx={{fontSize:"1.5rem"}}
                  />}
                  sx={{ textTransform: "none", fontWeight: "bold", color: "#00695c" }}
                  href={card.link}
                >
                  Learn more
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Section>
  );
}

