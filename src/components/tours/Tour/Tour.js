import React from 'react'
import { Link } from 'react-router-dom'
import './Tour.css'
function Tour({data}) {
  return (
    <div className='main__tour'>
        <div>
            <img src={data.img} alt={`${data.name} pic`} />
        </div>
        <div>
          <Link className='links' to={`/city/${data.id}`}><h1>{data.name}</h1></Link>
        </div>
    </div>
  )
}

export default Tour