

import React from 'react'
import '../../styles/newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">Let's Work</h6>
                    <h2>Explore The <span className="highlight">Hidden </span> Ideas And Subscribe!</h2>
                </div>

                <div className="newsletter__form">
                    <input type="email" placeholder="Enter Your Email" />
                    <button className="secondary__btn subscribe__btn">Subscribe</button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Newsletter