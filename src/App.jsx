import React, { Fragment, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Placeorder from "./pages/Placeorder";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  const [loginPopup, setloginPopup] = useState(false);

  return (
    <Fragment>
      {loginPopup ? <Login setloginPopup={setloginPopup} /> : <></>}
      <div className="app">
        <Navbar setloginPopup={setloginPopup} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/placeorder" element={<Placeorder />}></Route>
        </Routes>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
