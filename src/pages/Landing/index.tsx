import React from 'react'

import logoIMG from '../../assets/images/logo.svg'
import landingIMG from '../../assets/images/landing.svg'

import studyICON from '../../assets/images/icons/study.svg'
import giveclassesICON from '../../assets/images/icons/give-classes.svg'
import purpleHeartICON from '../../assets/images/icons/purple-heart.svg'

import { Link } from 'react-router-dom'

import './style.css'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoIMG} alt="proffy"/>
          <h2>Sua plataforma de estudo online</h2>
        </div>

        <img src={landingIMG} alt="Plataforma de estudo" className="hero-image"/>

        <div className="buttons-container">
          <Link to='/study' className="study">
            <img src={studyICON} alt="Estudar"/>
            Estudar
          </Link>

          <Link to='/give-classes'className="give-classes">
            <img src={giveclassesICON} alt="classes"/>
              Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartICON} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  )
}

export default Landing