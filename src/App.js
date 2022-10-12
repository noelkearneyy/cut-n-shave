import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/about_us' element={<h1>ABOUT US PAGE</h1>}/>
    </Routes>

    
    )
}

export default App;
