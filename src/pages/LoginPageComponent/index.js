import React from 'react';
import { Link } from 'react-router-dom';
import '../LoginPageComponent/styles.css'


// imagens

import logoPng from "../../assets/imagens/Prancheta-8 1.png";
import fundoPretoJpg from "../../assets/imagens/Rectangle 3.jpg";
import compPng from "../../assets/imagens/image 6.png"
import eyeClosedPng from "../../assets/imagens/image 2.png"
import InputGeneticComponent from '../../presentation/generics/InputGeneticComponent';


export default function LoginPageComponent() {



  return (
    <section className="login">

      <div className="container login">
        <div className="row">
          <div className="box-content">
            <div className="col box-l">
              <img className={"logo-img"} style={{ marginLeft: '25px' }} src={logoPng} alt="" />

              <p style={{ marginTop: '43px' }} className="font-primary">Bem Vindo ao <strong>painel</strong> </p>
              <InputGeneticComponent style={{ marginTop: '21px!important' }} type="email" text="Digite seu e-mail" />
              <div style={{ display: "flex", position: "relative", width: '100%', maxWidth: '313px'}}>
                <InputGeneticComponent type="password" text="Digite a senha" />
                <button style={{ backgroundColor: "white", margin: "-20px" }} >
                  <img className="eye-closed" src={eyeClosedPng} alt="" />
                </button>
              </div>

              <Link className="btn" to="/home">acessar</Link>


            </div>
            <div className="col box-r side-bar">
              <img className="box-img" src={compPng} alt="" />
              <img src={fundoPretoJpg} alt="" />

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

