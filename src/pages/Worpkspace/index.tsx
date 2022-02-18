import { EditNote } from "./EditNote"
import * as S from './styles';
import { SidebarProvider } from "../../contexts/SidebarContext";
import { useSidebar } from "../../hooks/useSidebar";
import { useAuth } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

export function Workspace() {

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
