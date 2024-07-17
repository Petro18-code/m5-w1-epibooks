import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    const value = { theme, setTheme, toggleTheme };
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}