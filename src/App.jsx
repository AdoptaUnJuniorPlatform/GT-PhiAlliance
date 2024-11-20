import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Comunidad from "./pages/Comunidad"; // Importa la nueva página Comunidad
import theme from "./theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comunidad" element={<Comunidad />} /> {/* Nueva ruta para Comunidad */}
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
