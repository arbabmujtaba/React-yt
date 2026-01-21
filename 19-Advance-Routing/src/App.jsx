import Navbar from './Components/Navbar.jsx'
import NavbarTop from './Components/NavbarTop.jsx'
import Footer from './Components/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Product from './Pages/Product.jsx'
import Not from './Pages/Not.jsx'
import Men from './Pages/Men.jsx'
import Women from './Pages/Women.jsx'
import Kids from './Pages/Kids.jsx'
import Courses from './Pages/Courses.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <NavbarTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Courses/:ID' element={<Courses />}/>
        <Route path='/Product' element={<Product />}>
          <Route path='Men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='Kids' element={<Kids />} />
          
          
        </Route>
        <Route path='*' element={<Not />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App