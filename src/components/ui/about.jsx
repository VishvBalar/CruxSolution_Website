

import React from 'react'
import '../../styles/about.css'
import aboutImg from '../../images/aboutus.png'

const chooseData = [
  {
     icon:'ri-wifi-line',
     title:'First Working Process',
     desc:'Our first working process involves understanding client needs, designing custom solutions, and implementing technology to ensure seamless project execution.'
  },

  {
    icon:'ri-team-line',
    title:'Dedicated Team',
    desc:'Our dedicated team at CruxSolution is committed to delivering innovative, high-quality tech solutions, ensuring client satisfaction through expertise, collaboration, and continuous support.'
 },

 {
  icon:'ri-customer-service-2-line',
  title:'24/7 Support',
  desc:'We provide 24/7 customer service to ensure that your needs are met around the clock, offering timely support and solutions anytime, anywhere.'
 },

]

function About() {
  return (
    <section id="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__content">
                  <h6 className="subtitle">Why Choose Us</h6>
                  <h2>Providing Scalable And Secure </h2>
                  <h2 className="highlight">Technology Solutions For Growth.</h2>
                  <p className="description about__content-desc">
                  We focus on delivering scalable, secure technology solutions that drive business growth. Our expertise ensures robust infrastructure, seamless integration, and future-proof innovations to help your business thrive in a digital world.</p>
                 <div className="choose_item-wrapper">
                  {
                    chooseData.map((item,index)=>(
                      <div className="choose_us-item" key={index}>
                      <span className="choose_us-icon"><i class={item.icon}></i></span>
                      <div>
                      <h4 className="choose_us-title">{item.title}</h4>
                      <p className="description">{item.desc}</p>
                      </div>
                    </div>
                    ))
                  }
                 </div>
                </div>
                <div className="about__img">
                  <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;