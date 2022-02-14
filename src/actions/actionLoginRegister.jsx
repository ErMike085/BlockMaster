import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { google } from "../firebase/foribaseConfig";

export const loginGoogle = () => {
  return () => {
    const auth = getAuth();
    signInWithPopup(auth, google).catch((e) => console.log(e));
  };
};

export const loginAsincrono = (email, password) => {
  return () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).catch((e) => alert("Usuario no encontrado, por favor registrate."));
  };
};

export const logout = () => {
  return () => {
    const auth = getAuth();
    signOut(auth).catch((e) => console.log(e));
  };
};

export const registerAsincrono = (email, password, name) => {
  return () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async () => {
        await updateProfile(auth.currentUser, { displayName: name });
      })
      .catch((e) => console.log(e));
  };
};
