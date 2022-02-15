import { Sidebar } from "./Sidebar";
import { EditNote } from "./EditNote"
import * as S from './styles';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "../../services/firebase";

export function Workspace() {

 /*    let navigate = useNavigate()

    const userinfo = useAuth();

    useEffect(() => {
        //unsubscribe serve para parar de ouvir as mudanças referentes ao user
        //onAuthStateChanged é responsavel por ouvir se houve mudança no user
        const unsubscribe = auth.onAuthStateChanged((user) => {
          if (user) {
            const { displayName, photoURL, uid } = user;
            if (!displayName || !photoURL || !uid) {
              throw new Error("Please LogIn");
            }
          }
        })
        //cleanup function
        return () => {
          navigate(`/`);
          unsubscribe()
        };
    
      }, []) */
   

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