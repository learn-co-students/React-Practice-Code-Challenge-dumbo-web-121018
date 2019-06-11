import React from 'react';

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  sushiClickHandler = () => {
    if (this.state.eaten === false && this.props.money > this.props.sushi.price) {
      this.setState({
        eaten: true
      }, () => this.props.sushiHasBeenEaten(this.props.sushi))
    }
  }

  render() {
    const {sushi, sushiHasBeenEaten} = this.props
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.sushiClickHandler}>
          { this.state.eaten
            ? null
            : <img src={sushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi
