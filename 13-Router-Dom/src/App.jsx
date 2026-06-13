import { Routes, Route } from 'react-router'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";


const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        
        <Route path='*' element={<NotFound />} />


      </Routes>


    </div>
  )
}

export default App