import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import Section from "../Section/Section";
import logo from "../../assets/images/Logo Phi-Footer.png";
import "./Footer.css";

export default function Footer() {
  return (
    <Section>
      <footer className="footer-container">
        
        {/* Columna 1: Logo */}
        <div className="footer-logo">
          <img src={logo} alt="PHI Alliance Logo" className="logo-image" />
        </div>
        
        {/* Columna 2: Enlaces */}
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>App</li>
            <li>About</li>
            <li>People</li>
          </ul>
          <ul>
            <li>For school</li>
            <li>Brain training</li>
            <li>E-learning</li>
            <li>Online modules</li>
          </ul>
          <ul>
            <li>Media</li>
            <li>Support Us</li>
            <li>Contact</li>
            <li>Places</li>
          </ul>
        </div>
        
        {/* Columna 3: Redes Sociales */}
        <div className="footer-socials">
          <a href="#" className="social-icon">
            <InstagramIcon />
          </a>
          <a href="#" className="social-icon">
            <LinkedInIcon />
          </a>
          <a href="#" className="social-icon">
            <TwitterIcon />
          </a>
        </div>

      </footer>
    </Section>
  );
}

