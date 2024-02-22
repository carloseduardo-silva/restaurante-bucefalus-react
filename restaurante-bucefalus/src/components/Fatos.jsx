import {useEffect} from 'react'

const Fatos = () => {

    useEffect(()=>{

        const facts = document.querySelector('#facts')
        const counter = document.querySelector('#counter')
        const optionCounter = document.querySelector('#option-counter')
        const chefsCounter = document.querySelector('#chefs-counter')
        const dateCounter = document.querySelector('#date-counter')

        const myObserver = new IntersectionObserver((entries) =>{
            
            if(entries[0].isIntersecting){


                function increment(i, max){
                    if(i > max) return;
                    setTimeout(() =>{
                        counter.innerText = i;
                        increment(i+1, max)
                    }, 530)
        
                }
                increment(1, 5)

                
                function incrementOption(i, max){
                    if(i > max) return;
                    setTimeout(() =>{
                        optionCounter.innerText = i;
                        incrementOption(i+1, max)
                    }, 70)
        
                }
                incrementOption(1, 35)


                function incrementChefs(i, max){
                    if(i > max) return;
                    setTimeout(() =>{
                        chefsCounter.innerText = i;
                        incrementChefs(i+1, max)
                    }, 330)
                }
                incrementChefs(1, 8)
                
                

                function incrementDate(i, max){
                    if(i > max) return;
                    setTimeout(() =>{
                        dateCounter.innerText = i;
                        incrementDate(i+15, max)
                    }, 20)}
                incrementDate(1, 1995)
                
            }

        })

        myObserver.observe(facts)

    })


    useEffect(()=>{
        const counter = document.querySelector('#counter')
        
        function increment(i, max){
            if(i > max) return;
            setTimeout(() =>{
                counter.innerText = i;
                increment(i+1, max)
            }, 530)

        }

        increment(1, 5)

    })

    useEffect(()=>{
        const counter = document.querySelector('#option-counter')
        
        function increment(i, max){
            if(i > max) return;
            setTimeout(() =>{
                counter.innerText = i;
                increment(i+1, max)
            }, 70)

        }

        increment(1, 35)

    })

    useEffect(()=>{
        const counter = document.querySelector('#chefs-counter')
        
        function increment(i, max){
            if(i > max) return;
            setTimeout(() =>{
                counter.innerText = i;
                increment(i+1, max)
            }, 330)

        }

        increment(1, 8)

    })

    useEffect(()=>{
        const counter = document.querySelector('#date-counter')
        
        function increment(i, max){
            if(i > max) return;
            setTimeout(() =>{
                counter.innerText = i;
                increment(i+15, max)
            }, 20)

        }

        increment(1, 1995)

    })

  return (
    <div id="gtco-counter" class="gtco-section">
    <div class="gtco-container">

        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
                <h2 class="cursive-font primary-color">Fatos</h2>
                <p>Delegadis gente finis, bibendum egestas augue arcu ut est. Cevadis im ampola pa arma uma pindureta!</p>
            </div>
        </div>

        <div id='facts' class="row">

            <div class="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                <div class="feature-center">
                    <span id='counter' class="counter js-counter" data-from="0" data-to="5" data-speed="5000" >1</span>
                    <span class="counter-label">Avaliação Média</span>

                </div>
            </div>
            <div class="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                <div class="feature-center">
                    <span id='option-counter' class="counter js-counter" >1</span>
                    <span class="counter-label">Opções de Pratos</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                <div class="feature-center">
                    <span id='chefs-counter' class="counter js-counter"  >1</span>
                    <span class="counter-label">Chefes de Cozinha</span>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 animate-box" data-animate-effect="fadeInUp">
                <div class="feature-center">
                    <span id='date-counter' class="counter js-counter" data-from="0" data-to="1985" data-speed="5000" >1</span>
                    <span class="counter-label">Desde</span>

                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Fatos
