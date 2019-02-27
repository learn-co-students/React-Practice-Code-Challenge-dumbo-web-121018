import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)

  let clickHandler = (value) =>{
console.log(value)
console.log(props)
props.onClick(value)
  };

let changeRow = () => {
console.log('in container',props)
// props.onChange()

}


  let cannon = props.sushis.slice(0,4).map((sushiObj)=>{
        console.log(sushiObj)
        return<Sushi change={changeRow}onClick={clickHandler} key={sushiObj.id} sushis={sushiObj}/>
        // setting up render for the Sushi plate to only be responsible for the number of sushi is has and no more
        // it will be the containers job to supple more sushis to the Sushi plate
  })
  return (
    <Fragment>
      <div className="belt">
       
        {
         cannon
        }
        
        <MoreButton onClick={changeRow} />
      </div>
    </Fragment>
  )
}

export default SushiContainer