import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext<any>({});

export const useModalSignIn  = () => {
  return useContext(ModalContext);
}

const SignInModalProvider = (props: any) => {
  const [ showModalSignIn, setIsShowModalSignIn ] = useState<boolean>(false);

  const handleShowModal = (value: boolean) => {
    setIsShowModalSignIn(value);
  };

  const data = {
    showModalSignIn,
    handleShowModal
  };

  return (
    <ModalContext.Provider value={data}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default SignInModalProvider;
