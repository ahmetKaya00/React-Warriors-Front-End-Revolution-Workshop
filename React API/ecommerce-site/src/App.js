import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavbarComponent from "./components/NavbarComponent"; 
import { Container } from "reactstrap";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarComponent />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
}

export default App;
