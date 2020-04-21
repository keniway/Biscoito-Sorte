import React, { Component } from 'react';
import Membros from './component/membros/usuarios';

class App extends Component{
    render(){
        return(
            <div>
                <Membros nome="Visitante"/>
            </div>
        );
    }
}
export default App;