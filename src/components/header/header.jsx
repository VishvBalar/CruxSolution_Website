

import React,{useRef,useEffect} from 'react'
import './header.css';

const nav__links = [
    {
        Path:'#home',
        display:'Home'
    },

    {
        Path:'#about',
        display:'About'
    },

    {
        Path:'#service',
        display:'Service'
    },

    {
        Path:'#Projects',
        display:'Projects'
    },

    {
        Path:'#blog',
        display:'Blog'
    },
]

const Header = ({theme,toggleTheme }) => {

  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc =()=> {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header__shrink')
    }else{
        headerRef.current.classList.remove('header__shrink')
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll', headerFunc)

    return ()=> window.removeEventListener('scroll',headerFunc)

  },[]);

  const handleClick = e =>{
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
        left: 0,
        top:location-80,
    });
  };

  const togglemenu = () => menuRef.current.classList.toggle('menu__active');

  return (
    <header className='header' ref={headerRef}>
         <div className="container">
            <div className='nav__wrapper'>

                <div className="logo">
                    <h2>CruxSolution</h2>
                    {/* <p>"Your Vision, Our Tech"</p> */}
                </div>

                {/* ===== navigation ===== */}

                <div className="navigation" ref={menuRef} onClick={togglemenu}>
                    <ul className="menu">
                        {
                          nav__links.map((item,index)=>(
                            <li className="menu__item" key={index}>
                                <a href={item.Path} onClick={handleClick} className="menu__link">{item.display}</a>
                            </li>
                          ))
                        }
                    </ul>
                </div>

                {/* ==== Light mode */}
                
                <div className="light__mode">
                    <span onClick={toggleTheme}>
                        {
                         theme === 'light-theme' ? (<span><i class="ri-moon-line"></i>Dark</span> ): ( <span><i class="ri-sun-line"></i> Light</span>)
                        }
                        </span>
                </div>

                {/* ==== Mobile menu ===== */}

                <span className="mobile__menu" onClick={togglemenu}>
                  <i class="ri-menu-line"></i>
                </span>
            </div>
         </div>
    </header>

  )
}

export default Header;
