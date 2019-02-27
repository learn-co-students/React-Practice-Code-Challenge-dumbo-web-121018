import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';


// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushis:[],
    batch: 0,
    eatenSushi: [],
    money: 100,
    addAmount: 0
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({ sushis }))
  }

  moreSushi = (fourSushis) => {
    this.state.batch < (fourSushis.length - 1) ? this.setState({ batch: this.state.batch+1 }) : this.setState({ batch: 0 });
  }

  eatSushi = (sushi) => {
    const newlyEatenSushi = [...this.state.eatenSushi, sushi]
    this.state.eatenSushi.includes(sushi) ?
    null
    :
    this.setState({
      eatenSushi: newlyEatenSushi,
      money: this.state.money-(sushi.price)
     })
  }

  increaseMoney = (e) => {
    this.setState({ addAmount: e.target.value })
  }

  addMoney = (e) => {
    e.preventDefault();
    this.setState({ money: this.state.money + parseInt(this.state.addAmount) });
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} batch={this.state.batch} moreSushi={this.moreSushi} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi} money={this.state.money}/>
        <Table sushis={this.state.sushis} money={this.state.money} eatenSushi={this.state.eatenSushi}/>
        <SushiWallet addAmount={this.state.addAmount} increaseMoney={this.increaseMoney} addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;
