import React, {createContext, ReactNode, useContext, useState} from 'react';

interface LayoutContextProps {
  children: ReactNode;
}

interface LayoutContextValue {
  user: string;
  setUser: (user: string) => void;
}

export const LayoutContext = createContext<LayoutContextValue>({
  user: '',
  setUser: () => {},
});

export const LayoutProvider = ({children}: LayoutContextProps) => {
  const [user, setUser] = useState('');

  const value: LayoutContextValue = {
    user,
    setUser,
  };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  return useContext(LayoutContext);
};
