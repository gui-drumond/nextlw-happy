import React from 'react';
import { FiArrowRight} from 'react-icons/fi';
import '../styles/global.css';
import '../styles/pages/landing.css';
import logoImg from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../styles/pages/orphanages-map.css';

function Landing(){
  return(
    <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="HAPPY"/>
    
      <main>
        <h1>Leve felicidade para o mundo</h1>
        <p>Visite orfanatos e mude o dia
          de muitas crianças.
        </p>
      </main>
      <div className="location">
        <strong>Campinas</strong>
        <span>São Paulo</span>
      </div>
      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
      </Link>
    </div>
  </div>

  );
}
export default Landing;
