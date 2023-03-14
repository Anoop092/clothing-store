import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { fireBaseApp, auth } from "../firebase/firebase.util";

// it directly points to database

const db = getFirestore(fireBaseApp);

const createUserDocument = async (user, aditionalInfo) => {
  // helps to point specic document in collection, if not exists it is going to create one
  const userRefdoc = doc(db, "user", user.uid);
  // getting data from document
  const userSnapshot = await getDoc(userRefdoc);
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(userRefdoc, {
        displayName,
        email,
        createdAt,
        ...aditionalInfo,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userSnapshot;
};
const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
const LoginUser = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
const userSignOut = async () => await signOut(auth);
const onAuthChangeHandler = (callback) => onAuthStateChanged(auth, callback);
export {
  createUserDocument,
  createUserAuthWithEmailAndPassword,
  LoginUser,
  userSignOut,
  onAuthChangeHandler,
};
