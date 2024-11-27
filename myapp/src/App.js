import logo from './logo.svg';
import './App.css';
import  {About}  from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import States from './components/States';
import Products from './components/Products';

function App() {
  return (
    <div className='container text-primary'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/States' element={<States/>} />
        <Route path='/Products' element={<Products/>} />

        </Route>
      </Routes>
      </BrowserRouter>
     
    </div>
    
  );
}

export default App;
