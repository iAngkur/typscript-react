import React, { createContext, useContext, useState } from "react";

type LoginContextProp = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
};

const loginContext = createContext<LoginContextProp>({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn: boolean) => {},
});

function LoginContextProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </loginContext.Provider>
  );
}

export default LoginContextProvider;

export const useLoginContext = () => useContext(loginContext);
