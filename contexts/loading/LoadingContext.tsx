import React, { createContext, useState } from 'react';
import Loading from '../../components/Loading';

export const LoadingContext = createContext<any>(null);

const LoadingProvider = ({ children }: any) => {
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const handleShowLoading = (value: boolean) => {
    setShowLoading(value);
  };
  const contextData = {
    handleShowLoading,
    showLoading,
  };
  return (
    <LoadingContext.Provider value={contextData}>
      {showLoading ? <Loading /> : ''}
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
