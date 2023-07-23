import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext({});

export const ThemeContextProvider = ({children}:React.PropsWithChildren) => {

    const [darkTheme, setDarkTheme] = useState(false);
    
    return (
        <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext:Function = () => useContext(ThemeContext)
