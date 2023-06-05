// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCj2hy-JiAYD5tCY7M_5_GDGwAg9HFgX4",
  authDomain: "login-app-491fb.firebaseapp.com",
  projectId: "login-app-491fb",
  storageBucket: "login-app-491fb.appspot.com",
  messagingSenderId: "797211485913",
  appId: "1:797211485913:web:feaca649430021f26a40c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () =>{ 
    signInWithPopup(auth, provider)
    .then((result)=>{
        console.log(result)
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("profilePic",profilePic);
    }).catch((error)=>{
        console.log(error)
    })
};