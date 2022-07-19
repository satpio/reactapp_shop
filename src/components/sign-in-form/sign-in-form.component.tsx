import { FormEvent, ChangeEvent, useState } from 'react';
import { AuthError } from 'firebase/auth';
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
  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value })
  }
  const onGoogleSignInStartHandler = async () => {
    dispatch(googleSignInStart());
  }
  const emailSignInStartHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      setFormFields(defaultFormFields);
    } catch (error) {
      console.log('error', (error as AuthError).code)
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