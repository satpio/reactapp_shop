import { USER_ACTION_TYPES } from './user.types';
import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { UserData, AdditionalInformation } from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';

export type checkUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type setCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>;
export type googleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type emailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string }>;
export type signInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;
export type signInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;
export type signUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string, password: string, displayName: string }>;
export type signUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: User, additionalInformation: AdditionalInformation }>;
export type signUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;
export type signOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type signOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type signOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const checkUserSession = withMatcher(
  (): checkUserSession => {
    return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
  }
);

export const setCurrentUser = withMatcher(
  (user: UserData): setCurrentUser => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
  }
);

export const googleSignInStart = withMatcher(
  (): googleSignInStart => {
    return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
  }
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): emailSignInStart => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
  }
);

export const signInSuccess = withMatcher(
  (user: UserData & { id: string }): signInSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
  }
);

export const signInFailed = withMatcher(
  (error: Error): signInFailed => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
  }
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): signUpStart => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName });
  }
);

export const signUpSuccess = withMatcher(
  (user: User, additionalInformation: AdditionalInformation): signUpSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalInformation });
  }
);

export const signUpFailed = withMatcher(
  (error: Error): signUpFailed => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
  }
);

export const signOutStart = withMatcher(
  (): signOutStart => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
  }
);

export const signOutSuccess = withMatcher(
  (): signOutSuccess => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
  }
);

export const signOutFailed = withMatcher(
  (error: Error): signOutFailed => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
  }
);