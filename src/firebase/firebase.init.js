// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNU9ubrwS8C8s1031ckMkBJU321B51m9Y",
  authDomain: "sproutswap-client.firebaseapp.com",
  projectId: "sproutswap-client",
  storageBucket: "sproutswap-client.firebasestorage.app",
  messagingSenderId: "1038628828893",
  appId: "1:1038628828893:web:730ca44e8bbebce59d4d34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;