import React from 'react'

function ClickCounterIncrementBy1({counter ,onClick}) {

    
  return (
    <div>

  <button onClick={()=>onClick(1)}>{counter}</button>

    </div>
  )
}

export default ClickCounterIncrementBy1