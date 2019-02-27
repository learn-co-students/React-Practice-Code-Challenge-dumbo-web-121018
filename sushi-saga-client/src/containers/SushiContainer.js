import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import _ from 'lodash'

const SushiContainer = props => {

  const allSushis = props.sushis.map(sushi => <Sushi key={sushi.id} eatenSushi={props.eatenSushi} sushi={sushi} eatSushi={props.eatSushi} money={props.money}/>)
  const fourSushis = _.chunk(allSushis, 4);

  return (
    <Fragment>
      <div className="belt">
        {
          fourSushis[props.batch]
        }
        <MoreButton fourSushis={fourSushis} moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
