

import React from 'react'
import '../../styles/blog.css'
import videoblog from '../../images/videoblog.png'
import articaleimg from '../../images/artical.png'
import casestudy from '../../images/casestudy.png'

const blogData = [
    {
      imgurl: videoblog,
      title: 'Video',
      desc: 'To Know About Work. Watch Our Video....',
      linkurl: '#',
    },
    {
        imgurl: articaleimg,
        title: 'Articles',
        desc: 'Do You Want To Know More. Read Our Articles....',
        linkurl: '#',
      },
      {
        imgurl: casestudy,
        title: 'Case Study',
        desc: 'Boost Your Conversion Rate with Our Casestudy.....',
        linkurl: '#',
      },
]

const Blog = () => {
  return (
    <section id='blog' className='blog'>
        <div className="container">
            <div className="blog_top-content">
                <h6 className="subtitle">Our Blog</h6>
                <h2>Let's Take a Look at Our <span className="highlight">Recent Blog</span></h2>
            </div>

            <div className="blog_wrapper">
               {
                blogData.map((item,index)=>(
                    <div className="blog__item" key={index}>
                    <h3>{item.title}</h3>
                    <div className="blog__img">
                        <img src={item.imgurl} alt="" />
                    </div>

                    <p className="description blog__desc">{item.desc}</p>
                    <a href={item.linkurl} className="learn__more"><i class="ri-arrow-right-line"></i></a>
                </div>
                ))
               }
            </div>
        </div>
    </section>
  )
}

export default Blog;