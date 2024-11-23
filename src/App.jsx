import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Comunidad from "./pages/Comunidad"; // Importa la nueva página Comunidad
import theme from "./theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects";
import LegalPage from "./pages/LegalPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
