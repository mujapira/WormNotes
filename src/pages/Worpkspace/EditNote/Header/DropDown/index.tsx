import * as S from './styles';
import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs'
import dayjs from 'dayjs';
import { useNotes } from '../../../../../hooks/useNotes';
import Switch from "react-switch"
import { useTheme } from '../../../../../hooks/useTheme';
import { ThemeContext } from "styled-components"


export function DropDown() {
    const theme = useTheme()
    const notes = useNotes();

    const { colors, title } = useContext(ThemeContext)


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
            <S.SwtichWrapper>
                Change the theme
                <Switch
                    onChange={theme.toggleTheme}
                    checked={title === "purple"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={12}
                    width={20}
                    handleDiameter={10}
                    offColor={colors.primary}
                    onColor={colors.primary}
                    />
            </S.SwtichWrapper>
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
