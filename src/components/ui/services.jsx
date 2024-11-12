

import React from 'react'
import '../../styles/services.css'

const serviceData = [
    {
        icon:'ri-apps-line',
        title:'App Development',
        desc:'Innovative app development that focuses on user-centric design, delivering intuitive and impactful solutions for your business.'
    },

    {
        icon:'ri-code-s-slash-line',
        title:'Web Development',
        desc:'Transform your ideas into reality with our cutting-edge web development, creating websites that are powerful and user-friendly.'
    },

    {
        icon:'ri-landscape-line',
        title:'Graphic Desing',
        desc:'Transform your ideas into stunning graphics that communicate your message clearly and effectively across all platforms.'
    },

    {
        icon:'ri-rocket-line',
        title:'Digital Marketing',
        desc:'Maximize your ROI with our comprehensive digital marketing solutions, including SEO, social media, and content marketing.'
    },
];

const Services = () => {
  return (
    <section id="service">
        <div className="container">
            <div className="services__top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Elevate Your Business With</h2>
                <h2 className="highlight">Our Best Service.</h2>
            </div>

            <div className="service__item-wrapper">
               {
                serviceData.map((item,index)=>(
                    <div className="services__item" key={index}>
                    <span className="services__icon"><i class={item.icon}></i></span>
                    <h3 className="service__title">{item.title}</h3>
                    <p className="description">{item.desc}</p>
                </div>
                ))
               }
            </div>
        </div>
    </section>
  )
}

export default Services;