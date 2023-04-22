import React, { Component,Fragment } from "react";
import AnimalShow from "./AnimalShow";
import "bulma/css/bulma.css";
import "./App.css";
class App extends Component {
  state = { count: 0, animals: [] };
  render() {
    const countHandler = () => {
      return this.setState({ count: this.state.count + 1 });
    };
    const getRandomAnimal = () => {
      const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
      let number = Math.trunc(Math.random() * animals.length);

      return this.setState({
        animals: [...this.state.animals, animals[number]],
      });
    };
    const renderedAnimal = this.state.animals.map((animal, index) => {
      console.log(index);
      return <AnimalShow type={animal} key={index} />;
    });
    return ( 
      <div className="app">
        <button
          // onClick={ countHandler }
          onClick={getRandomAnimal}
          className="button is-primary"
        >
          Add Animal
        </button>
        Animals to show :
        <div className="title is-4 animal-list"> {renderedAnimal} </div>
        {/* <div>{this.state.count}</div> */}
        
      </div>
    );
  }
}
export default App;
