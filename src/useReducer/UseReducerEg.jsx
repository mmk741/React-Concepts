import React from 'react'
import { useReducer } from 'react'

//useReducer is similar to redux ..it also remove yhe boilerplate which is used in redux

//it is similar to actionTypes.js of redux
const ACTIONS = {                
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    CHANGE_COUNT: 'change-count'
  }
  
  //it is similar to reducer.js of redux
  function reducer(count, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return count + 1
      case ACTIONS.DECREMENT:
        return count - 1
      case ACTIONS.RESET:
        return 0
      case ACTIONS.CHANGE_COUNT:
        return count + action.payload.amount
      default:
        return count
    }
  }
  

function UseReducerEg() {

    const [count, dispatch] = useReducer(reducer, 0) //here 0 is the initial state

  return (
    <>
       <span>{count}</span>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        +
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        -
      </button>
      <button onClick={() => {
        dispatch({
          type: ACTIONS.CHANGE_COUNT,
          payload: { amount: 5 }
        })
      }}>
        Add 5
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>
        Reset
      </button>
    </>
  )
}

export default UseReducerEg