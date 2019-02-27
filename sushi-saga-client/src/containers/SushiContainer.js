import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)

  let cannon = props.sushis.slice(0,4).map((sushiObj)=>{
        console.log(sushiObj)
        return<Sushi key={sushiObj.id} sushis={sushiObj}/>
        // setting up render for the Sushi plate to only be responsible for the number of sushi is has and no more
        // it will be the containers job to supple more sushis to the Sushi plate
  })
  return (
    <Fragment>
      <div className="belt">
        {
         cannon
        }
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer