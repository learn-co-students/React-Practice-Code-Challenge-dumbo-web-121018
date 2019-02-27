import React from 'react'

const SushiWallet = props => {
  return(
    <form onSubmit={props.addMoney}>
      <input type="number" placeholder="0" value={props.addAmount} onChange={props.increaseMoney} />
      <br />
      <button type="submit">Add money</button>
    </form>
  )
}

export default SushiWallet;
