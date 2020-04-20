import React, {Component} from 'react';

class Equipe extends Component{
        render(){
            return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo}
                idade={this.props.idade} />
            </div>
            );
        }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2> Olá sou o {this.props.nome} </h2>
                <h3>Cargo: {this.props.nome}</h3>
                <h3>Idade: {this.props.idade}</h3>
                <hr />
            </div>
        )
    }
}

function App(){
    return(
       <div>
           <h1> Conheça nossa equipe:</h1>
           <Equipe nome="Ronaldo" cargo="Desenvolvedor" idade="19"/>
           <Equipe nome="Thiago" cargo="Designer" idade="19"/>
       </div>
    );
}

export default App;