import React from 'react'
import { useParams } from 'react-router'
import {data} from '../../data/data'
function TourDetails() {
    const id =useParams().id;
    let currentTour=data.filter((e)=>e.id===id)[0]
    console.log(currentTour)
  return (
    <div>
        <div>
            <img src={currentTour.img} alt="" />
        </div>
        <div>
            <h1>Tour Name: {currentTour.name}</h1>
            <h3>Info: {currentTour.info}</h3>
            <h4>Price: {currentTour.price}</h4>
        </div>
    </div>
  )
}

export default TourDetails