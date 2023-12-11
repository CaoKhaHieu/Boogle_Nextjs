import React, { useState } from 'react';

import SignInEmail from './SignInEmail';
import SignInModal from './SignInModal';
import { useModalSignIn } from '../../contexts/signin-modal/SignInModalContext';
// import SignUpEmail from './SignUpEmail';

const AuthenticationModal = () => {
  const [UIModalOptions, setUIModalOptions] = useState({
    signInModal: true,
    signInEmail: false,
    signUpEmail: false,
  });

  const { showModalSignIn, handleShowModal } = useModalSignIn();

  const handleShowSignInEmail = () => {
    setUIModalOptions({
      signInModal: false,
      signInEmail: true,
      signUpEmail: false,
    });
  };
  const handleShowSignUpEmail = () => {
    setUIModalOptions({
      signInModal: false,
      signInEmail: false,
      signUpEmail: true,
    });
  };
  const handleShowSignInModal = () => {
    setUIModalOptions({
      signInModal: true,
      signInEmail: false,
      signUpEmail: false,
    });
  };

  const showLoginModal = (value: boolean) => {
    // dispatch(showModalSignInRequest(value));
  };

  return (
    <div className="modal">
      <div className="authentication-modal">
        <button className="close-modal" onClick={() => handleShowModal(false)}>
          <i className="fal fa-times"></i>
        </button>
        {UIModalOptions.signInModal ? (
          <SignInModal
            handleShowSignInEmail={handleShowSignInEmail}
            handleShowSignUpEmail={handleShowSignUpEmail}
          />
        ) : (
          ''
        )}
        {UIModalOptions.signInEmail ? (
          <SignInEmail
            handleShowSignInModal={handleShowSignInModal}
            showLoginModal={showLoginModal}
          />
        ) : (
          ''
        )}
        {/* {UIModalOptions.signUpEmail ? (
          <SignUpEmail
            handleShowSignInModal={handleShowSignInModal}
            handleShowSignInEmail={handleShowSignInEmail}
          />
        ) : (
          ''
        )} */}
      </div>
    </div>
  );
};
export default AuthenticationModal;
