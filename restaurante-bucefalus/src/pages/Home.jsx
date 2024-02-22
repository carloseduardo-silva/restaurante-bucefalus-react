import React, { useEffect } from 'react'


//components
import Nav from '../components/Nav'
import Header from '../components/Header'
import Pratos from '../components/Pratos'
import NossoServicos from '../components/NossoServicos'
import Frase from '../components/Frase'
import Fatos from '../components/Fatos'
import Inscrever from '../components/Inscrever'
import Footer from '../components/Footer'

const Home = () => {

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
      <Header/>
      <Pratos/>
      <NossoServicos/>
      <Frase/>
      <Fatos/>
      <Inscrever/>
      <Footer/>
    </>
  )
}

export default Home
