import React from "react";
import "./Rei.css";
import NavBar from "../../components/NavBar/NavBar";
import reitabuleiro from "../images/reitabuleiro.png";
import reitabuleiroj from "../images/reitabuleiroj.png";
import rei from "../images/rei.jpg";

const Rei = () => {
  return (
    <div className="peao_container4">
      <NavBar />
      <div className="frame4">
        <div className="bloco4">
          <div className="nome_peca4">
            <span>oi</span>
          </div>
          <div className="bloco_foto4">
            {/* <img src={peao} alt="peao" /> */}
          </div>
          <div className="tabuleiro4">
            <img src={rei} alt="reitabuleiro" />
            <img src={reitabuleiro} alt="reitabuleiro" />
            <img src={reitabuleiroj} alt="reitabuleiroj" />
          </div>
          <div className="obs_peca4">
            <p className="text4">
              O rei é a peça de xadrez mais importante. Lembre-se, o objetivo do
              jogo de xadrez é dar xeque-mate ao rei do adversário! No início da
              partida, cada lado tem um rei. O rei das Brancas está localizado
              em e1, enquanto o rei das Negras começa em e8.O rei não é uma peça
              muito poderosa, pois só pode se mover (ou capturar) uma casa em
              qualquer direção. Atenção: o rei não pode ser capturado! Quando um
              rei é atacado, diz-se que ele está "em xeque".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rei;
