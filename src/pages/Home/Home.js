import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import fundo from "./../images/fundo.jpg";

const Home = () => {
  return (
    <div className="peao_container6">
      <NavBar />
      <div className="frame6">
        <div className="background_image">
          <div className="texto">
          <h1>Aprenda xadrez de forma rápida e fácil</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
