import { createContext, ReactNode, useState } from 'react';

type SidebarProviderProps = {
    children: ReactNode;
}

type SidebarContextType = {
    sidebar: boolean
    toggleSidebar: () => void
}

export const SidebarContext = createContext({} as SidebarContextType);

export function SidebarProvider({ children }: SidebarProviderProps) {

    const [sidebar, setSidebar] = useState(true)

    const toggleSidebar = () => {
        setSidebar(sidebar === false ? true : false)
        console.log(sidebar)
    }

    return (
        <SidebarContext.Provider
            value={{ sidebar, toggleSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    );
}







/* export const SidebarButton = styled.button`
background-color:${props => props.theme.colors.secundary};
border-radius: 0.5rem;
border: none;
cursor: pointer;
position: relative;
top:0;
right: 0;
width: 3rem;
height: 2rem;

<S.SidebarButton onClick={() => setSidebar(!sidebar)} />

` */