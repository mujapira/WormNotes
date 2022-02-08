import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { Workspace } from "./pages/Worpkspace"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global"
import regular from "./styles/themes/regular"
import { AuthContextProvider } from "./contexts/AuthContext";


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={regular}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<Workspace />} />
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
