"use client";

import { createContext, useEffect, useState } from "react";

// Create a context for the theme, which will be accessible to all children components
export const ThemeContext = createContext();

// Function to retrieve the current theme from localStorage, defaulting to "light" if not set
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value;
  }
  return "light";
};

// Context provider component to wrap around the part of the app
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  // Function to toggle the theme between 'light' and 'dark'
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // useEffect hook to update localStorage whenever the theme state changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  // Render the context provider
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
