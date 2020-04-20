import React from 'react';

const Equipe = (props) => {
    return( 
           <div>
            <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
           </div>
); }

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá eu sou o: {props.nome}</h2>
            <h3>Tenho {props.idade} e sou {props.cargo} deste lindo projeto}</h3>
            
            
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
        <a href={props.fb}>Facebook</a>
        <br />
        <a href={props.ig}>Instagram</a>
        </div>
    );
}

function App(){
    return(
       <div>
           <h1> Conheça nossa equipe:</h1>
           <Equipe nome="Ronaldo" idade="19" cargo="Desenvolvedor"/>
           <Social fb="www.google.com" ig="www.youtube.com" />
       </div>
    );
}

export default App;