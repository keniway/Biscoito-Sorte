import React, { Component } from 'react';
import './estilo.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            textoInicial: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        
        this.frases = ['Sua luta não termina quando sentir cansaço, mas sim quando atingir o sucesso tão merecido.',
                        'Os princípios mais importantes podem e devem ser inflexíveis.',
                        'Ninguém é suficientemente competente para governar outra pessoa sem o seu consentimento.',
                        'Só tem o direito de criticar aquele que pretende ajudar.',
                        'Quando pratico o bem, sinto-me bem; quando pratico o mal, sinto-me mal. Eis a minha religião.',    
                        'SE EU TIVESSE 8 HORAS PARA CORTAR UMA ÁRVORE, GASTARIA SEIS AFIANDO MEU MACHADO', ];
    
        
        
    
    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoInicial = this.frases[numeroAleatorio];
        this.setState(state);
    }

        
        

render(){
    return(
        <div className="container">
            <img src={require('./assets/biscoito.png')} className="img" />
            <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
            <h3 className='textoInicial'>{this.state.textoInicial}</h3>
            
        </div>

        );
      }     
}
 
class Botao extends Component{

    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}


export default App;