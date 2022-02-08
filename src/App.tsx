import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"

import GlobalStyle from "./styles/global"
import regular from "./styles/themes/regular"


function App() {
  return (

    <ThemeProvider theme={regular}>
      <div className="App">
        <GlobalStyle />
        <Home />
      </div >
    </ThemeProvider>
  );
}

export default App;
