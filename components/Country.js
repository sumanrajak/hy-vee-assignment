import React from 'react'

const Country = (country) => {
  return (
    <div className='card count-card' >
       <h4>  Country-ID </h4>{country?.country}
    </div>
  )
}

export default Country