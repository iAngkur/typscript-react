import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useLoginContext } from "./LoginContextProvider";

type RequiresAuthProp = {
  children: React.ReactNode;
};

function RequiresAuth({ children }: RequiresAuthProp) {
  const { isLoggedIn } = useLoginContext();
  const location = useLocation();

  // console.log("Location ::> ", location);

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }}  />
  );
}

export default RequiresAuth;
