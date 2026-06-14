import React, { createContext, useState } from 'react'

export const themeData = createContext()


const Theme = (props) => {

let [theme, setTheme] = useState("Dark")
  
  
return (
    <div>
    <themeData.Provider value={[theme, setTheme]}>

      {props.children}

    </themeData.Provider>
    </div>
  

)}

export default Theme
