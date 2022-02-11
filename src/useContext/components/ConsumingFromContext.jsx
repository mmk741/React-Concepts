import React , { useContext } from 'react'
import GithubContext from '../context/githubContext'


const ConsumingFromContext=()=> {

const githubContext = useContext(GithubContext)

const { loading, users } = githubContext;

console.log(loading);

  return (
    <>
      
   {loading===false?<>it is falsy</>:<>it is truthy</>}
    </>
  )
}

export default ConsumingFromContext