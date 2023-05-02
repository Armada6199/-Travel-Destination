import React from 'react'
import { data } from '../../data/data'
import Tour from './Tour/Tour'
import './Tours.css'
function Tours() {
  return (
    <div className='main__tours'>
      {data.map((data)=>
      <Tour key={data.id} data={data}/>
      )}
    </div>
  )
}

export default Tours