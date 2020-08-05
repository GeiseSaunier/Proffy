import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/icons/study.svg';
import giveclassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

import './styles.css';


function Landing(){
    
    return (
    
    <div id="page-landing">

      <div id="page-landing-content" className="container">

       <div className="logo-container">
         
         <img src={logoImg} alt="Proffy"/>
         <h2>Sua plataforma de estudos online.</h2>
         
         </div> 

         <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">

            <a href="" className="study">

            <img src={studyIcon} alt="Estudar"/>

                Dar aulas

            </a>


            <a href="" className="give-classes">

<img src={giveclassesIcon} alt="Estudar"/>

    Estudar

</a>


        </div>


       <span className="total-conections">
           
           
           Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
           
           </span> 


      </div>

    </div>

    );

}

export default Landing;