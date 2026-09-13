
import './App.css'


import {Routes,Route} from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import  Homepage  from './pages/Homepage.jsx';  
function App() {


  return (
   
     
    <Routes>
      <Route path="/" element={< Login />} /> 
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/register" element={<Register />} /> 
    </Routes>

   
  )
}

export default App
