import { updateCurrentUser } from 'firebase/auth';
import { useNotes } from '../../../../hooks/useNotes';
import * as S from './styles';
import {EyeOutline} from "@styled-icons/evaicons-outline/EyeOutline"
import {EyeOff2Outline} from "@styled-icons/evaicons-outline/EyeOff2Outline"

export function Header() {
    const notes = useNotes()
    const { current } = notes

    function handleToggleShowAsHtml() {
    }

    if (!current) return null

    return (
        <S.Header>
            <S.Title>{current.title}</S.Title>
            <S.Menu>
                <S.MenuButton onClick={handleToggleShowAsHtml}>
                </S.MenuButton>
            </S.Menu >
        </S.Header >
    )
}