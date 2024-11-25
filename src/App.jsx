import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Comunidad from "./pages/Comunidad";
import theme from "./theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Projects from "./pages/Projects";
import LegalPage from "./pages/LegalPage";
import { useState } from "react";

function App() {
  const [isOpenManifiesto, setIsOpenManifiesto] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header setIsOpenManifiesto={setIsOpenManifiesto} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isOpenManifiesto={isOpenManifiesto}
                setIsOpenManifiesto={setIsOpenManifiesto}
              />
            }
          />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/legal" element={<LegalPage />} />
        </Routes>
        <Footer
          isOpenManifiesto={isOpenManifiesto}
          setIsOpenManifiesto={setIsOpenManifiesto}
        />
      </Router>
    </ThemeProvider>
  );
}

export default App;
