import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  const sushiList = props.sushis.map(sushi => <Sushi purchaseClick={props.purchaseClick} key={sushi.id} sushiObj={sushi}/>)

  return (
    <Fragment>
      <div className="belt">
        <button onClick={props.addCash}>Add $10</button>
        {sushiList}
        <MoreButton moreClick={props.moreClick} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
