import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    allSushi: [],
    eatenSushi: [],
    startIndex: 0,
    endIndex: 4,
    money: 1000
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({allSushi: data}))
  }

  eatSushi = sushi => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      money: this.state.money - sushi.price
    })
  }

  moreSushi = event => {
    let { allSushi, endIndex } = this.state
    if (endIndex >= allSushi.length) {
      endIndex = 0
    }
    this.setState({
      startIndex: endIndex,
      endIndex: endIndex + 4
    })
  }

  render() {
    const { allSushi, startIndex, endIndex } = this.state
    return (
      <div className="app">
        <SushiContainer
        sushi={allSushi.slice(startIndex,endIndex)}
        moreSushi={this.moreSushi}
        eatSushi={this.eatSushi}
        money={this.state.money}
        eatenSushi={this.state.eatenSushi}
        />
        <Table
        money={this.state.money}
        plates={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
