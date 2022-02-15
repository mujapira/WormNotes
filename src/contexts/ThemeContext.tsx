import { createContext, ReactNode, useState } from 'react';
import regular from '../styles/themes/regular';
import purple from '../styles/themes/purple';
import { ThemeProvider as StyledThemeProvider } from "styled-components"

type ThemeProviderProps = {
    children: ReactNode;
}

type ThemeContextType = {
    toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeProvider({ children }: ThemeProviderProps) {

    const [theme, setTheme] = useState(regular)

    const toggleTheme = () => {
        setTheme(theme.title === "regular" ? purple : regular)
    }

    return (

        <ThemeContext.Provider
            value={{ toggleTheme }}
        >
            <StyledThemeProvider theme={theme}>

                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
}

