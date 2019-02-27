import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    sushis: [],
    more: 1,
    wallet: 100,
    purchased: [],
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }

  moreClick = (event) => {
    this.setState({
      more: this.state.more + 1
    })
  }

  purchaseClick = (event, sushiObj) => {
    if (this.state.wallet >= sushiObj.price){
      this.setState({
        wallet: this.state.wallet - sushiObj.price,
        purchased: [...this.state.purchased, sushiObj]
      });
      event.target.remove();
    }
  }

  addCash = (event) => {
    this.setState({
      wallet: this.state.wallet + 10
    })
  }

  render() {
    const sushiList = this.state.sushis.slice(`${this.state.more * 4 - 4}`, `${this.state.more * 4}`)

    return (
      <div className="app">
        <SushiContainer addCash={this.addCash} purchaseClick={this.purchaseClick} moreClick={this.moreClick} sushis={sushiList} />
        <Table wallet={this.state.wallet} purchased={this.state.purchased}/>
      </div>
    );
  }
}

export default App;
