import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushi, renderMoreSushi, sushiHasBeenEaten, money}) => {
  let sushiPlates = sushi.map(singleSushi => <Sushi sushi={singleSushi} key={singleSushi.id} sushiHasBeenEaten={sushiHasBeenEaten} money={money}/>)

  return (
    <Fragment>
      <div className="belt">
        {sushiPlates}
        <MoreButton renderMoreSushi={renderMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
