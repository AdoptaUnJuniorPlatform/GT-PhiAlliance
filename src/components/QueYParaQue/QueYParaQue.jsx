import { Box, Container, Typography } from "@mui/material";
import Section from "../Section/Section";
import ScienceIcon from '@mui/icons-material/Science'; // Icono para "Qué"
import StarsIcon from '@mui/icons-material/Stars'; // Icono para "Para Qué"
import MemoryIcon from '@mui/icons-material/Memory'; // Icono para "Cómo"

export default function QueYParaQue() {
  return (
    <Section>
      <Container
        maxWidth="xxl"
        disableGutters
        sx={{
          display: "flex",
          padding: "2rem 8rem",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "2rem",
        }}
      >
        {/* Título principal alineado a la izquierda y en dos líneas */}
        <Box width="100%" mb={4} sx={{ textAlign: "left" }}>
          <Typography 
            variant="h1" 
            fontSize="5rem" 
            sx={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.2",
            }}
          >
            Qué hacemos,{"\n"}cómo y para qué.
          </Typography>
        </Box>

        {/* Contenedor para las tarjetas en fila */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {/* Tarjeta 1 */}
          <Box
            sx={{
              backgroundColor: "#6BC3C1",
              color: "black",
              padding: "2rem",
              borderRadius: "50px",
              width: "400px",
              height: "450px",
              textAlign: "left",
            }}
          >
            <ScienceIcon sx={{ fontSize: "3rem" }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Qué
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Box>

          {/* Tarjeta 2 */}
          <Box
            sx={{
              backgroundColor: "#5B4B8A",
              color: "white",
              padding: "2rem",
              borderRadius: "50px",
              width: "400px",
              height: "450px",
              textAlign: "left",
            }}
          >
            <StarsIcon sx={{ fontSize: "3rem" }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Para Qué
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Box>

          {/* Tarjeta 3 */}
          <Box
            sx={{
              backgroundColor: "#F3B63A",
              color: "black",
              padding: "2rem",
              borderRadius: "50px",
              width: "400px",
              height: "450px",
              textAlign: "left",
            }}
          >
            <MemoryIcon sx={{ fontSize: "3rem" }} />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Cómo
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
