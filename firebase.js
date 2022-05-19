import firebase  from "@react-native-firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDsKrWCuWufTjMrsg5IQB9tT84YjwO5fm0",
  authDomain: "foodymoody2-efcc0.firebaseapp.com",
  projectId: "foodymoody2-efcc0",
  storageBucket: "foodymoody2-efcc0.appspot.com",
  messagingSenderId: "340832027834",
  appId: "1:340832027834:web:bdcdbe2f05f148dc352e83",
  measurementId: "G-70B3FGCDS1"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;