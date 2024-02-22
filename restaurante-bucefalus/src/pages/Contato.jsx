import {useEffect} from 'react'



import Nav from "../components/Nav"
import HeaderContato from '../components/HeaderContato'

import Footer from '../components/Footer'
const Contato = () => {

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
				
				  entry.target.classList.add('fadeInUp')
				  entry.target.classList.remove('animate-box')
				  
			  }
			  else{
				
				  entry.target.classList.remove('fadeInUp')
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
    <HeaderContato/>
    <div class="gtco-section">
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-12">
					<div class="col-md-6 animate-boxUp">
					<h3>Entre em Contato</h3>

				

					<form action="/contact" method="post">
						<div class="row form-group">
							<div class="col-md-12">
								<label class="sr-only" for="name">Nome</label>
								<input type="text" id="name" class="form-control" name="name" placeholder="Seu nome" value="Nome" />
							</div>
							
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label class="sr-only" for="email">E-mail</label>
								<input type="text" id="email" name="email" class="form-control" placeholder="Seu endereço de e-mail" value="E-mail"/>
							</div>
						</div>
						<div class="row form-group">
							<div class="col-md-12">
								<label class="sr-only" for="message">Mensagem</label>
								<textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Escreva alguma coisa"> </textarea>
							</div>
						</div>
						<div class="form-group">
							<input type="submit" value="Enviar" class="btn btn-primary"/>
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

export default Contato
