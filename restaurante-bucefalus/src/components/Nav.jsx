import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
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
        </div>
    </nav>
  
  )
}

export default Nav
