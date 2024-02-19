import React from 'react'

const Age = ({age}) => {
  return (
    <div className='card'>
        <div><h4>Age</h4></div>
        <div>{age?.age}</div>
       {
        age?.error?<div className='error' > error :{age?.error}</div>:<></>
       } 
    </div>
   

  )
}

export default Age