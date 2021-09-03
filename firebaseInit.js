import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const defaultProject = initializeApp(firebaseConfig);

let defaultFirestore = getFirestore(defaultProject);
