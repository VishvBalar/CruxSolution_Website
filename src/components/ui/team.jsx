

import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/team01.png'
import team02 from '../../images/team02.png'
import team03 from '../../images/team03.png'
import team04 from '../../images/team04.png'

const teamMembers = [
    {
        imgurl: team01,
        name: 'Utsav Balar',
        role: 'Android Developer'
    },
    {
        imgurl: team02,
        name: 'Sahil Balar',
        role: 'Python Developer'
    },
    {
        imgurl: team03,
        name: 'Shraddha Kapoor',
        role: 'HR'
    },
    {
        imgurl: team04,
        name: 'Vishv Balar',
        role: 'Web Developer'
    },

]

const Team = () => {
  return (
    <section className='our__team'>
        <div className="container">
            <div className="team__content">
                <h6 className="subtitle">Our Team</h6>
                <h2>Meet With <span className="highlight">Our Team</span></h2>
            </div>

            <div className="team__wrapper">
               {
                teamMembers.map((item,index)=>(
                    <div className="team__item">
                    <div className="team__img">
                        <img src={item.imgurl} alt="" />
                    </div>
                    <div className="team__deatils">
                        <h4>{item.name}</h4>
                        <p className="description">{item.role}</p>
                        <div className="team__member-social">
                            <span><i class="ri-linkedin-box-fill"></i></span>
                            <span><i class="ri-twitter-x-line"></i></span>
                        </div>
                    </div>
                </div>
                ))
               }
            </div>
        </div>
    </section>
  )
}

export default Team;