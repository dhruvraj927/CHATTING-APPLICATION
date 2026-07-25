import { useState } from 'react'
import{Routes, Route , Navigate} from 'react-router-dom'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
