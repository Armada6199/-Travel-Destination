import React from 'react'
import { data } from '../../data/data'
function Tours() {
  return (
    <div>
      {data.map((data)=>
      <div key={data.id}>
        <div>   
          <img src={data.img} alt="" />
          </div>
        <h1>Name :{data.name}</h1>
      </div>
      )}
    </div>
  )
}

export default Tours