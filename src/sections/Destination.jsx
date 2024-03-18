import React,{useState,useRef} from 'react'
// Images
import moon from '../Image/destination/image-moon.png'
import mars from '../Image/destination/image-mars.png'
import europa from '../Image/destination/image-europa.png'
import titan from '../Image/destination/image-titan.png'
// Data
import data from '../Database/data'

function Destination() {
  const[planetNumber,setPlanetNumber]=useState(0)
  const navigation = useRef()
  let planetImages = [
    moon,
    mars,
    europa,
    titan
  ]
  function tabChange (e) {
    setPlanetNumber(e.target.dataset.index)
   
    let children =  navigation.current.children
   for (let i = 0; i < children.length; i++) {
    const child = children[i];
    child.classList.remove('active')
    
   }
   e.target.classList.add('active')
  }
  return (
    <div className='destination-section'>
      <div className='destination-content'>
        {
       
                <>
                <h1 className='destination-content-subtitle'>
        <span>01</span> PICK YOUR DESTINATON
        </h1>
        <div className='destination-content-image'>
          <img src={planetImages[planetNumber]} alt=''/>
        </div>
        <div ref={navigation} className='destination-content-navigation'>
          <div data-index={0} onClick={tabChange} className='tab active'>MOON</div>
          <div data-index={1} onClick={tabChange} className='tab'>MARS</div>
          <div data-index={2} onClick={tabChange} className='tab'>EUROPA</div>
          <div data-index={3} onClick={tabChange} className='tab'>TITAN</div>
          
        </div>
        <h1 className='destination-content-title'>
        {data.destinations[planetNumber].name}
        </h1>
        <p className='destination-content-body'>
        {data.destinations[planetNumber].description}
        </p>
        <div className='destination-content-info'>
          <div className='distance'>
            <p>AVG. DISTANCE</p>
            <h1> {data.destinations[planetNumber].distance}</h1>
          </div>
          <div className='time'>
          <p>EST. TRAVEL TIME</p>
            <h1> {data.destinations[planetNumber].travel}</h1>
          </div>
        </div>
                </>
            
            
          }


      </div>
    </div>
  )
}

export default Destination