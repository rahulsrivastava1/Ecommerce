import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Category from "./components/home/Category";
import CartHome from "./components/cart/CartHome";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/cart" element={<CartHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
