import * as S from './styles';
import { Header } from "./Header"
import { CreateNote } from "../CreateNote"
import { useNotes } from '../../../hooks/useNotes';
import React, { useEffect, useRef } from 'react';

export function EditNote() {

    const notes = useNotes()
    const titleRef = useRef<HTMLTemplateElement>(null)
    const { current } = notes
    const isNoteUntitled = current?.title === "untitled"

    useEffect(() => {
        if (!current) return
        if (isNoteUntitled) {
            titleRef.current?.focus()
        }
    }, [current, isNoteUntitled])

    if (!current) {
        return <CreateNote />
    }

    function handleTitleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        e.target.value = e.target.value.replace(/\n/g, "")
        const value = e.target.value
        notes.update({...current, content: e.target.value})
    }

    return (
        <S.Wrapper>
            <Header />
            <S.ScrollContainer>
                <S.Content>
                    <S.TitleInput
                        placeholder='Current Title'
                    />
                    <S.ContentInput placeholder='Start Typing' />
                </S.Content>
            </S.ScrollContainer>
            <S.ContentAsHtml />
        </S.Wrapper>
    )
}