import { useState, useLayoutEffect, createContext, useContext } from "react";
import { auth } from "../../config/firebase/Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
// db
import { db } from "../../config/firebase/Firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  // create Account
  async function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", email), {
      favoriteContect: [],
    });
  }

  // login
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // login Out
  function logOut(email, password) {
    return signOut(auth, email, password);
  }

  useLayoutEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, user, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
