import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx"
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Cart from './components/Cart.jsx';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  )
}
export default App