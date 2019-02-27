import React from 'react'

const MoreButton = props => {
    return <button onClick={() => props.moreSushi(props.fourSushis)}>
            More sushi!
          </button>
}

export default MoreButton
