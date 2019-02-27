import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)

  let sushiList = props.allSushi.slice(props.start, props.end).map(oneSushi => <Sushi key={oneSushi.id} eatSushi={props.eatSushi} eatenSushi={props.eatenSushi} sushi={oneSushi}/>)
  return (
    <Fragment>
      <div className="belt">
        {
          sushiList
          /*
             Render Sushi components here!
          */
        }
        <MoreButton buttonHandler={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
