

import React from 'react'
import './footer.css';

const quicklinks01 = [
    {
        Path:'#',
        display:'Marketing'
    },
    {
        Path:'#',
        display:'Analytics'
    },
    {
        Path:'#',
        display:'Commerce'
    },
]

const quicklinks02 = [
    {
        Path:'#',
        display:'Pricing'
    },
    {
        Path:'#',
        display:'Documentation'
    },
    {
        Path:'#',
        display:'Guides'
    },
]

const quicklinks03 = [
    {
        Path:'#about',
        display:'About'
    },
    {
        Path:'#',
        display:'Jobs'
    },
    {
        Path:'#blog',
        display:'Blog'
    },
]


const Footer = () => {
     
    const year = new Date().getFullYear();

  return (
    <footer className="footer">
     <div className="container">
        <div className="footer__wrapper">
            <div className="footer__logo">
                <h2>CruxSolution</h2>
                <p className="description">Grow With Us</p>

                <p className="small__text description">Empowering businesses with innovative IT solutions. From app development to tech consulting, we turn your ideas into reality. Connect with us for tailored digital solutions that drive success.</p>
            </div>

            <div className="footer__quick-links">
                <h3 className="quick__links-title">Solutions</h3>
                <ul className="quick__links">
                    {
                        quicklinks01.map((item,index)=>(
                            <li className="quick__links-item" key={index}>
                                <a href={item.Path}> {item.display}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="footer__quick-links">
                <h3 className="quick__links-title">Support</h3>
                <ul className="quick__links">
                    {
                        quicklinks02.map((item,index)=>(
                            <li className="quick__links-item" key={index}>
                                <a href={item.Path}> {item.display}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="footer__quick-links">
                <h3 className="quick__links-title">Company</h3>
                <ul className="quick__links">
                    {
                        quicklinks03.map((item,index)=>(
                            <li className="quick__links-item" key={index}>
                                <a href={item.Path}> {item.display}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>


        </div>

        <p className="copyright">Copyright {year}, CruxSolution. All Rights Reserved.</p>
     </div>
    </footer>
  )
}

export default Footer;