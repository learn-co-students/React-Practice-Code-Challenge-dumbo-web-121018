import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi" >
      <div className="plate"
           onClick={() => props.ateSushi(props.sushi)}>
        { props.sushi.img_url && <img src={props.sushi.img_url} id={props.sushi.id} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
