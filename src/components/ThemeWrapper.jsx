import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';

const ThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
      {children}
    </div>
  );
};

export default ThemeWrapper;