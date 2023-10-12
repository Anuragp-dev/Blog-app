import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';






function App() {
 
  return (
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
       
      </Routes>
      


    
    </BrowserRouter>
    

    
      
   
   
  );
}

export default App;
