import React from 'react'

function Wrapper(props) {
  return (
    <div style={{backgroundColor:"yellow",height:"10px"}}>{props.children}</div>
  )
}

export default Wrapper