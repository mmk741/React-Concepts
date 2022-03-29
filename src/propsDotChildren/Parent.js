import React, { Component, useState } from 'react'
import Child from './Child'

function Parent() {
const [counter, setCounter] = useState(0)

  const clickHandler=e=>{
    setCounter(preVal=>preVal+1);

  }

  return (
    <div>
      <Child data1="passing props" clickHandler={e=>{clickHandler(e)}} >
        <h5>hello i am props.children</h5>
        {counter}
      </Child>
      

    </div>
  )
}

export default Parent


