import './App.css';
import {  BrowserRouter, Route, Routes  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Home';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div>
      <ToastContainer theme='colored'></ToastContainer>
          <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/> 
                    <Route path='/login' element={<Login/>}/> 
                    <Route path='/register' element={<Register/>}/> 
                 </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
