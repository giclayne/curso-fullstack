import "./App.css";

// 1- config react router

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//2- import pages

import Home from "./pages/Home";
import About from "./pages/About";

//3- Components

import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/**2 - Links com react router */}
        <Navbar />
        {/** 9 - Search params */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/** 4 - rota dinamica*/}
          <Route path="/products/:id" element={<Product />} />
          {/**6- nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/** 9 - Search */}
          {/**10- Redirect para outra rota que mudou */}
          <Route path="/company" element={<Navigate to="/about"/>}/>
          <Route path="/search" element={<Search/>}/>
          {/**7 - no match route */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
