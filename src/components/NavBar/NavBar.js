import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  GiChessRook,
  GiChessKnight,
  GiChessKing,
  GiChessQueen,
  GiChessPawn,
} from "react-icons/gi";
import { FaChessBishop } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="container">
      <div className="pieces">
        <Link className="inicio" to="/">Início</Link>
        <Link to="/Peao">
          <GiChessPawn />
        </Link>
        <Link to="/Torre">
          <GiChessRook />
        </Link>
        <Link to="/Cavalo">
          <GiChessKnight />
        </Link>
        <Link to="/Bispo">
          <FaChessBishop />
        </Link>
        <Link to="/Rei">
          <GiChessKing />
        </Link>
        <Link to="/Rainha">
          <GiChessQueen />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
