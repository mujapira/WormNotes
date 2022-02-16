import { EditNote } from "./EditNote"
import * as S from './styles';
import { SidebarProvider } from "../../contexts/SidebarContext";
import { useSidebar } from "../../hooks/useSidebar";

export function Workspace() {
    const sidebarState = useSidebar()

    return (
        <SidebarProvider>
            <S.Wrapper>
                <S.Content>
                    <EditNote />
                </S.Content>
            </S.Wrapper>
        </SidebarProvider>
    )
}
