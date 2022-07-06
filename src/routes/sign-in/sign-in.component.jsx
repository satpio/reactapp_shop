import { signInWidthGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWidthGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <button
        onClick={logGoogleUser}
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default SignIn;