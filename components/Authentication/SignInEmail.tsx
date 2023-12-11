import React, { useContext, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { LoadingContext } from '../../contexts/loading/LoadingContext';
import { NotificationContext } from '../../contexts/notification/NotificationContext';
import axios from 'axios';


interface SignInEmailPropsOptions {
  handleShowSignInModal: () => void;
  showLoginModal: (value: boolean) => void;
}

const SignInEmail = ({
  handleShowSignInModal,
  showLoginModal,
}: SignInEmailPropsOptions) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const res = await (await fetch('/api/auth/login')).json();
    console.log(res, '---')
  };

  return (
    <div className="sign-in-email">
      <h2 className="sign-in-email-title">
        Join <span className="blog-name">Boogle</span>
      </h2>
      <form className="modal-form" onSubmit={handleSubmit(onSubmit)}>
        <p className="input-description">Your email</p>
        <input
          className="form-input"
          type="text"
          {...register('email')}
        ></input>
        <p className="input-description">Your password</p>
        <input
          className="form-input"
          type="password"
          {...register('password')}
        ></input>
        <button className="btn btn-primary">Sign In</button>
      </form>
      <a href="" className="back-all-action" onClick={handleShowSignInModal}>
        <i className="fal fa-chevron-left"></i> All sign in options
      </a>
      <p className="sign-in-info">
        Click “Sign In” to agree to Boogle’s Terms of Service and acknowledge
        that Boogle’s Privacy Policy applies to you.
      </p>
    </div>
  );
};

export default SignInEmail;
