import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css'
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
function App() {


  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-user" element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
