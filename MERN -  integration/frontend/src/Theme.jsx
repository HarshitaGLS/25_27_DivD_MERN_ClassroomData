import React, { createContext, useState } from 'react'
export const ThemeContext = createContext()

const Theme = ({children}) => {
    const [themeMode,setThemeMode]= useState("light")
    const darkTheme = ()=>setThemeMode("dark")
    const lightTheme = ()=>setThemeMode("light")
    const themeStyle = {
        backgroundColor:themeMode=="light"?"#fff":"#333",
        color:themeMode=="light"?"#000":"#fff",
        height:"100vh",
        transition:"all 0.3s ease"
    }
  return (
    <ThemeContext.Provider value={{themeMode,darkTheme,lightTheme}}>
       <div style={themeStyle}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default Theme
