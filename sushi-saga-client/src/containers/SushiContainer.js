import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ eatenSushi, sushi, eatSushi, money, moreSushi }) => {
  const eaten = (sushi) => {
    // if sushi is in the eaten array, default to eaten
    return !!eatenSushi.find(oneSushi => oneSushi.id === sushi.id)
  }

  return (
    <Fragment>
      <div className="belt">
        {
          sushi.map(sushi => {
            return <Sushi eaten={eaten(sushi)} key={sushi.id} sushi={sushi} eatSushi={eatSushi} money={money}/>
          })
        }
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
