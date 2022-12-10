// 2 - Links com react router
import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* 
        <Link to="/"> Home</Link>
        <Link to="/about"> Sobre</Link>
  */}
      {/**NavLInk é sobre link ativo */}
      <NavLink
        to="/"
        //Possibilidade de classe especial
        //className = {({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        {" "}
        Home
      </NavLink>
      <NavLink to="/about"> Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
