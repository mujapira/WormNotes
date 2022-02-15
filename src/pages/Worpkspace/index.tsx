import { Sidebar } from "./Sidebar";
import { EditNote } from "./EditNote"
import * as S from './styles';

export function Workspace() {
    return (

        <>
                <S.Wrapper>
                    <Sidebar />
                    <S.Content>
                        <EditNote />
                    </S.Content>
                </S.Wrapper>
        </>
    )
}