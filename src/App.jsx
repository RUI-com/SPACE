import React from 'react'
//import Section
import Home from './sections/Home'
import Crew from './sections/Crew'
import Destination from './sections/Destination'
import Technology from './sections/Technology'
// import Navbar
import Nav from './Navbar/Nav'
// Roter Dom
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
const App = () =>{
 
 
  return (
<Router>
  <div className='container'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/destination' element={<Destination/>}/>
      <Route path='/crew' element={<Crew/>}/>
      <Route path='/technology' element={<Technology/>}/>
    </Routes>
  </div>
</Router>
  )
}
export default App;
