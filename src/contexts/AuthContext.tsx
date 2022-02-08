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
}

export const AuthContext = createContext({} as AuthContextType)
export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;
        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account.");
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      }
    })
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
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );

}