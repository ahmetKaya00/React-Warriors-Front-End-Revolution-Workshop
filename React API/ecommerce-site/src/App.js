import React from "react";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import { Container } from "reactstrap";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App(){
  return(
    <CartProvider>
      <Router>
        <NavbarComponent/>
        <Container>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/category/:category" element={<Home/>}></Route>
            <Route path="/product/:id" element={<ProductPage/>}></Route>
            <Route path="/cart" element={<CartPage/>}></Route>
          </Routes>
        </Container>
      </Router>
  </CartProvider>
  );
}
export default App();