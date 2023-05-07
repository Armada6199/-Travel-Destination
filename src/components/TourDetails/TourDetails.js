import React,{useState} from 'react'
import { useParams } from 'react-router'
import {data} from '../../data/data'
import './TourDetails.css'
function TourDetails() {
    const id =useParams().id;
    const [showMore,setShowMore]=useState(false)
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
            <h3 style={{maxHeight:showMore?"100%":"100px",overflow:'hidden'}}>Info: {currentTour.info} </h3>
            <button onClick={()=>setShowMore((e)=>!e)}>Show More</button>
            <h4>Price: {currentTour.price}</h4>
        </div>
      </div>
    </div>
  )
}

export default TourDetails