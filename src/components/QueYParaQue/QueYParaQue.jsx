import { Box, Container, Typography } from "@mui/material";
import Section from "../Section/Section";
import Card from "./Card/Card";
import GalaxiaIcon from "../Icons/GalaxiaIcon";
import IAIcon from "../Icons/IAIcon";
import EstrellasIcon from "../Icons/EstrellasIcon";

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
          position="relative"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          {/* Tarjeta 1 */}
          <Card description="Lorem ipsum dolor sit amet consectetur." icon={<GalaxiaIcon />} title="Qué" color="blue" />
          {/* Tarjeta 2 */}
          <Card description="Lorem ipsum dolor sit amet consectetur." icon={<EstrellasIcon />} title="Para Qué" color="purple" />
          {/* Tarjeta 3 */}
          <Card description="Lorem ipsum dolor sit amet consectetur." icon={<IAIcon />} title="Cómo" color="yellow" />
        </Box>
      </Container>
    </Section>
  );
}
