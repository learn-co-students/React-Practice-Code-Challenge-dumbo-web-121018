import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  // console.log("sushi container", props)
  state = {
    x: 0,
    y: 4
  }

  menuItems = () => {
    return this.props.sushi.slice(this.state.x, this.state.y).map(sushi => {
      return <Sushi sushi={sushi} key={sushi.id} ateSushi={this.props.ateSushi} />
    })
  }

  moreSushiClickHandler = () => {
    this.setState({
      x: this.state.x + 4,
      y: this.state.y + 4
    })
  }

  // ateSushi = eatSushi => {
  //   console.log("ate sushi")
  //   console.log(this.props.sushi)
  //   // return this.state.plate.map(sushi => {
  //   //   if (sushi === eatSushi) {
  //   //     return sushi.img_url = ""
  //   //   }
  //   //   return eatSushi
  //   // })
  // }

  render() {
    return (
      <Fragment>
        <div className="belt">
          { this.menuItems() }
          <MoreButton moreSushiClickHandler={this.moreSushiClickHandler}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
