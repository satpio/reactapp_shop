import { useState } from 'react';

import FormInput from '../form-input/form-input.component.jsx';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component.jsx';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils.js';

import {
  SignInContainer,
  ButtonsContainer,
  H2
} from './sign-in-form.styles.jsx';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      clearFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Wrong password!');
          break;
        case 'auth/user-not-found':
          alert('User not found!');
          break;
        default:
          console.log(error);
      }
    }
  }

  return (
    <SignInContainer>
      <H2>Already have an account?</H2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button
            children='Sign in'
            type='submit'
          />
          <Button
            children='Sign in with Google'
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )

}

export default SignInForm;