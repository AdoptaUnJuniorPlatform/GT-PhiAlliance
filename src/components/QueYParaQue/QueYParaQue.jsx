import { Box, Container, Typography } from "@mui/material";
import Section from "../Section/Section";
import ContainerCards from "./ContainerCards/ContainerCards";

export default function QueYParaQue() {
  return (
    <Section>
      <Container
        maxWidth="xxl"
        disableGutters
        sx={{
          display: "flex",
          padding: "2rem 4rem",
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
        <ContainerCards />
      </Container>
    </Section>
  );
}