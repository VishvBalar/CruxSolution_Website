import React,{useState,useEffect} from 'react';


import './App.css';
import Header from './components/header/header';
import Hero from './components/ui/hero.jsx';
import Counter from './components/ui/counter.jsx';
import Services from './components/ui/services.jsx';
import About from './components/ui/about.jsx';
import Team from './components/ui/team.jsx';
import Blog from './components/ui/blog.jsx';
import Testimonial from './components/ui/testimonial.jsx';
import Newsletter from './components/ui/newsletter.jsx';
import Footer from './components/Footer/Footer.jsx'


function App() {

    const [theme, setTheme] = useState('');

    const toggleTheme = () => {
      theme === ''? setTheme('light-theme'): setTheme('');
    }

    useEffect(() => {
       document.body.className = theme;
    },[theme])

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Hero theme={theme}/>
      <Counter/>
      <Services/>
      <About/>
      <Team/>
      <Blog/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
