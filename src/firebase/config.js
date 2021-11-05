// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJf-EFsEMrWHaHxJ1UAu9XCg7cWwfbnkU",
  authDomain: "web-journal-8f8cc.firebaseapp.com",
  projectId: "web-journal-8f8cc",
  storageBucket: "web-journal-8f8cc.appspot.com",
  messagingSenderId: "760516707327",
  appId: "1:760516707327:web:a203e6c06f60a7d8bf1dca",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
//console.log(projectFirestore);
const timestamp = firebase.firestore.ServerTimestamp;

export { projectStorage, projectFirestore, timestamp };
