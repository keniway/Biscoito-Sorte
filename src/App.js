import React from 'react';

const BemVindo = (props) => {
        return(
            <div>
                <h2>Chama no problema {props.problem} </h2>
                <h2>Bem-Vinda(a) {props.king}</h2>
        </div> 
        ); }
function App(){
    return(
        <div>
            Olá Mundo!
            <BemVindo problem="Ronaldo" king="É eu"/>
            <h1>Curso React</h1>
        </div>
    );
}

export default App;