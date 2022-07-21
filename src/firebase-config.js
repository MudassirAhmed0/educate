import  { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXrnKMmi9kqxN1f7S09uQ4nznHJLapF_U",
  authDomain: "project-n-7007b.firebaseapp.com",
  projectId: "project-n-7007b",
  storageBucket: "project-n-7007b.appspot.com",
  messagingSenderId: "92395886379",
  appId: "1:92395886379:web:ff726a9e0afa3b3200976e",
};

const app = initializeApp(firebaseConfig);

export const  auth = getAuth(app);
