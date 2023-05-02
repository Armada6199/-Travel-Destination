import React from 'react'
import { useParams } from 'react-router'
import {data} from '../../data/data'
import './TourDetails.css'
function TourDetails() {
    const id =useParams().id;
    function getCurrentTour(){
     return data.filter((e)=>e.id===id)[0]
    }
    let currentTour=getCurrentTour();
    
  return (
    <div >
      <div className='main__details'>
      <div>
            <img src={currentTour.img} alt="" />
        </div>
        <div>
            <h1>Tour Name: {currentTour.name}</h1>
            <h3>Info: {currentTour.info}</h3>
            <h4>Price: {currentTour.price}</h4>
        </div>
      </div>
    </div>
  )
}

export default TourDetails