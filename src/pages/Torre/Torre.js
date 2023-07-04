import React from "react";
import "./Torre.css";
import NavBar from "../../components/NavBar/NavBar";
import torretabuleiro from "../images/torretabuleiro.png";
import torretabuleiroj from "../images/torretabuleiroj.png";
import torre from '../images/torre.jpeg'

const Torre = () => {
  return (
    <div className="peao_container1">
      <NavBar />
      <div className="frame1">
        <div className="bloco1">
          <div className="nome_peca1">
            <span>oi</span>
          </div>
          <div className="bloco_foto1">
            {/* <img src={peao} alt="peao" /> */}
          </div>
          <div className="tabuleiro1">
            <img src={torre} alt="torretabuleiro" />
            <img src={torretabuleiro} alt="torretabuleiro" />
            <img src={torretabuleiroj} alt="torretabuleiroj" />
          </div>
          <div className="obs_peca1">
            <p className="text1">
              A torre é considerada uma peça maior (como a dama) e vale cinco
              pontos. Ela pode mover quantas casas quiser para esquerda ou
              direita (na horizontal), ou quantas casas quiser para cima ou para
              baixo (na vertical), desde que não seja bloqueada por outras
              peças. Uma maneira fácil de lembrar como uma torre pode se mover é
              imaginar que ela se move como um sinal de "+".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Torre;
