import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    plate: [],
    emptyPlate: [],
    money: 999999999999
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setState({
        sushi: sushi,
        plate: sushi
      })
    })
  }

  ateSushi = receivedSushi => {
    let bill = 0;
    let finishedPlate = [...this.state.emptyPlate]
    let ateTheSushi = this.state.plate.map(sushi => {
      if (sushi == receivedSushi && sushi.img_url) {
        sushi.img_url = ""
        console.log(`Ate ${sushi.name}!`)
        bill = sushi.price
        finishedPlate.push(sushi.name)
      }
      return sushi
    })

    this.setState({
      plate: ateTheSushi,
      money: this.state.money - bill,
      emptyPlate: finishedPlate
    })
  }

  


  render() {
    console.log(this.state.emptyPlate)
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} ateSushi={this.ateSushi} />
        <Table money={this.state.money} ateSushi={this.ateSushi} emptyPlate={this.state.emptyPlate} />
      </div>
    );
  }
}

export default App;
