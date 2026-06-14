import Navbar from "./components/Navbar"
import Button from "./components/button"
import { themeData } from "./components/Theme";
import { useContext } from 'react'


const App = () => {

  const [theme] = useContext(themeData)

  return (
    <div className={`${theme} main`} >
        <Navbar/>
        <Button />
    </div>
  )
}

export default App
