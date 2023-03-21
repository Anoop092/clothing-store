import {
  getFirestore,
  collection,
  writeBatch,
  doc,
  query,
  getDocs,
} from "firebase/firestore";
import { fireBaseApp } from "../firebase/firebase.util";

const db = getFirestore(fireBaseApp);

export const addCollectionandDocument = async (collectionKey, objectsToADD) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToADD.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};
export const getCollectionandDocument = async () => {
  const collectionRef = collection(db, "catageories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);

  const catageoriesMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return catageoriesMap;
};
