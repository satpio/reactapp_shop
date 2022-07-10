import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { UserContext } from '../../contexts/user.context.jsx';

import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => await signOutUser();
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
        <div className='nav-links-container'>
          {currentUser ? (
            <span className='nav-link' onClick={signOutHandler}>Sign out</span>
          ) : (
            <Link className='nav-link' to='/auth'>Sign In</Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;