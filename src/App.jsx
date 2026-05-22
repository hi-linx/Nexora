import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login/Login'
import Register from './pages/register/Register'

import './App.css'

function App() {

  return (
    <>
      <section id="center">
       
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
       </BrowserRouter>

       <footer>
        <div className="footer">
          &copy; Lucas Soares - 2026
        </div>
       </footer>
      </section>

    </>
  )
}

export default App
