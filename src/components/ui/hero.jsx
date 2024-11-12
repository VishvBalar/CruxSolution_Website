
import React from 'react';
import '../../styles/hero.css';
import herodark from '../../images/darkpage-removebg.png';
import herolight from '../../images/darkpage-removebg.png';


const Hero = ({theme}) => {
  return (<section className="hero__section" id='home'>
    <div className="container">
        <div className="hero_wrapper">

            <div className="hero_content">
              <div>
               <h2>We're Crafting Innovative</h2>
               <h2>Solutions To Drive</h2>
               <h2 className="highlight"> Your Business Forward.</h2>
              </div>
               <p className="description">We craft innovative solutions designed to accelerate your business growth and drive lasting success.</p>
               
               <div className="hero__btns">
                <button className="primary__btn">Get Started Now</button>
                <button className="secondary__btn">Discover More</button>
               </div> 
            </div>

            <div className="hero_img">
                <img src={ theme === 'light-theme'? herolight : herodark} alt="hero-img" />
            </div>
         
        </div>
    </div>
  </section>
  );
};

export default Hero;
