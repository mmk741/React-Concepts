import React from 'react'

function ClickCounterIncrementBy2({counter ,onClick}) {
  return (
    <div>

<button onClick={()=>onClick(2)}>{counter}</button>


    </div>
  )
}

export default ClickCounterIncrementBy2