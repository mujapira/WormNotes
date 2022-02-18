import { EditNote } from "./EditNote"
import * as S from './styles';
import { SidebarProvider } from "../../contexts/SidebarContext";

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
