// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCI7v2fotPgvFVjiouc7D8ZmfiAYgzd06s",
    authDomain: "ths-auth-153b3.firebaseapp.com",
    projectId: "ths-auth-153b3",
    storageBucket: "ths-auth-153b3.appspot.com",
    messagingSenderId: "559018749701",
    appId: "1:559018749701:web:c540ac52a823e3822f916c",
    measurementId: "G-0G7CYGYQWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics };
export default app;