import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={(event) => {
             props.purchaseClick(event, props.sushiObj);
           }}>
        <img src={props.sushiObj.img_url} alt="" width="100%" />
      </div>
      <h4 className="sushi-details">
        {props.sushiObj.name} - ${props.sushiObj.price}
      </h4>
    </div>
  )
}

export default Sushi
