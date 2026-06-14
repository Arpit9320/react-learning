import React, { useContext } from 'react'
import { themeData } from "./Theme";

const Button = () => {

    const [theme, setTheme] = useContext(themeData)

    const change = ()=>{
        if(theme == "Light"){
            setTheme("Dark")
        }

        else{
            setTheme("Light")
        }
    }

  return (
    <div>
      <button className='btn' onClick={change}>Change Theme</button>
    </div>
  )
}

export default Button
