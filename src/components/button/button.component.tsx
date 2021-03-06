import { FC, ButtonHTMLAttributes } from 'react';
import { DefaultButton, GoogleSignInButton, InvertedButton, ButtonSpinner } from './button.styles';

export enum BUTTON_TYPE_CLASSES {
  default = 'default',
  google = 'google-sign-in',
  inverted = 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default): typeof DefaultButton =>
({
  [BUTTON_TYPE_CLASSES.default]: DefaultButton,
  [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
  [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
}[buttonType]);

export type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  )
}

export default Button;