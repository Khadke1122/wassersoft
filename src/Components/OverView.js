import React from 'react';
import LineChart from './LineChart';
import Home from './Home'
const OverView = () => {
  // overview page or 2nd page 
  return (
    <div className='overview'>
      <LineChart/>
      <Home/>
    </div>
  )
}

export default OverView
