import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { Workspace } from "./pages/Worpkspace"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global"
import regular from "./styles/themes/regular"
import { AuthContextProvider } from "./contexts/AuthContext";
import { NotesProvider } from "./contexts/NotesContext"


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <NotesProvider>
          <ThemeProvider theme={regular}>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workspace" element={<Workspace />} />
            </Routes>
          </ThemeProvider>
        </NotesProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
