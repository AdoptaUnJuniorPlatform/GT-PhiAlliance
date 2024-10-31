import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import PhiAllianceIco from "../../../assets/phi-alliance.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const pages = ["Home", "Qué, cómo y por qué", "Comunidad", "Proyectos", "Síguenos"]; 

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", width: "100%", padding: "1rem 8rem" }} 
        elevation={0}
      >
        <Toolbar disableGutters>
          <Box
            component={"section"}
            sx={{
              display: "inline-block",
            }}
          >
            <img
              src={PhiAllianceIco}
              alt="Phi Alliance"
              width="100px"
              height="100px"
              style={{
                verticalAlign: "bottom",
                borderRadius: "15px",
              }}
            />
          </Box>

          {/* Contenedor del menú móvil */}
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Contenedor de botones para pantallas más grandes */}
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
                key={page}
                variant="outlined"
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
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "green",
                borderRadius: "25px",
                borderColor: "green",
                fontFamily: "Poppins, sans-serif",
                textTransform: "none",
                fontSize: "1.5rem",
                gap: "5px",
                height: "4rem",
              }}
            >
              Contactanos
              <WhatsAppIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
}

export default ResponsiveAppBar;
