import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./componenet/Navbar";
import Women from "./pages/Women";
import Men from "./pages/Men";
import RandomAbout from "./pages/RandomAbout";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div>
      <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />
        {/* Dynamic Route  */}
        <Route path="/about/:id" element={<RandomAbout />} />

         {/* NAsted Dynamic Route */}
          <Route path="/product/men/details" element={<Details />} />
        {/* Not Found Route */}
        <Route path="/*" element={<NotFound />} />
     </Routes>
    </div>
  );
};

export default App;
