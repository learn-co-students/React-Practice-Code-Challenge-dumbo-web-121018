import React, { Component } from 'react'

class Sushi extends Component {
  state = {
    eaten: false
  }

  clickHander = () => {
    let {budget, sushi} = this.props
    if (!this.state.eaten && (budget - sushi.price) >= 0) {
      this.setState({eaten: !this.state.eaten})
      this.props.clickHander(sushi.price)
    }
  }

  render() {
    let {img_url, name, price} = this.props.sushi
    return (
      <div className="sushi">
        <div className="plate"
             onClick={(e) => this.clickHander(e)}>
          {
            this.state.eaten ?
              null
            :
              <img src={img_url} alt="" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {name}: ${price}
        </h4>
      </div>
    )
  }
}

export default Sushi
