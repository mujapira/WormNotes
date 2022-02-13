import { useNotes } from '../../../../hooks/useNotes';
import * as S from './styles';
import { AiFillEye } from 'react-icons/ai'
import { RiEyeCloseLine } from 'react-icons/ri'
import { AiOutlineUnorderedList } from 'react-icons/ai'

import { DropDown } from './DropDown';
import { useState } from 'react';

export function Header() {
    const notes = useNotes()
    const { current } = notes
    const [open, setOpen] = useState(false)


    function handleToggleShowAsHtml() {
    }

    if (!current) return null

    return (
        <>
            <S.Header>
                <S.Um>
                    <S.Title>{current.title}</S.Title>
                    <S.Menu>
                        <S.ToggleHTML onClick={handleToggleShowAsHtml}>
                            {notes.showAsHtml ? <AiFillEye size={25} /> : <RiEyeCloseLine size={25} />}
                        </S.ToggleHTML>
                        <S.ToggleDropDown onClick={() => setOpen(!open)}>
                            <AiOutlineUnorderedList size={25} />
                        </S.ToggleDropDown>
                    </S.Menu >
                </S.Um>
                <S.Dois>
                    {!open &&
                        <DropDown />
                    }
                </S.Dois>
            </S.Header >
        </>

    )
}