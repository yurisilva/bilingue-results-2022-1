import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-ndAzgvPYI05JQSFw5832JXmraq97Wuc",
  authDomain: "project-x-2eeb5.firebaseapp.com",
  projectId: "project-x-2eeb5",
  storageBucket: "project-x-2eeb5.appspot.com",
  messagingSenderId: "692711725068",
  appId: "1:692711725068:web:e67c47eaedf3ff51b7b629",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getGroups = async () => {
  try {
    let groups = [];
    const querySnapshot = await getDocs(collection(db, "groups"));
    querySnapshot.forEach((doc) => {
      groups.push({ key: doc.id, value: doc.data() });
    });
    return groups;
  } catch (e) {
    console.error("Error getting groups: ", e);
  }
};

export const getStudentsByGroup = async (groupKey) => {
  let students = [];
  const ref = collection(db, "students");
  const q = query(ref, where("group", "==", groupKey.trim()));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    students.push({ key: doc.id, value: doc.data() });
  });
  return students;
};
