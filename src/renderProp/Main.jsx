import React from 'react'
import ClickCounterIncrementBy1 from './ClickCounterIncrementBy1'
import ClickCounterIncrementBy2 from './ClickCounterIncrementBy2'
import Counter from './Counter'

function Main() {
  return (
    <div>
    <Counter fn={(counter,onClick)=><ClickCounterIncrementBy1 counter={counter} onClick={onClick}/>}/>
    
    <Counter  fn={(counter,onClick)=><ClickCounterIncrementBy2  counter={counter} onClick={onClick} />}/>

    </div>
  )
}

export default Main