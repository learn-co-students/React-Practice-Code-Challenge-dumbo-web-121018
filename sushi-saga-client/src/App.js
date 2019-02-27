import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  state = {
    allSushi: [],
    eatenSushi: [],
    theMonies: 150,
    start: 0,
    end: 4
  }

  moreSushi = () =>{
    this.setState({
      start: this.state.start + 4,
      end: this.state.end + 4
    })
  }

  eatSushi = (eatedSushi) => {
    if(this.state.theMonies > eatedSushi.price){
      this.setState({
        eatenSushi: [...this.state.eatenSushi, eatedSushi],
        theMonies: this.state.theMonies - eatedSushi.price
      })
      console.log(this.state.eatenSushi)
    }
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({
      allSushi: data
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer eatSushi={this.eatSushi} moreSushi={this.moreSushi} start={this.state.start} end={this.state.end} allSushi={this.state.allSushi} eatenSushi={this.state.eatenSushi}/>
        <Table theMonies={this.state.theMonies} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
