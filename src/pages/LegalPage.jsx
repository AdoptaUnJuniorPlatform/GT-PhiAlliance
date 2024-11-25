import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function LegalPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      {/* Contenido Principal */}
      <Box
        sx={{
          width: "100%",
          margin: "0 auto",
          padding: "2rem",
          lineHeight: "1.8",
          marginTop: "5rem",
        }}
      >
        {/* Sección: Política de Privacidad */}
        <Box
          id="privacy-policy"
          sx={{
            marginBottom: "4rem",
            scrollMarginTop: "150px",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
            Política de Privacidad PHI
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            En la Asociación Positive Human Impact Alliance (en adelante PHI
            Alliance), nos tomamos muy en serio la privacidad y la protección de
            los datos personales de nuestros usuarios. Esta Política de
            Privacidad explica cómo recopilamos, utilizamos y protegemos la
            información que nos proporcionas a través de nuestra página web.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            <strong>1. Información que recopilamos</strong> Recopilamos la
            siguiente información cuando visitas nuestra web o te registras en
            nuestros servicios:
            <ul>
              <li>Datos de contacto: nombre, correo electrónico, teléfono.</li>
              <li>
                Información sobre tu uso de la web: páginas visitadas, tiempo de
                navegación, preferencias.
              </li>
              <li>
                Detalles de las interacciones que tengas con nosotros, como
                consultas o solicitudes.
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            <strong>2. Cómo usamos tus datos</strong> Utilizamos tu información
            para:
            <ul>
              <li>Gestionar tu registro y cuenta en nuestra plataforma.</li>
              <li>Responder a tus consultas y solicitudes.</li>
              <li>Mejorar y personalizar tu experiencia en nuestra web.</li>
              <li>Enviar comunicaciones y actualizaciones relevantes.</li>
              <li>Analizar y mejorar el funcionamiento de nuestra web.</li>
            </ul>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            <strong>3. Compartir tu información</strong> No compartimos tus
            datos personales con terceros, excepto en los siguientes casos:
            <ul>
              <li>
                Cuando sea necesario para prestar los servicios que solicitaste.
              </li>
              <li>Si lo exige la ley o una orden judicial.</li>
              <li>
                Para proteger los derechos, la propiedad o la seguridad de PHI
                Alliance, nuestros usuarios u otros.
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            <strong>4. Seguridad de tus datos</strong> Implementamos medidas de
            seguridad técnicas y organizativas adecuadas para proteger tus datos
            personales contra accesos no autorizados, alteraciones, divulgación
            o destrucción.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            <strong>5. Tus derechos</strong> Conforme a la normativa de
            protección de datos, tienes derecho a:
            <ul>
              <li>
                Acceder, rectificar, suprimir o limitar el tratamiento de tus
                datos.
              </li>
              <li>
                Oponerte al tratamiento de tus datos y retirar el consentimiento
                otorgado.
              </li>
              <li>
                Presentar una reclamación ante la autoridad de control (AEPD).
              </li>
            </ul>
            Para ejercer tus derechos, ponte en contacto con nosotros a través
            del correo electrónico <strong>dpo@phialliance.org</strong>.
          </Typography>
          <Typography variant="body1">
            <strong>6. Cambios en la Política de Privacidad</strong> Nos
            reservamos el derecho de actualizar esta Política de Privacidad
            cuando sea necesario. Te notificaremos cualquier cambio relevante.
          </Typography>
        </Box>

        {/* Sección: Política de Cookies */}
        <Box
          id="cookies-policy"
          sx={{
            marginBottom: "4rem",
            scrollMarginTop: "150px",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
            Política de Cookies
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            En Asociación Positive Human Impact Alliance (en adelante PHI
            Alliance), utilizamos cookies y tecnologías similares en nuestra
            página web para mejorar tu experiencia de navegación y ofrecerte un
            servicio más personalizado.
          </Typography>
          <Typography variant="body1">
            <strong>¿Qué son las cookies?</strong> Las cookies son pequeños
            archivos de texto que se almacenan en tu dispositivo cuando visitas
            un sitio web. Nos permiten reconocerte y recordar tus preferencias,
            ofreciéndote una navegación más fluida y segura.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            <strong>Tipos de cookies que utilizamos</strong>
            <ul>
              <li>
                Cookies de sesión: Se eliminan cuando cierras el navegador.
              </li>
              <li>
                Cookies persistentes: Se mantienen en tu dispositivo durante un
                tiempo determinado.
              </li>
              <li>
                Cookies de terceros: Pueden ser de analítica (Google Analytics)
                o publicidad (redes sociales).
              </li>
            </ul>
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            <strong>¿Cómo controlar las cookies?</strong> Puedes configurar tu
            navegador para aceptar, rechazar o eliminar las cookies. Ten en
            cuenta que si rechazas las cookies, es posible que algunas
            funcionalidades de la web no funcionen correctamente.
          </Typography>
        </Box>

        {/* Sección: Aviso Legal */}
        <Box
          id="legal-notice"
          sx={{
            marginBottom: "4rem",
            scrollMarginTop: "150px",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "1rem" }}>
            Aviso Legal PHI
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
            Bienvenido a la página web de la Asociación Positive Human Impact
            Alliance (en adelante PHI Alliance), una asociación sin ánimo de
            lucro comprometida con el empoderamiento digital de la mujer a nivel
            global.
          </Typography>
          <Typography variant="body1">
            <strong>Titularidad y Gestión</strong>
            <br />
            Esta página web es propiedad de PHI Alliance y está gestionada por
            el equipo de PHI Alliance. Inscrita en el Registro Nacional de
            Asociaciones: Sección: 1a / Número Nacional: 628411.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "1rem" }}>
            <strong>Domicilio y Contacto</strong>
            <ul>
              <li>
                Domicilio: Calle Amadeo Gómez, nº 4 - 4º A. C.P. 28035 Madrid,
                España.
              </li>
              <li>Email: dpo@phialliance.org</li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
