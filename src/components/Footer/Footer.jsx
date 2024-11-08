import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
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
          padding: "1rem",
          width: "85vw",
          margin: "0 auto",
          boxSizing: "border-box",
          gap: { xs: "1rem", md: "0" },
        }}
      >
        {/* Columna 1: Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            cursor: "pointer",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logo}
            alt="PHI Alliance Logo"
            style={{
              width: "100px",
              height: "auto",
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
              App
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
              About
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
              People
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
              For school
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
              Brain training
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
              E-learning
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
              Online modules
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
              Media
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
              Support Us
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
              Contact
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
              Places
            </Link>
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
          </IconButton>
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
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>
    </Section>
  );
}
