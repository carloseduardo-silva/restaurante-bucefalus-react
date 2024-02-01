import React from 'react'


//components
import Nav from '../components/Nav'
import Header from '../components/Header'
import Pratos from '../components/Pratos'
import Frase from '../components/Frase'
import Fatos from '../components/Fatos'
import Inscrever from '../components/Inscrever'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <Pratos/>
      <Frase/>
      <Fatos/>
      <Inscrever/>
      <Footer/>
    </>
  )
}

export default Home
