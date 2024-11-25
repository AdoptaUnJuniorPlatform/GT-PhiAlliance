import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import GalaxyImg from "../assets/images/comunidad phi  universo vector.svg";
import Estrellas from "../assets/images/Icono estrellas vector.svg";

// Definición de colores y tamaños
const COLORS = {
  green300: "#007a75",
  grey: "#636363",
  white: "#ffffff",
  greenBold: "#007a75",
  black: "#121212",
};

const SIZES = {
  fontSizeLarge: "1.5rem",
  iconFontSize: "2rem",
};
const JOIN_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSe2CSFd2vtrfxSKDMtaVAiGBqOZDC6f2ZVs2IjHMZD_OFPXXg/formrestricted";

const CustomButton = ({ text }) => (
  <Button
    component="a"
    href={JOIN_LINK}
    target="_blank"
    rel="noopener noreferrer"
    variant="outlined"
    sx={{
      padding: "0.1vw 0.5vw",
      borderColor: COLORS.green300,
      borderRadius: "30px",
      color: COLORS.green300,
      fontSize: SIZES.fontSizeLarge,
      textDecoration: "none",
      transition: "background 0.3s, color 0.3s",
      "&:hover": {
        backgroundColor: COLORS.green300,
        color: COLORS.white,
        "& .icon-circle": {
          backgroundColor: COLORS.white,
          color: COLORS.green300,
        },
      },
    }}
  >
    {text}
    <NorthEastIcon
      className="icon-circle"
      sx={{
        marginLeft: "0.5rem",
        padding: "0.3rem",
        color: COLORS.white,
        background: COLORS.green300,
        borderRadius: "50%",
        fontSize: SIZES.iconFontSize,
      }}
    />
  </Button>
);

const listData = [
  {
    text: (
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Voluntarios: transforma tu pasión en impacto
      </Typography>
    ),
    detail: (
      <Box sx={{ padding: "0.5rem", textAlign: "left" }}>
        <Typography
          variant="body1"
          sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}
        >
          Si crees que tu experiencia, habilidades y tiempo pueden marcar la
          diferencia, este es tu lugar. Como voluntario de PHI Alliance, tendrás
          la oportunidad de participar en iniciativas que generan un impacto
          real y tangible.
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          ¿Qué puedes hacer como voluntario?
        </Typography>
        <Box
          component="ul"
          sx={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}
        >
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            <strong>Prepara y desarrolla proyectos</strong> innovadores que
            aborden desafíos sociales, ambientales o económicos.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            <strong>Apoya en la gestión interna</strong> de la asociación,
            asegurando que nuestra estructura crezca de manera eficiente y
            sostenible.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            <strong>Participa en la ideación de nuevas iniciativas</strong>,
            aportando ideas que puedan transformarse en soluciones de alto
            impacto.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ lineHeight: "1.8", marginBottom: "1.5rem" }}
        >
          En PHI Alliance, creemos en el poder de las personas apasionadas por
          el cambio. No importa tu profesión, formación o disponibilidad; si
          tienes el deseo de contribuir, encontrarás un espacio para hacerlo.{" "}
          <strong>
            Aquí, tu tiempo y tu energía se convierten en una fuerza
            transformadora.
          </strong>
        </Typography>
      </Box>
    ),
  },
  {
    text: (
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Socios: tu compromiso, la base de nuestra misión
      </Typography>
    ),
    detail: (
      <Box sx={{ padding: "0.5rem", textAlign: "left" }}>
        <Typography
          variant="body1"
          sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}
        >
          Ser socio de <strong>PHI Alliance</strong> significa comprometerte con
          un futuro más justo, sostenible e inclusivo. Tu apoyo es esencial para
          mantener viva nuestra misión y para crear una red de personas que
          comparten los mismos valores.
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          ¿Qué significa ser socio?
        </Typography>
        <Box
          component="ul"
          sx={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}
        >
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            Con una <strong>cuota anual de 50 €</strong>, estarás contribuyendo
            al sostenimiento de la asociación, permitiéndonos organizar eventos,
            desarrollar proyectos y conectar personas con propósito.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            Reservando un poco de tu tiempo, te convertirás en parte activa de
            nuestras iniciativas, ayudándonos a planificar y ejecutar acciones
            que transforman comunidades.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            Tendrás <strong>acceso exclusivo</strong> a eventos, talleres y
            formaciones, donde podrás inspirarte, aprender y movilizarte junto a
            una comunidad apasionada.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            Lo más importante: <strong>serás parte de un cambio</strong> que
            impacta a nivel global, dejando un legado para las generaciones
            futuras.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ lineHeight: "1.8", marginBottom: "1.5rem" }}
        >
          Al convertirte en socio, estás invirtiendo en un mundo mejor y en ti
          mismo, porque la experiencia de ser parte de algo más grande siempre
          nos transforma
        </Typography>
      </Box>
    ),
  },
  {
    text: (
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Colaboradores: Se diferente, multiplica el impacto de tu organización
      </Typography>
    ),
    detail: (
      <Box sx={{ padding: "0.5rem", textAlign: "left" }}>
        <Typography
          variant="body1"
          sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}
        >
          Las empresas y organizaciones tienen un papel clave en la construcción
          de un futuro más sostenible. En PHI Alliance, creemos en el poder de
          las alianzas estratégicas para maximizar el impacto y crear soluciones
          escalables
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          ¿Cómo puede colaborar tu empresa?
        </Typography>
        <Box
          component="ul"
          sx={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}
        >
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            <strong>Apoyo financiero: </strong> Invierte en proyectos
            innovadores que generan un cambio significativo en la sociedad y el
            medio ambiente.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            <strong>Recursos y tecnología: </strong> Ofrece espacios para
            eventos, herramientas tecnológicas o infraestructura que permita
            escalar nuestras iniciativas.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            <strong>Conocimiento especializado (know-how):</strong> Comparte la
            experiencia de tu equipo para ayudarnos a desarrollar proyectos con
            un enfoque técnico y estratégico.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{ lineHeight: "1.8", marginBottom: "1.5rem" }}
        >
          Colaborar con <strong>PHI Alliance</strong> no solo genera un impacto
          positivo en el mundo, sino que también refuerza la imagen de tu
          organización como un actor comprometido con la sostenibilidad y la
          responsabilidad social. Además, estarás construyendo un legado de
          cambio y progreso.
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", marginBottom: "1rem" }}
        >
          Beneficios de ser colaborador:
        </Typography>
        <Box
          component="ul"
          sx={{ marginLeft: "1.5rem", marginBottom: "1.5rem" }}
        >
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            Participarás en proyectos de alto impacto que potencian los
            Objetivos de Desarrollo Sostenible (ODS).
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            Posicionarás tu empresa como líder en innovación y sostenibilidad.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ marginBottom: "0.8rem" }}
          >
            Formarás parte de una red global de organizaciones que comparten los
            mismos valores y compromiso.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    text: (
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Por qué unirte a PHI Alliance
      </Typography>
    ),
    detail: (
      <Box sx={{ padding: "0.5rem", textAlign: "left" }}>
        <Typography
          variant="body1"
          sx={{ marginBottom: "1.5rem", lineHeight: "1.8" }}
        >
          En nuestra comunidad, cada idea cuenta, cada acción importa, y cada
          persona tiene un papel único. No importa si eres un voluntario, un
          socio comprometido o un colaborador corporativo: aquí encontrarás un
          espacio para crecer, inspirarte y ser parte de un cambio global.
        </Typography>
      </Box>
    ),
  },
];

