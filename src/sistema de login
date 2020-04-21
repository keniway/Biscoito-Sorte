import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: false
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }
    entrar(){
        this.setState({status: true});
    }
    sair(){
        this.setState({status: false});
    }
    
    render(){
        return(
            <div>
                {this.state.status ?
                
               <div>
                   <h1> Bem Vindo ao sitema </h1>
                    <button onClick={this.sair}>Fazer Logoff</button>
                </div> :
                
                <div>
                    <h2>Faça login</h2> 
                    <button onClick={this.entrar}>Fazer Login</button>
                </div>
                }
               
            </div>
        );
    }
}
export default App;