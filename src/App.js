import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './views/Home';
import Sobre from "./views/Sobre";
import Contato from "./views/Contato";
import Doacao from './views/Doacao';
import Emprestar from './views/Emprestar';
import Pontos from "./views/Pontos";
import Footer from "./components/Footer";


function App() {
  return (
   
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Sobre" element={<Sobre/>} />
          <Route path="/Contato" element={<Contato/>} />
          <Route path="/Doacao" element={<Doacao/>} />
          <Route path="/Emprestar" element={<Emprestar/>} />
          <Route path="/Pontos" element={<Pontos/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
