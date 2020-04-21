import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "email@email.com",
            password: '',
            Sexo: ''
           
        }
        this.trocaEmail = this.trocaEmail.bind(this);
        
       
        }

        trocaEmail(e){
            let valorDigitado = e.target.value;
            this.setState({email: valorDigitado});
        }


render(){
    return(
           
        <div>
         <h2>Login</h2>
            <h3>Digite seu email:</h3>
            <input type='email' name='email' value={this.state.email}  
            onChange={this.trocaEmail}  />
           
            <h3>Digite sua senha:</h3>
            <input type='password' name='password' value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})} />
        
       <h3>Sexo:</h3>
       <select>
           <option value="Masculino">Masculino</option>
           <option value="Feminino">Feminino</option>
           <option value="outro">Outros</option>
       </select>

       <div>
    <h2>{this.state.email}
        {this.state.password}
        {this.state.Sexo}
    </h2>

       </div>
       </div>
       
        );
    }     
}
   
        
export default App;