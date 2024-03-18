import React,{useState,useRef} from 'react'
import data from '../Database/data'
import Crew1 from '../Image/crew/image-douglas-hurley.png'
import Crew2 from '../Image/crew/image-mark-shuttleworth.png'
import Crew3 from '../Image/crew/image-victor-glover.png'
import Crew4 from '../Image/crew/image-anousheh-ansari.png'
function Crew() {
  const [crewIndex,setCrewIndex] = useState(0)
  let crewImage = [
    Crew1,
    Crew2,
    Crew3,
    Crew4
  ]
  let crewNavigation = useRef()

  function changeTab(e){
    setCrewIndex(e.target.dataset.index)
  
    let children = crewNavigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active')
      
    }
    e.target.classList.add('active')

  }

  return (
  <div className='crew-section'>
    <div className='crew-subtitle'>
     <span> 02</span> meet your crew
    </div>
    {
      <>
      <div className='crew-image'>
        <img src={crewImage[crewIndex]} alt=''/>
      </div>
      <div ref={crewNavigation} className='crew-navigation'>
        <div data-index={0} onClick={changeTab} className='crew-tab active'></div>
        <div data-index={1} onClick={changeTab} className='crew-tab'></div>
        <div data-index={2} onClick={changeTab} className='crew-tab'></div>
        <div data-index={3} onClick={changeTab} className='crew-tab'></div>
      </div>
      <div className='crew-content'>
        <div className='crew-content-role'>
          {data.crew[crewIndex].role}
        </div>
        <div className='crew-content-name'>
          {data.crew[crewIndex].name}
        </div>
        <div className='crew-content-body'>
          {data.crew[crewIndex].bio}
        </div>
      </div>
      </>
    }

  </div>
  )
}

export default Crew