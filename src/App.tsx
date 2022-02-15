import { Home } from "./pages/Home"
import { Workspace } from "./pages/Worpkspace"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/global"

import { NotesProvider } from "./contexts/NotesContext"
import { useState } from "react";
import regular from "./styles/themes/regular"
import { AuthContextProvider } from "./contexts/AuthContext";

import { ThemeProvider } from "./contexts/ThemeContext";


function App() {


  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthContextProvider>
          <NotesProvider>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/workspace" element={<Workspace />} />
            </Routes>
          </NotesProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
