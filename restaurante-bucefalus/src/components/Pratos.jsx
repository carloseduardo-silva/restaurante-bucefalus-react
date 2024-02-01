import React from 'react'

const Pratos = () => {
  return (
    <div class="gtco-section">
    <div class="gtco-container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center gtco-heading">
                <h2 class="cursive-font primary-color">Pratos Populares</h2>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Quem num gosta di mé, boa
                    gentis num é.</p>
            </div>
        </div>
        <div class="row">
 
            <div class="col-lg-4 col-md-4 col-sm-6">
                <a href="../images/massa-bucefalus.jpg" class="fh5co-card-item image-popup">
                    <figure>
                        <div class="overlay">
                            <i class="ti-plus"></i>
                        </div>
                        <img src="../images/massa-bucefalus.jpg" alt="Image" class="img-responsive"/>
                    </figure>
                    <div class="fh5co-text">
                        <h2>Massa ao molho de camarão flambado no vinho</h2>
                        <p>Prato individual de massa com camarões 7 barbas e rosa médio flambados no vinho</p>
                        <p>
                            <span class="price cursive-font">82.99</span>
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <a href="../images/moqueca-bucefalus" class="fh5co-card-item image-popup">
                    <figure>
                        <div class="overlay">
                            <i class="ti-plus"></i>
                        </div>
                        <img src="../images/moqueca-bucefalus" alt="Image" class="img-responsive"/>
                    </figure>
                    <div class="fh5co-text">
                        <h2>Moqueca Baiana</h2>
                        <p>Moqueca de camarão e peixe, servido com arroz branco, farofa de camarão com dendê e pirão</p>
                        <p>
                            <span class="price cursive-font">129.99</span>
                        </p>
                    </div>
                </a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <a href="../images/parmegiana-bucefalus" class="fh5co-card-item image-popup">
                    <figure>
                        <div class="overlay">
                            <i class="ti-plus"></i>
                        </div>
                        <img src="../images/parmegiana-bucefalus" alt="Image" class="img-responsive"/>
                    </figure>
                    <div class="fh5co-text">
                        <h2>Filet mignon a Parmeagiana</h2>
                        <p>Acompanhado de  arroz e batata frita. Serve de 2 a 3 pessoas.</p>
                        <p>
                            <span class="price cursive-font">29.40</span>
                        </p>
                    </div>
                </a>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Pratos
