import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
        <h4>Hritik Srivastava</h4>
        <div className="navbtn">

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Project</Link>

        </div>
    </div>
  )
}

export default Navbar
