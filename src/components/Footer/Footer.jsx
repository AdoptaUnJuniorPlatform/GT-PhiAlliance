import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Section from "../Section/Section";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Link as LinkMaterial } from "@mui/material";
import LogoIcon from "../Icons/LogoIcon";

export default function Footer({ isOpenManifiesto, setIsOpenManifiesto }) {
  const handleNavigateToSection = () => {
    window.scrollTo("Home", { behavior: "smooth" });
    setIsOpenManifiesto(!isOpenManifiesto);
  };

  return (
    <Section>
      {/* Sección footer */}
      <Box
        component="footer"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 2fr 1fr" },
          alignItems: "center",
          width: "100%",
          marginTop: "2rem",
          boxSizing: "border-box",
          gap: { xs: "1rem", md: "0" },
        }}
      >
        {/* Columna 1: Logo */}
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            height: "auto",
            cursor: "pointer",
            transition: "transform 0.2s ease-in-out", // Transición suave
            "&:hover": {
              transform: "translateY(-5px)", // Mueve hacia arriba 5px en hover
            },
          }}
          onClick={() => window.scrollTo("Home", { behavior: "smooth" })}
        >
          <LogoIcon />
        </Box>

        {/* Columna 2: Enlaces */}
        <Box
          sx={{
            display: { xs: "none", md: "grid" },
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            fontSize: "0.75rem",
            justifySelf: "end",
            marginLeft: "2rem",
          }}
        >
          {/* Primera columna */}
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Home
                </Box>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                state={{ section: "aboutUs" }}
              >
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Qué, cómo y para qué
                </Box>
              </Link>
            </li>
            <li>
              <Link to="/comunidad" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Comunidad
                </Box>
              </Link>
            </li>
            <li>
              <Link to="/proyectos" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Proyectos
                </Box>
              </Link>
            </li>
          </Box>

          {/* Segunda columna */}
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                state={{ section: "followUsRef" }}
              >
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Síguenos
                </Box>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                state={{ section: "hero" }}
              >
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                  onClick={() => handleNavigateToSection()}
                >
                  Manifiesto
                </Box>
              </Link>
            </li>
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe2CSFd2vtrfxSKDMtaVAiGBqOZDC6f2ZVs2IjHMZD_OFPXXg/formrestricted"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#686868",
                  transition: "color 0.3s",
                }}
              >
                <Box
                  sx={{
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Únete
                </Box>
              </a>
            </li>

            <li>
              <LinkMaterial
                href="https://chat.whatsapp.com/IA73d8ugMnX0TMRiWF437p"
                target="_blank"
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Contáctanos
                </Box>
              </LinkMaterial>
            </li>
          </Box>

          {/* Tercera columna */}
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link
                to="/legal#privacy-policy"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Política de Privacidad
                </Box>
              </Link>
            </li>
            <li>
              <Link
                to="/legal#cookies-policy"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Política de Cookies
                </Box>
              </Link>
            </li>
            <li>
              <Link to="/legal#legal-notice" style={{ textDecoration: "none" }}>
                <Box
                  sx={{
                    color: "#686868",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "#404040",
                    },
                  }}
                >
                  Aviso Legal
                </Box>
              </Link>
            </li>
          </Box>
        </Box>

        {/* Columna 3: Redes Sociales */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
            position: "relative",
            top: "-2.5vw",
          }}
        >
          <IconButton
            href="https://www.linkedin.com/company/phialliance/about/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "#574ea0",
              border: "1px solid #574ea0",
              padding: "0.5rem",
              borderRadius: "50%",
              transition: "background-color 0.3s, color 0.3s",
              alignSelf: "flex-start",
              "&:hover": { backgroundColor: "#574ea0", color: "#ffffff" },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
    </Section>
  );
}
