import React from 'react'

const Inscrever = () => {
  return (
    <div style={{backgroundColor:'#FBB448'}} id="gtco-subscribe">
    <div class="gtco-container">
        <div class="row animate-box">
            <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
                <h2 class="cursive-font">Se inscrever</h2>
                <p>Receba as novidades do nosso restaurante</p>
            </div>
        </div>
        <div class="row animate-box">
            <div class="col-md-8 col-md-offset-2">
                <form class="form-inline" id="form-subscribe" action="/subscribe" method="post">
                    <div class="col-md-6 col-sm-6">
                        <div class="form-group">
                            <label for="email" class="sr-only">E-mail</label>
                            <input  style={{border:"2.5px solid rgba(255, 255, 255, 0.5) !important"}} type="email" class="form-control" id="email" placeholder="Seu E-mail" name="email"/>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <button style={{backgroundColor:"white", color:  "#FBB448"}} type="submit" class="btn btn-default btn-block">Inscrever</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Inscrever
