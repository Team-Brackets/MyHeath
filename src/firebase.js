import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB274TIDQgKihwKjJslKUwcCbylKazNW3U",
    authDomain: "myhealth-91b4e.firebaseapp.com",
    projectId: "myhealth-91b4e",
    storageBucket: "myhealth-91b4e.appspot.com",
    messagingSenderId: "1038418607126",
    appId: "1:1038418607126:web:6e5aac30bc23e46870c937"
}
const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
};


export default initializeAuthentication;