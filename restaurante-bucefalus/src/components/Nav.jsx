import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

import {useSelector} from 'react-redux'

import Item from './Item'



const Nav = () => {

    const [showMenuModal, setshowMenuModal] = useState(false)

    const { menuItems } = useSelector((rootReducer) => rootReducer.menuReducer)
    

    const toggleModalMenu = () =>{

       const body = document.querySelector('body')

       if(body.classList.contains('offcanvas2')){
        body.classList.remove('offcanvas2')
        setshowMenuModal(false)
       }
       else{
        body.classList.add('offcanvas2')
        setshowMenuModal(true)
       }

    }
    
  return (

    <nav class="gtco-nav" role="navigation">
        <div class="gtco-container">
            <div class="row">
                <div class="col-sm-4 col-xs-12">
                    <div id="gtco-logo">
                        <a href="/">Bucefalus
                            <em>!</em>
                        </a>
                    </div>
                </div>
                <div class="col-xs-8 text-right menu-1">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/servicos">Serviços</Link>
                        </li>
                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                        <li class="btn-cta">
                            <Link to="/reserva">
                                <span>Reserva</span>
                            </Link>
                        </li>

                        
                    </ul>
                </div>
               
            </div>
            <div onClick={() => toggleModalMenu() } class='btn-menu'> <i class="fa-solid fa-utensils"></i> </div>
        </div>

        <a href="#" class="js-gtco-nav-toggle gtco-nav-toggle gtco-nav-white"><i></i></a>
      
        {showMenuModal &&  
        <nav className="menuModal">
            <div className="modal_header">
            <h2>Menu</h2>
            <i onClick={() =>toggleModalMenu()} class="fa-solid fa-close"></i>
            </div>

            {menuItems.map(item => <Item itemInfo={item}></Item> )}
            
            {menuItems.length === 0 && <p> Nao foram adicionados itens ao Menu.</p>}

        </nav>}
        
    </nav>
  
  )
}

export default Nav
