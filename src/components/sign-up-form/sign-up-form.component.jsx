import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignUpContainer, H2 } from './sign-up-form.styles';
import { signUpStart } from '../../store/user/user.action.js';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const signUpStartHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords must match!')
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('Email already in use!')
          break;
        default:
          console.log(error);
      }
    }
  }
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <SignUpContainer>
      <H2>Don't have an account?</H2>
      <span>Sign up with your email and password</span>
      <form onSubmit={signUpStartHandler}>
        <FormInput
          label='Display name'
          type='text'
          required
          onChange={inputChangeHandler}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label='Email'
          type='email'
          required
          onChange={inputChangeHandler}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={inputChangeHandler}
          name='password'
          value={password}
        />
        <FormInput
          label='Confirm password'
          type='password'
          required
          onChange={inputChangeHandler}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button children='Sign up' type='submit' />
      </form>
    </SignUpContainer>
  )

}

export default SignUpForm;