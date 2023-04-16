// import firebase 
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// initialize empty firebase
const firebaseConfig = {
    apiKey: "AIzaSyBeLxeAL5P-cCULKmYmZW7Y3jtV7gZmyPE",
    authDomain: "emulator-9ac7e.firebaseapp.com",
    projectId: "emulator-9ac7e",
    storageBucket: "emulator-9ac7e.appspot.com",
    messagingSenderId: "307900280902",
    appId: "1:307900280902:web:b81100aaca690ddac7da47",
    measurementId: "G-0FPLHKCXZ3"
}

const app = initializeApp(firebaseConfig);


// connect to firebase emulator
const auth = getAuth()
connectAuthEmulator(auth,'http://127.0.0.1:9099');


// create new user
let email = "dwayne@gmail.com";
let password = "helloworld";


createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
})