import { ThemeProvider } from "@emotion/react";
import "./App.css";
import HomePage from "./pages/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
