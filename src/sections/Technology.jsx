import React,{useState,useRef} from 'react'
import data from '../Database/data'
//import Image
import TechnologyImage1 from '../Image/technology/image-launch-vehicle-landscape.jpg'
import TechnologyImage2 from '../Image/technology/image-spaceport-landscape.jpg'
import TechnologyImage3 from '../Image/technology/image-space-capsule-landscape.jpg'


function Technology() {
  const [technologyIndex,setTechnologyIndex] = useState(0)
  let technologyImage = [
    TechnologyImage1,
    TechnologyImage2,
    TechnologyImage3,
  
  ]
  let technologyNavigation = useRef()

  function changeTab(e){
    setTechnologyIndex(e.target.dataset.index)
  
    let children = technologyNavigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      child.classList.remove('active')
      
    }
    e.target.classList.add('active')

  }
  return (
    <div className='technology-section'>
       <div className='technology-subtitle'>
     <span> 03</span> SPACE LAUNCH 101
    </div>
    {
      <>
      <div className='technology-image'>
        <img src={technologyImage[technologyIndex]} alt=''/>
      </div>
      <div ref={technologyNavigation} className='technology-navigation'>
        <div data-index={0} onClick={changeTab} className='technology-tab active'>1</div>
        <div data-index={1} onClick={changeTab} className='technology-tab'>2</div>
        <div data-index={2} onClick={changeTab} className='technology-tab'>3</div>
      
      </div>
      <div className='technology-content'>
        <div className='technology-content-subtitle'>
          the technology ...
        </div>
        <div className='technology-content-name'>
          {data.technology[technologyIndex].name}
        </div>
        <div className='technology-content-body'>
          {data.technology[technologyIndex].description}
        </div>
      </div>
      </>
    }

    </div>
  )
}

export default Technology