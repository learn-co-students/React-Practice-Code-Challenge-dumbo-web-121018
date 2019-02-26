import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushiCards = props.sushi.map(sushi => {
    return <Sushi
      key={sushi.id}
      sushi={sushi}
      budget={props.budget}
      clickHander={props.eatClickHandler}/>
  })
  return (
    <Fragment>
      <div className="belt">
        {sushiCards}
        <MoreButton clickHander={props.moreClickHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
