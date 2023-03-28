import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

class App extends React.Component {
  constructor(){
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.buttom2 = this.buttom2.bind(this);
    this.buttom3 = this.buttom3.bind(this);
    this.state ={
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }
  }
  handleButtonOne() {
    this.setState((prevState) => ({
      clicksBtnOne: prevState.clicksBtnOne + 1,
    }));
    console.log('Clicou no botão 1!')
  }

   buttom2(){
    this.setState((prevState) => ({
      clicksBtnTwo : prevState.clicksBtnTwo + 1,
    }));
    console.log('Clicou no botão 2!')
  }
   buttom3(){
    this.setState((prevState)=> ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }))
  }
  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
      <button
        type="button"
        onClick={ this.handleButtonOne }
      >
        {`Cliques botão 1: ${clicksBtnOne}`}
      </button>
      <button  type = 'button' 
      onClick={this.buttom2}
      >
        {`Cliques botão 2: ${clicksBtnTwo}`}
        </button>
      <button  
      type = 'button' 
      onClick={this.buttom3}
      >
        {`Cliques botão 3 : ${clicksBtnThree}`}
        </button>
      </div>
    )

  }
}

export default App;