// import { initializeApp } from "firebase/app"
// import { getAuth, GoogleAuthProvider } from "firebase/auth"
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDDpP40it-KZkkL0RnhY5PD6p09ekg9R5s",
//   authDomain: "saas-ai-f82b2.firebaseapp.com",
//   databaseURL: "https://saas-ai-f82b2-default-rtdb.firebaseio.com",
//   projectId: "saas-ai-f82b2",
//   storageBucket: "saas-ai-f82b2.firebasestorage.app",
//   messagingSenderId: "254248692606",
//   appId: "1:254248692606:web:58ccef04d7fae9072c212f",
//   measurementId: "G-6VR0M4T42C",
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  apiKey: "AIzaSyDDpP40it-KZkkL0RnhY5PD6p09ekg9R5s",
  authDomain: "saas-ai-f82b2.firebaseapp.com",
  databaseURL: "https://saas-ai-f82b2-default-rtdb.firebaseio.com",
  projectId: "saas-ai-f82b2",
  storageBucket: "saas-ai-f82b2.firebasestorage.app",
  messagingSenderId: "254248692606",
  appId: "1:254248692606:web:58ccef04d7fae9072c212f",
  measurementId: "G-6VR0M4T42C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
