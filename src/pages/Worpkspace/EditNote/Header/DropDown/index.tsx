import * as S from './styles';
import { BsFillTrashFill } from 'react-icons/bs'
import dayjs from 'dayjs';
import { useNotes } from '../../../../../hooks/useNotes';


export function DropDown() {
    const notes = useNotes();


    function handleDelete() {
        if (!notes.current) return;
        notes.deleteById(notes.current);

    }

    const updatedAt = dayjs(notes.current?.updatedAt);
    const wasUpdatedToday = updatedAt.isSame(new Date(), 'day');
    const updatedAtFormatted = wasUpdatedToday
        ? updatedAt.format('[Today at] h:mm A')
        : updatedAt.format('YYYY/MM/DD');

    return (
            <S.Wrapper>
                <S.DeleteButton onClick={handleDelete}>
                    Delete Note
                    <BsFillTrashFill size={18} />
                </S.DeleteButton>
                <S.SeparatorA />
                <S.CreatedInfo>
                    Created: {dayjs(notes.current?.createdAt).format('YYYY/MM/DD')}
                </S.CreatedInfo>
                <S.EditedInfo>
                    Edited: {updatedAtFormatted}
                </S.EditedInfo>
            </S.Wrapper>

    )
}
