import {useEffect} from 'react'


import Nav from "../components/Nav"
import HeaderServicos from '../components/HeaderServicos'
import NossoServicos from '../components/NossoServicos'
import Frase from '../components/Frase'
import Inscrever from '../components/Inscrever'
import Footer from '../components/Footer'

const Servicos = () => {

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
    <HeaderServicos/>
    <NossoServicos/>
    <Frase/>
    <Inscrever/>
    <Footer/>
      
    </>
  )
}

export default Servicos
