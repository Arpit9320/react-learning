import { useContext } from "react"
import { themeData } from "./Theme";


const Navbar = () => {


    const [theme] = useContext(themeData)

  return (
    <div className="navbar">
        <h3>Something</h3>

        <h3>Home</h3>
        <h3>About</h3>
        <h3>{theme}</h3>

    </div>
  )
}

export default Navbar
