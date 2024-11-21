import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import Section from "../Section/Section";
import logo from "../../assets/images/Logo Phi-Footer.png";
import { Box, IconButton, Link } from "@mui/material";

export default function Footer() {
  return (
    <Section>
      {/*Seccion footer */}
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
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
          onClick={() => window.scrollTo("Home", { behavior: "smooth" })}
        >
          <Box
            component="img"
            src={logo}
            alt="PHI Alliance Logo"
            sx={{
              width: "60px",
              height: "auto",
              cursor: "pointer",
              transition: "box-shadow 0.3s ease-in-out",
              "&:hover": {
                boxShadow: "0px 5px 10px 5px rgba(96, 251, 186, 0.5)",
              },
            }}
          />
        </Box>

        {/* Columna 2: Enlaces (Ocultos en pantallas pequeñas) */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "right",
            gap: "2rem",
            flexDirection: "row",
            fontSize: "0.75rem",
          }}
        >
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Home
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Qué,cómo y para qué
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Comunidad
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Proyectos
            </Link>
          </Box>
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Síguenos
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Manifiesto
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Únete
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Contáctanos
            </Link>
          </Box>
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Política de Privacidad
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Política de Cookies
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                mb: 0.5,
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            >
              Aviso Legal
            </Link>
            <Link
              href="#"
              component="li"
              sx={{
                color: "#686868",
                textDecoration: "none",
                cursor: "pointer",
                transition: "color 0.3s",
                "&:hover": { color: "#404040" },
              }}
            ></Link>
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
          {/* <IconButton
            href="#"
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
            <InstagramIcon />
          </IconButton> */}
          <IconButton
            href="#"
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
          {/* <IconButton
            href="#"
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
            <TwitterIcon />
          </IconButton> */}
        </Box>
      </Box>
    </Section>
  );
}
