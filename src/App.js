import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  About,
  Home,
  Error,
  Products,
  SingleProduct,
  Cart,
  Checkout,
  Contact,
  PrivateRoute,
  AuthWrapper,
} from "./pages";

//Import Styled Components

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productID' element={<SingleProduct />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
          <Route path='cart' element={<Cart />} />
          <Route
            path='checkout'
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
