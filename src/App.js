import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import './App.css';
import AboutUs from "./pages/AboutUs";
import Services from "./pages/ServicesPage";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import NotFound404 from "./pages/NotFound404";

import "animate.css/animate.min.css";

function App() { 
  
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about_us' element={<AboutUs />}/>
      <Route path='/gallery' element={<Gallery />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/contact_us' element={<ContactUs />}/>
      <Route path='*' element={<NotFound404 />}/>
    </Routes>
    );
}

export default App;
