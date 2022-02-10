import React from 'react'
import { useState } from 'react'

function Counter({fn}) {
  const [counter , setCounter ]= useState(0);

  const onClick=(val)=>{
      setCounter(prevState=>prevState+val);
  }

 

  return (
    <>{  fn(counter,(val)=>onClick(val)) } </>
  )
}

export default Counter 