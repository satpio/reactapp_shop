import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import { SignInContainer, ButtonsContainer, H2 } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  const onGoogleSignInStartHandler = async () => {
    dispatch(googleSignInStart());
  }
  const emailSignInStartHandler = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      setFormFields(defaultFormFields);
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
      <form onSubmit={emailSignInStartHandler}>
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
        <ButtonsContainer>
          <Button
            children='Sign in'
            type='submit'
          />
          <Button
            children='Sign in with Google'
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={onGoogleSignInStartHandler}
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

export default SignInForm;