import react from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'


const App = ()=>{
  return (
    <div>
      <div className='home'>
        <Navbar/>
        <Hero/>
      
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>  

    </div>
  )
}

export default App