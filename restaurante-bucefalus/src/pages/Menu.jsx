import {useEffect} from 'react'


//components
import Nav from "../components/Nav"
import HeaderMenu from '../components/HeaderMenu'
import Pratos from '../components/Pratos'
import Frase from '../components/Frase'
import Inscrever from '../components/Inscrever'
import Footer from '../components/Footer'

const Menu = () => {

  useEffect(() =>{
    const animatedElements = document.querySelectorAll('.animate-box')

    const myObserver = new IntersectionObserver((entries) =>{
      entries.forEach(entry =>{
          if(entry.isIntersecting){
              
              entry.target.classList.add('show')
              entry.target.classList.remove('animate-box')
              
          }
          else{
            
              entry.target.classList.remove('show')
          }
      })
    })

    animatedElements.forEach(el => {
        myObserver.observe(el)
    })
  })

  return (
    <>
    <Nav/>
    <HeaderMenu/>
    <Pratos/>
    <Frase/>
    <Inscrever/>
    <Footer/>
      
    </>
  )
}

export default Menu
