import React from 'react';
import Header from './components/header';
import Navebar from './components/navebar';
import Indu from './components/indu';
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import Footer from './components/footer';
import Login from './components/login'; // Import your Login component
import Registration from './components/registration'; // Import your Registration component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

        <Header />
        <Navebar />
        <Router>
          <Routes>
            <Route path='/' element={<Indu />} />n
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/contact' element={<Contact />} />
            {/* Add routes for Login and Registration */}
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
          </Routes>
        </Router>
        <Footer />

        </>    

  );
}

export default App;
