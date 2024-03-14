"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";

// ThemeProvider component to apply the theme class to the entire application
const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // Conditional rendering based on the 'mounted' state.
  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
