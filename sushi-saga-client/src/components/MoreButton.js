import React from 'react'

const MoreButton = (props) => {
console.log(props)
  let clickHandler = e => {
    console.log('more pls')
    props.onClick()
  }
    return <button onClick={clickHandler}>
            More sushi!
          </button>
}

export default MoreButton