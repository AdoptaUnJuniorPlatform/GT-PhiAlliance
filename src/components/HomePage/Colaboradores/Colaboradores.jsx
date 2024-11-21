import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

import AujLogo from "../../../assets/images/auj-white-logo-with-bg@2x.png";
import SustainableLogo from "../../../assets/images/logo-Sustainable.png";
import ExvolutionLogo from "../../../assets/images/EXV-logotipo.png";
import OrangeFundacionLogo from "../../../assets/images/Fundacion_orange.png";
import InnoITLogo from "../../../assets/images/logo_innoit.webp";

const logos = [
  { src: AujLogo, alt: "AdoptaUnJunior", link: "https://adoptaunjunior.org" },
  {
    src: SustainableLogo,
    alt: "Sustainable Startup & Co",
    link: "https://sustainablestartup.com",
  },
  { src: ExvolutionLogo, alt: "Exvolution", link: "https://exvolution.com" },
  {
    src: OrangeFundacionLogo,
    alt: "Orange Fundación",
    link: "https://orangefoundation.com",
  },
  { src: InnoITLogo, alt: "InnoIT", link: "https://innoit.com" },
];

export default function ColaboradoresCarousel() {
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);

  const startAutoScroll = () => {
    if (!carouselRef.current) return;

    scrollInterval.current = setInterval(() => {
      carouselRef.current.scrollLeft += 2;

      // Reinicio del scroll infinito
      const scrollWidth = carouselRef.current.scrollWidth;
      const clientWidth = carouselRef.current.clientWidth;

      if (carouselRef.current.scrollLeft >= scrollWidth - clientWidth) {
        carouselRef.current.scrollLeft = 0;
      }
    }, 10);
  };

  const stopAutoScroll = () => {
    clearInterval(scrollInterval.current);
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "relative",
        py: 4,
        backgroundColor: "white",
      }}
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          color: "#636363",
          mb: 3,
        }}
      >
        Nos acompañan:
      </Typography>

      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          gap: 4,
          overflow: "hidden",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
          width: "100%",
        }}
      >
        {/* Duplicamos los logos para un scroll infinito */}
        {[...logos, ...logos].map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={logo.src}
              alt={logo.alt}
              sx={{
                maxHeight: "100px",
                width: "auto",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
          </a>
        ))}
      </Box>
    </Box>
  );
}