export default function Comunidad() {
  const [expanded, setExpanded] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: { xs: "3rem", md: "4rem" },
        marginTop: "4rem",
      }}
    >
      {/* Sección Superior */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        <Box
          component="img"
          src={GalaxyImg}
          alt="Galaxy"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            borderRadius: "16px",
          }}
        />
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: COLORS.black, mb: 1 }}
          >
            Únete a nuestra comunidad
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: COLORS.green300, mb: 2 }}
          >
            PHI ALLIANCE
          </Typography>

          <Box sx={{ textAlign: "left" }}>
            <Button
              href={JOIN_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                borderColor: COLORS.green300,
                borderRadius: "30px",
                color: COLORS.green300,
                fontSize: SIZES.fontSizeLarge,
                textDecoration: "none",
                transition: "background 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: COLORS.green300,
                  color: COLORS.white,
                  "& .icon-circle": {
                    backgroundColor: COLORS.white,
                    color: COLORS.green300,
                  },
                },
              }}
            >
              Únete
              <NorthEastIcon
                className="icon-circle"
                sx={{
                  marginLeft: "0.5rem",
                  padding: "0.3rem",
                  color: COLORS.white,
                  background: COLORS.green300,
                  borderRadius: "50%",
                  fontSize: SIZES.iconFontSize,
                }}
              />
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Sección Inferior */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          mt: 6,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "30%" }, mb: { xs: 4, md: 0 } }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: COLORS.black, mb: 1 }}
          >
            Sé parte
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: COLORS.green300,
              marginBottom: "1rem",
            }}
          >
            del cambio exponencial
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            En PHI Alliance, estamos convencidos de que el cambio global
            comienza con pequeñas acciones individuales que, juntas, tienen el
            poder de transformar vidas y comunidades.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            Este es tu espacio para soñar, actuar y ser parte de un movimiento
            que busca multiplicar el impacto positivo en el mundo.
          </Typography>
          <Typography variant="body1">
            <strong>Contribuye según tu talento, compromiso o recursos.</strong>{" "}
            Cada esfuerzo suma, cada apoyo cuenta. Tú decides cómo quieres
            formar parte de esta misión.
          </Typography>
          <Box
            component="img"
            src={Estrellas}
            alt="Estrellas"
            sx={{
              display:{xs:"none", md:"block"},
              position: "relative",
              top: { xs: "-30rem", md: "-30rem" },
              left: { xs: "60%", md: "105%" },
              width: { xs: "4rem", md: "4rem" },
              height: "auto",
              margin: "1rem",
            }}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "60%" },marginLeft:"auto" }}>
          <List>
            {listData.map((item, index) => (
              <ListItem
                key={index}
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  border: "1px #737373 solid",
                  borderRadius: "50px",
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  "&:hover": {
                    backgroundColor: "#e0f7fa",
                  },
                }}
                onClick={() => toggleExpand(index)}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <ListItemText primary={item.text} />
                  <IconButton>
                    {expanded === index ? <RemoveIcon /> : <AddIcon />}
                  </IconButton>
                </Box>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <Box
                    sx={{
                      fontWeight: "italic",
                      mt: 2,
                      borderRadius: "24px",
                      padding: "0.5rem 1rem",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      gap: "1rem",
                    }}
                  >
                    {item.detail}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <CustomButton href="/join" text="Únete" />
                    </Box>
                  </Box>
                </Collapse>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}
