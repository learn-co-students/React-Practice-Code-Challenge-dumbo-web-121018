import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    filteredSushi: [],
    eatenSushi: [],
    pageNumber: 1,
    money: 100
  }

  componentDidMount() {
    fetch(`${API}?_limit=4&_page=${this.state.pageNumber}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushi: data,
        filteredSushi: [...data]
      })
    })
  }

  sushiHasBeenEaten = sushi => {
    console.log(sushi);
    const newMoney = this.state.money - sushi.price
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      money: newMoney
    })
  }

  renderMoreSushi = () => {
    fetch(`${API}?_limit=4&_page=${this.state.pageNumber + 1}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pageNumber: this.state.pageNumber + 1,
        filteredSushi: [...data]
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.filteredSushi}
          renderMoreSushi={this.renderMoreSushi}
          sushiHasBeenEaten={this.sushiHasBeenEaten}
          money={this.state.money}/>
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money} />
      </div>
    );
  }
}

export default App;
