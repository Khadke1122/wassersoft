import React from 'react';
import Designfaster from './DesignFaster';
import BubGraph from './BubGraph';
const Dashboard = () => {
  // Dashboard or 3rd page 
  return (
    <div className='dashboard'>
      <Designfaster/>
      <BubGraph/>
    </div>
  )
}

export default Dashboard
