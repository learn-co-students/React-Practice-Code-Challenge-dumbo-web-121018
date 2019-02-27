import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  clickHandler = value => {
    console.log(value)
  }
  state = {
    sushis:[],
    filteredsushis:[]
  }
  // set state in app to render sushi information to the container
  componentDidMount(){
    console.log('application did mount')
    // checking for component Mount
    fetch(API)
    .then(res => res.json())
    .then(sushi => this.setState({
      sushis: sushi,
      filteredsushis: sushi
    }))
    
  }
//   changeHandler = (e) => {
// console.log('hitting this rare handler')
//   }
  render() {
    console.log('app render')
    console.log(this.state)
  
    // let sushis = this.state.sushis.map((sushi) =>{
    //   // console.log(sushi)
    //   return <SushiContainer key={sushi.id} sushis={this.state.sushis}/>
    // })


    return (
      <div className="app">
      {/* rendered sushsis to container */}
        <SushiContainer onClick={this.clickHandler}sushis={this.state.sushis}/>
        <Table sushi={this.clickHandler()} />
      
      </div>
    );
  }
}

export default App;