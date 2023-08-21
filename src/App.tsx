import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/home/Category";
import ProductDesc from "./components/home/ProductDesc";
import CartHome from "./components/cart/CartHome";
import Footer from "./components/Footer";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/category/:categoryName/:id" element={<ProductDesc />} />
          <Route path="/cart" element={<CartHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
