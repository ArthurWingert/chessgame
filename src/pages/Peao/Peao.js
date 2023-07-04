import React from "react";
import "./Peao.css";
import NavBar from "../../components/NavBar/NavBar";
import peao from "../images/peao.jpeg";
import peaotabuleiroj from "../images/peaotabuleiroj.png";
import peaotabuleiro from "../images/peaotabuleiro.png";

const Peao = () => {
  return (
    <div className="peao_container">
      <NavBar />
      <div className="frame">
        <div className="bloco">
          <div className="nome_peca">
            <span>oi</span>
          </div>
          <div className="bloco_foto">
            {/* <img src={peao} alt="peao" /> */}
          </div>
          <div className="tabuleiro">
            <img src={peao} alt="peaotabuleiro" />
            <img src={peaotabuleiroj} alt="peaotabuleiro" />
            <img src={peaotabuleiro} alt="peaotabuleiro" />
          </div>
          <div className="obs_peca">
            <p className="text">
              Eles andam para frente, mas só capturam na diagonal. Peões só
              podem se mover uma casa por vez, exceto em seus primeiros
              movimentos, quando podem andar por duas casas. Os peões só podem
              capturar nas casas diagonais em frente a eles. Nunca podem
              capturar para trás. Se houver uma peça imediatamente em frente ao
              peão, ele não pode se mover ou capturar aquela peça.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peao;
