"use client";

import { SessionProvider } from "next-auth/react";

// The AuthProvider component renders the SessionProvider component
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
