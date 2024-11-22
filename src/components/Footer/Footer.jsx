import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Section from "../Section/Section";
import logo from "../../assets/images/Logo Phi-Footer.png";
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Section>
      {/* Sección footer */}
      <Box
        component="footer"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr 1fr" },
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

        {/* Columna 2: Enlaces */}
        <Box
          sx={{
            display: "grid",
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
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Qué, cómo y para qué
              </Link>
            </li>
            <li>
              <Link
                to="/comunidad"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Comunidad
              </Link>
            </li>
            <li>
              <Link
                to="/proyectos"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Proyectos
              </Link>
            </li>
          </Box>

          {/* Segunda columna */}
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link
                to="/siguenos"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Síguenos
              </Link>
            </li>
            <li>
              <Link
                to="/manifiesto"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Manifiesto
              </Link>
            </li>
            <li>
              <Link
                to="/unete"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Únete
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Contáctanos
              </Link>
            </li>
          </Box>

          {/* Tercera columna */}
          <Box component="ul" sx={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link
                to="/privacidad"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link
                to="/cookies"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link
                to="/legal"
                style={{
                  color: "#686868",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.color = "#404040")}
                onMouseOut={(e) => (e.target.style.color = "#686868")}
              >
                Aviso Legal
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
