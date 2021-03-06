import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";
type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

type AuthContextType = {
  user: User | undefined
  signInWithGoogle: (callback?: (user: User) => void) => Promise<void>
  isLoading: boolean;
}

//DO REACT cria o componente que permite o acesso as informações de contexto para as children
export const AuthContext = createContext({} as AuthContextType)


export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //unsubscribe serve para parar de ouvir as mudanças referentes ao user
    //onAuthStateChanged é responsavel por ouvir se houve mudança no user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;
        if (!displayName || !photoURL) {
          setIsLoading(false)
          throw new Error("Missing information from Google Account.");
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
      setIsLoading(false)
    })
    //cleanup function
    return () => {
      unsubscribe();
    };
  }, [])

  async function signInWithGoogle(callback?: (user: User) => void) {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const result = await signInWithPopup(auth, provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user
      if (!displayName || !photoURL) {
        throw new Error("Missing information from Google Account.");
      }
      const user: User = {
        id: uid,
        name: displayName,
        avatar: photoURL,
      }
      setUser(user);
      if (callback) {
        callback(user)
      }
    }

  }
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, isLoading }}>
      {props.children}
    </AuthContext.Provider>
  );

}