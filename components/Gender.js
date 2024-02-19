import React from 'react'

const Gender = ({gender}) => {
  return (
    <div className='card'>
        <div><h4>Gender</h4></div>

         <div>{gender?.gender}</div>
         {
        gender?.error?<div className='error' > error :{gender?.error}</div>:<></>
       } 

     {/* <div >gender</div> */}
    </div>
  )
}

export default Gender