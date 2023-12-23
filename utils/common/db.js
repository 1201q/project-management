import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { dbService } from "@/utils/firebase/client";

export const observeDoc = async (collectionName, docId, callback) => {
  const ref = collection(dbService, collectionName);

  const unsubscribe = onSnapshot(ref, (snapshot) => {
    snapshot.forEach((doc) => {
      if (docId === doc.id) {
        if (callback) {
          callback(doc.data());
          return true;
        }
      }
    });
  });
};

export const updateArrayField = async (
  collectionName,
  docId,
  field,
  updateData
) => {
  const ref = doc(dbService, collectionName, docId);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    await updateDoc(ref, { [field]: arrayUnion(updateData) });
    return true;
  } else {
    await setDoc(ref, { [field]: [updateData] });
    return true;
  }
};
