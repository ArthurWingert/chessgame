import React from "react";
import "./Cavalo.css";
import NavBar from "../../components/NavBar/NavBar";
import cavalotabuleiro from "../images/cavalotabuleiro.png";
import cavalotabuleiroj from "../images/cavalotabuleiroj.png";
import cavalo from "../images/cavalo.jpeg";

const Cavalo = () => {
  return (
    <div className="peao_container2">
      <NavBar />
      <div className="frame2">
        <div className="bloco2">
          <div className="nome_peca2">
            <span>oi</span>
          </div>
          <div className="bloco_foto2">
            {/* <img src={peao} alt="peao" /> */}
          </div>
          <div className="tabuleiro2">
            <img src={cavalo} alt="cavalotabuleiro" />
            <img src={cavalotabuleiro} alt="cavalotabuleiro" />
            <img src={cavalotabuleiroj} alt="cavalotabuleirj" />
          </div>
          <div className="obs_peca2">
            <p className="text2">
              O cavalo é considerado uma peça menor (como o bispo) e vale três
              pontos. O cavalo é a única peça de xadrez que pode saltar sobre
              outra peça! Ele move uma casa para a esquerda ou para a direita na
              horizontal e depois duas casas para cima ou para baixo na
              vertical, OU ele move duas casas para a esquerda ou para a direita
              na horizontal e depois uma casa para cima ou para baixo na
              vertical - em outras palavras, o cavalo se move em "L". O cavalo
              pode capturar apenas a peça que estiver na casa onde ele parar, e
              não a peça que ele pular!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cavalo;
