// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZgqZULMtxsPNL-18hcO1hMafyGsvhpCU",
    authDomain: "task-management-26dbe.firebaseapp.com",
    projectId: "task-management-26dbe",
    storageBucket: "task-management-26dbe.appspot.com",
    messagingSenderId: "1048018398086",
    appId: "1:1048018398086:web:89cb573e33edf4f9d2da07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;