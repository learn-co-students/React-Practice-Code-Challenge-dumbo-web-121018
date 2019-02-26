import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eatenSushi: [],
    counter: 0,
    budget: 100
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushi => this.setState({sushi}))
  }

  moreClickHandler = () => {
    this.setState({
      counter: this.state.counter + 4
    })
  }

  eatClickHandler = (price) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, price],
      budget: this.state.budget - price
    })
  }

  render() {
    let {sushi, counter, eatenSushi, budget} = this.state
    return (
      <div className="app">
        <SushiContainer
          sushi={sushi.slice(counter, counter + 4)}
          budget={budget}
          eatClickHandler={this.eatClickHandler}
          moreClickHandler={this.moreClickHandler} />
        <Table eatenSushi={eatenSushi} budget={budget}/>
      </div>
    );
  }
}

export default App;
