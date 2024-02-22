import {useEffect} from 'react'

//components
import Nav from "../components/Nav"
import HeaderReserva from '../components/HeaderReserva'
import Footer from '../components/Footer'

const Reserva = () => {

    useEffect(() =>{
        const animatedElements = document.querySelectorAll('.animate-boxUp')
    
        const myObserver = new IntersectionObserver((entries) =>{
          entries.forEach(entry =>{
              if(entry.isIntersecting){
                  
                  entry.target.classList.add('show')
                  entry.target.classList.remove('animate-boxUp')
                  
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
    <HeaderReserva/>

    <div class="gtco-section" style={{paddingBottom:'12rem'}}>
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-12">
					<div class="col-md-6 animate-boxUp">
                    
                  
					        <h3>Reserva de mesa</h3>
                    <form action="/reservation" method="post">
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label for="inputName">Nome</label>
                                <input type="text" id="inputName" name="name" class="form-control" value="Nome"/>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label for="inputEmail">E-mail</label>
                                <input type="email" id="inputEmail" name="email" class="form-control" value="E-mail"/>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label for="inputPeople">Pessoas</label>
                                <select id="inputPeople" name="people" class="form-control">

                                    <option value=""> -- selecione -- </option>
                                    <option 
                                    value="1">1</option>
                                    <option  value="2">2</option>
                                    <option  value="3">3</option>
                                    <option  value="4">4</option>
                                    
                                    <option value="5" > 5+</option>

                                </select>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label for="inputDate">Data</label>
                                <input type="text" id="inputDate" name="date" class="form-control" value="Data da Reserva"/>
                            </div>
                        </div>
                        <div class="row form-group">
                            <div class="col-md-12">
                                <label for="inputTime">Hora</label>
                                <input type="text" id="inputTime" name="time" class="form-control" value="Horário"/>
                            </div>
                        </div>
                    
                        <div class="row form-group">
                            <div class="col-md-12">
                                <input type="submit" class="btn btn-primary btn-block" value="Reservar Agora"/>
                            </div>
                        </div>
                    </form>
				</div>
				<div class="col-md-5 col-md-push-1 animate-boxUp">
					
					<div class="gtco-contact-info">
						<h3 style={{marginLeft:"2.5rem"}}>Informações de Contato</h3>
                        <ul>
							<li class="address"> <i class="fa-solid fa-location-dot"></i> Rua José Avelino de Oliveira, 99 - Tombo, Guarujá/SP</li>
							<li class="phone"> <i class="fa-solid fa-phone"></i> <a href="tel://1321497360">(13) 2149-7360</a></li>
							<li class="email"> <i class="fa-solid fa-envelope"></i><a href="mailto:contato@hcode.com.br">bucefalus@gmail.com.br</a></li>
							<li class="url"> <i class="fa-solid fa-globe"></i><a href="https://bucefalus-restaurante-grill.goomer.app/">https://bucefalus-restaurante-grill.goomer.app/</a></li>
						</ul>
					</div>


				</div>
				</div>
			</div>
		</div>
	  </div>

    <Footer/>
      
    </>
  )
}

export default Reserva
