// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBran-G9vN0Zk58ww4Jhhp5YIOu5Rb-dsg",
  authDomain: "shop-89c07.firebaseapp.com",
  projectId: "shop-89c07",
  storageBucket: "shop-89c07.appspot.com",
  messagingSenderId: "193379109672",
  appId: "1:193379109672:web:57b834711922017d349e1d",
  measurementId: "G-RP4VKP75HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;