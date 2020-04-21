import React, { Component } from 'react';

class Membros extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: props.nome,
           
        };
        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.setState({nome: "Ronaldo"});
    }

    sair(){
        window.alert("Tchau");
    }

    esqueci(){
        window.alert("Você será redirecionado");
    }
   
    
    render(){
        return(
            <div>
            <h2>Bem-Vindo (a) {this.state.nome} </h2>
            <br />
            <button onClick={this.entrar}>Entrar como Ronaldo</button>&nbsp;
            <button onClick={this.sair}>Sair</button><br />
            <button onClick={this.esqueci}>Esqueci Minha Senha</button>
            </div>
        );
    }
}

export default Membros;