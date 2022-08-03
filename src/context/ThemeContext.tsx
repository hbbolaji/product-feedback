import React, { createContext, useState } from "react";

interface ThemeType {
  theme: boolean;
  changeTheme: () => void;
}

interface PropsType {
  children: JSX.Element;
}

export const themeContext = createContext<ThemeType>({
  theme: false,
  changeTheme() {},
});

const ThemeProvider = ({ children }: PropsType) => {
  const [theme, setTheme] = useState<boolean>(false);
  const changeTheme = () => {
    setTheme((prev) => !prev);
  };
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
