import React from 'react'

function Child(props) {
  console.log(props);
  return (
    <div>
{props.data1}
{props.children}
<button onClick={props.clickHandler}></button>
    </div>
  )
}

export default Child