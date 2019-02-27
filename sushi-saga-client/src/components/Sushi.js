import React, { Fragment } from 'react'

const Sushi = (props) => {
  console.log(props)
  
  let clickHandler = e =>{
console.log('Clicked a sushi',props)
e.target.src = ''
let passUp = props.sushis
props.onClick(passUp)
    }
    
    // trying to establish how to stimulate my condition to not display the image of the sushi
  return (
    <Fragment>
    <div className="sushi">
      <div className="plate" 
           onClick={clickHandler}>
        { 
          //  !clickHandler ?
          //  (
          //   <img alt= ''src='' width="100%" />
          //   )
          // :
          // (
            <img alt= ''src={props.sushis.img_url} width="100%" />
          // )
        }
      </div>
      <h4 className="sushi-details">
        {props.sushis.name} - ${props.sushis.price}
      </h4>
    </div>
    </Fragment>
  )
}

export default Sushi