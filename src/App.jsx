import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Cart from "./component/Cart";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/home" element={<Body searchText={searchText} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
