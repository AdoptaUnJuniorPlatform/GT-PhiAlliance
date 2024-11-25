import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LogoIcon from "../../Icons/LogoIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

const pages = [
  { label: "Home", section: "home" },
  { label: "Qué, cómo y para qué", section: "aboutUs" },
  { label: "Comunidad", section: "comunidad" },
  { label: "Proyectos", section: "projects" },
  { label: "Síguenos", section: "followUs" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();

  const handleNavigateToSection = (section) => {
    navigate("/", { state: { section } }); // Navegamos al HomePage con la sección especificada
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      top={0}
      sx={{
        backgroundColor: "white",
        width: "100%",
        paddingLeft: "4rem",
        paddingRight: "4rem",
        paddingTop: "1rem",
      }}
      elevation={0}
    >
      <Toolbar disableGutters>
        {/* Logo que navega al inicio */}
        <Box
          component={"section"}
          sx={{
            display: "inline-block",
            cursor: "pointer",
          }}
          onClick={() => handleNavigateToSection("home")}
        >
          <LogoIcon />
        </Box>

        {/* Menú móvil */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "end",
            alignItems: "center",
            color: "#5BC7C0",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{
              border: "1px solid #5BC7C0",
            }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.label}
                onClick={() => {
                  handleCloseNavMenu();
                  handleNavigateToSection(page.section); // Navegar a la sección específica
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  {page.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Menú para pantallas grandes */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "end",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.label}
              variant="outlined"
              onClick={() => handleNavigateToSection(page.section)} // Navegar a la sección específica
              sx={{
                color: "black",
                borderRadius: "25px",
                borderColor: "#CCCCCC",
                fontFamily: "Poppins, sans-serif",
                fontSize: "1.5rem",
                textTransform: "none",
                padding: ".2rem 2rem",
              }}
            >
              <Typography sx={{ textAlign: "center", fontSize: "1.2rem" }}>
                {page.label}
              </Typography>
            </Button>
          ))}
        </Box>

        {/* Botón de contacto */}

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Link
            href="https://chat.whatsapp.com/IA73d8ugMnX0TMRiWF437p"
            target="_blank"
          >

            <Button
              variant="outlined"
              sx={{
                color: "green",
                borderRadius: "25px",
                borderColor: "green",
                fontFamily: "Poppins, sans-serif",
                textTransform: "none",
                fontSize: "1.3rem",
                gap: "5px",
                height: "3rem",
              }}
            >
              Contáctanos
              <WhatsAppIcon />
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
