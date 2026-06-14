import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Courses from './pages/Courses';
import CoursesDetials from './pages/CoursesDetials';
import Navigate from './components/Navigate';


const App = () => {
  return (
    <div className='bg-black text-white h-screen w-full'>
      <Navbar />

      <Navigate />

      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CoursesDetials/>}/>
        <Route path='/product' element= {<Product />}>
          <Route path='mens' element= {<Men />}/>
          <Route path='womens' element= {<Women />}/>
          <Route path='kids' element= {<Kids />}/>
        </Route>
        <Route path='*' element= {<NotFound />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
