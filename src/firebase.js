import {initializeApp} from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyDjmED7Zqz-Qc7_vlgjcwLP-VyhTPu-TNw",
    authDomain: "intoitcourses.firebaseapp.com",
    projectId: "intoitcourses",
    storageBucket: "intoitcourses.appspot.com",
    messagingSenderId: "276649831644",
    appId: "1:276649831644:web:1b54f915e69f4d1fd15819",
    measurementId: "G-M4F57PL8GX"
}

const firebaseApp = initializeApp(firebaseConfig)

export {
    firebaseApp
}