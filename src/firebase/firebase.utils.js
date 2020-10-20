import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASURMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBJOXDBEOQVReWZKaMW_jd_43hTWI8MCGQ",
  authDomain: "unique-shop-228b3.firebaseapp.com",
  databaseURL: "https://unique-shop-228b3.firebaseio.com",
  projectId: "unique-shop-228b3",
  storageBucket: "unique-shop-228b3.appspot.com",
  messagingSenderId: "431307137653",
  appId: "1:431307137653:web:9f1d87f4ba10271cb2ce3c",
  measurementId: "G-N6T86J1T3Z"
};
firebase.initializeApp(firebaseConfig);
// Take user obj and store it into firestore database in users collection
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // firebase returns null
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  if (!snapShot.exists) { // does the document exists in DB
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        username: displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

//Adding shop data to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
