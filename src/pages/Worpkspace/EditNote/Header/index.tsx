import { useNotes } from '../../../../hooks/useNotes';
import * as S from './styles';
import { AiFillEye } from 'react-icons/ai'
import { RiEyeCloseLine } from 'react-icons/ri'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import Switch from 'react-switch';
import { DropDown } from './DropDown';
import { useState } from 'react';
import { useAuth } from '../../../../hooks/useAuth';
import { useSidebar } from '../../../../hooks/useSidebar';
export function Header() {
    const notes = useNotes()
    const userinfo = useAuth()
    const { current } = notes
    const [open, setOpen] = useState(false)
    const sidebar = useSidebar()

    function handleToggleShowAsHtml() {
        notes.toggleShowAsHtml();
    }

    if (!current) return null

    return (
        <>
            <S.Header>

                <S.Wrapper>
                        <Switch
                            onChange={sidebar.toggleSidebar}
                            checked={true}
                            checkedIcon={false}
                            uncheckedIcon={false}
                            height={12}
                            width={20}
                            handleDiameter={10}

                        />
                        <S.Title>{current.title}</S.Title>
                </S.Wrapper>

                <S.HeaderWrapper>
                    <S.WrapperClosedDropDown>
                        <S.Menu>
                            <S.ToggleHTML onClick={handleToggleShowAsHtml}>
                                {notes.showAsHtml ? <AiFillEye size={25} /> : <RiEyeCloseLine size={25} />}
                            </S.ToggleHTML>
                            <S.ToggleDropDown onClick={() => setOpen(!open)}>
                                <AiOutlineUnorderedList size={25} />
                            </S.ToggleDropDown>
                        </S.Menu >
                    </S.WrapperClosedDropDown>
                    <S.WrapperOpenedDropDown>
                        {!open &&
                            <DropDown />
                        }
                    </S.WrapperOpenedDropDown>
                </S.HeaderWrapper>

            </S.Header >
        </>

    )
}