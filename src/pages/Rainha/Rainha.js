import React from "react";
import "./Rainha.css";
import NavBar from "../../components/NavBar/NavBar";
import rainhatabuleiro from "../images/rainhatabuleiro.png";
import rainhatabuleiroj from "../images/rainhatabuleiroj.png";
import rainha from "../images/rainha.jpg";

const Rainha = () => {
  return (
    <div className="peao_container5">
      <NavBar />
      <div className="frame5">
        <div className="bloco5">
          <div className="nome_peca5">
            <span>oi</span>
          </div>
          <div className="bloco_foto5">
            {/* <img src={peao} alt="peao" /> */}
          </div>
          <div className="tabuleiro5">
            <img src={rainha} alt="rainhatabuleiro" />
            <img src={rainhatabuleiroj} alt="rainhatabuleiro" />
            <img src={rainhatabuleiro} alt="rainhatabuleiroj" />
          </div>
          <div className="obs_peca5">
            <p className="text5">
              A dama é considerada uma peça maior (como a torre) e vale nove
              pontos. Pode mover quantas casas quiser na horizontal e na
              vertical (como a torre). A dama também pode mover quantas casas
              quiser na diagonal (como o bispo). Uma maneira fácil de lembrar
              como uma dama pode se mover é saber que ela se move como uma torre
              e um bispo juntos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rainha;
