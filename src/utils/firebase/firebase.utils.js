import { initializeApp } from 'firebase/app';
import {
  getAuth,
  // signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB7uzSeQjETvpdNm16TjVczfBYDeOIi-D4',
  authDomain: 'reactappshop-8f4f5.firebaseapp.com',
  projectId: 'reactappshop-8f4f5',
  storageBucket: 'reactappshop-8f4f5.appspot.com',
  messagingSenderId: '979589814514',
  appId: '1:979589814514:web:02b3bfbafc94bb4268986b'
};

const firebaseApp = initializeApp(firebaseConfig);

// Google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const auth = getAuth();

// google with popup
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// google with redirect
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// create user
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user', error)
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}