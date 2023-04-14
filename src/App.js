import React, { useState, useEffect } from 'react'
import './App.css';
import Chart from './Chart';



function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    leaves()
  }, [])

  function leaves() {

    const data = {
    // Leaves Applied
      casualLeaves: 200,
      sickMedicalLeaves: 1300,
      annualLeaves: 1000,
      maternityLeaves: 150,
    // Total Leaves capacity 
      totalCasualLeaves: 5000,
      totalSickMedicalLeaves: 2000,
      totalAnnualLeaves: 50000,
      totalMaternityLeaves: 800
    }
    setData(data)
  }

  console.log(setData)
  return (


    <div className='container'>
      <Chart data={data} />
    </div>
  );
}

export default App;
