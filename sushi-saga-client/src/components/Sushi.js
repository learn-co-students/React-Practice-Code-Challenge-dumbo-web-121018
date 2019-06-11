import React from 'react';

const Sushi = ({ eaten, sushi, eatSushi, money }) => {

  const sushiClickHandler = () => {
    if (eaten === false && money >= sushi.price) {
      eatSushi(sushi)
    }
  }

  return (
    <div className="sushi">
    <div className="plate"
    onClick={sushiClickHandler}>
    { eaten
      ? null
      : <img src={sushi.img_url} alt={sushi.name} width="100%" />
    }
      </div>
      <h4 className="sushi-details">
      {sushi.name} - ${sushi.price}
      </h4>
      </div>
    )
}

export default Sushi
