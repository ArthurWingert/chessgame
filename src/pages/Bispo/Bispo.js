import React from "react";
import "./Bispo.css";
import NavBar from "../../components/NavBar/NavBar";
import bispotabuleiro from "../images/bispotabuleiro.png";
import bispotabuleiroj from "../images/bispotabuleiroj.png";
import bispo from "../images/bispo.jpeg";

const Bispo = () => {
  return (
    <div className="peao_container3">
      <NavBar />
      <div className="frame3">
        <div className="bloco3">
          <div className="nome_peca3">
            <span>oi</span>
          </div>
          <div className="bloco_foto3">
            {/* <img src={peao} alt="peao" /> */}
          </div>
          <div className="tabuleiro3">
            <img src={bispo} alt="bispotabuleiro" />
            <img src={bispotabuleiro} alt="bispotabuleiro" />
            <img src={bispotabuleiroj} alt="bispotabuleiroj" />
          </div>
          <div className="obs_peca3">
            <p className="text3">
              O bispo é considerado uma peça menor (como o cavalo) e vale três
              pontos. Um bispo pode mover na diagonal quantas casas quiser,
              desde que não seja bloqueado por suas próprias peças ou por uma
              peça inimiga. Uma maneira fácil de lembrar como um bispo pode se
              mover é imaginar que ele se move como um "X". Ele pode capturar
              uma peça do oponente movendo-se para a casa que ela ocupa,
              retirando-a do tabuleiro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bispo;
