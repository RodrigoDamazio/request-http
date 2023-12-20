import React from 'react'
//import Header from '../components/Header'
//import Section from '../components/Section'

import SegTrab from '../assets/segtrab4.avif';
import Gloves from '../assets/gloves.png'
import Worker from '../assets/worker.png'
import Training from '../assets/training.png'
import './Home.css'


const Home = () => {
  return (
    <div>
       <div className="header">
    <div className="headline">
       <h1 className=''>você achou a melhor</h1>
       <h2 clasName=''>SegTrab Digital</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aperiam,
         officiis ex sed perspiciatis non fuga sequi porro eveniet facilis suscipit 
         temporibus ut ea necessitatibus labore harum iusto, culpa et.</p>
       
    </div>
    <div class="img-headline">
      <img src={SegTrab} alt=''/>
    </div>
  </div>
  <section2>
    <h2>O que podemos fazer pelo seu negócio?</h2>
    <div className="servicos">
      <div className="card">
      <img src={Training} alt=''/>
        <div class="card-text">
          <h3>Palestra SegTrab</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aperiam,
          officiis ex sed perspiciatis non fuga sequi porro eveniet facilis suscipit 
          temporibus ut ea necessitatibus labore harum iusto, culpa et.</p>
        </div>
        <div class="ocult-text">
          <h3>Outro conteúdo qualquer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aperiam,
          officiis ex sed perspiciatis non fuga sequi porro eveniet facilis suscipit 
          temporibus ut ea necessitatibus labore harum iusto, culpa et.</p>
        </div>

      </div>
      <div class="card">
        <img src={Gloves} alt=''/>
        <div class="card-text">
          <h3>Importância dos EPIs</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aperiam,
          officiis ex sed perspiciatis non fuga sequi porro eveniet facilis suscipit 
          temporibus ut ea necessitatibus labore harum iusto, culpa et.</p>
        </div>
        <div class="ocult-text">
          <h3>Outro conteúdo qualquer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aperiam,
          officiis ex sed perspiciatis non fuga sequi porro eveniet facilis suscipit 
          temporibus ut ea necessitatibus labore harum iusto, culpa et.</p>
        </div>
      </div>
      <div class="card">
        <img src={Worker} alt=''/>
        <div class="card-text">
          <h3>Tecnico de Segurança</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aperiam,
            officiis ex sed perspiciatis non fuga sequi porro eveniet facilis suscipit 
            temporibus ut ea necessitatibus labore harum iusto, culpa et.</p>
        </div>
        <div class="ocult-text">
          <h3>Outro conteúdo qualquer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aperiam,
            officiis ex sed perspiciatis non fuga sequi porro eveniet facilis suscipit 
            temporibus ut ea necessitatibus labore harum iusto, culpa et.</p>
        </div>
      </div>
    </div>
    </section2>
    </div> 
  )
}

export default Home
