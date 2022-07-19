import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import { USER_ACTION_TYPES } from './user.types';
import { User } from 'firebase/auth';
import { signInSuccess, signInFailed, signOutSuccess, signOutFailed, signUpFailed, signUpSuccess, emailSignInStart, signUpStart } from './user.action';
import { getCurrentUser, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser, createAuthUserWithEmailAndPassword, AdditionalInformation } from '../../utils/firebase/firebase.utils';

export function* signUp({ payload: { email, password, displayName } }: signUpStart) {
  try {
    const userCredential = yield* call(createAuthUserWithEmailAndPassword, email, password);
    if (userCredential) {
      const { user } = userCredential;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalInformation } }: signUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalInformation);
}

export function* getSnapshotFromUserAuth(userAuth: User, additionalInformation?: AdditionalInformation) {
  try {
    const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, additionalInformation);
    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithEmail({ payload: { email, password } }: emailSignInStart) {
  try {
    const userCredential = yield* call(signInAuthUserWithEmailAndPassword, email, password);
    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpSuccess),
    call(onSignUpStart)
  ]);
}