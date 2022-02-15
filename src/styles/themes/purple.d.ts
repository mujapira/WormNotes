import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {

        title: String;
        colors: {
            primary: string;
            secundary: string;
            backgroundDark: string;
            backgroundLight: string;
            separtor: string;
        }
    }
}