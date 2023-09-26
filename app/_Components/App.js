"use client"
import './App.css';

import React, { useState, useEffect } from 'react';

import Clicker from './Clicker';
import Counter from './Counter';
import Buildings from './Buildings';
import Shop from './Shop';
import BuildingData from './buildingData';
import Farm from './Farm'

function App(props) {
  const [count, setCount] = useState(0.0);
  const [buildings, setBuildings] = useState(null);
  const [plants, setPlants] = useState(new Array(10).fill(-1)); // Array of 10 filled with -1

  useEffect(() => {
    let saveData = localStorage.getItem("saveData");
    // Check if saveData in localStorage
    if(saveData != null) {
      setBuildings(() => JSON.parse(saveData)); // Load save
    } else { // Else create new save
      setBuildings(()=>BuildingData);
      localStorage.setItem("saveData", JSON.stringify(BuildingData));
    }
    }, []
  );

  // Will automatically increase count every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      let keys = Object.keys(buildings);
      for(let i = 0; i < keys.length; i++) {
        setCount((count)=> count + buildings[keys[i]].owned * buildings[keys[i]].prodSpeed);
      }
    }, 100);
    return () => clearInterval(interval);
    }, [buildings]
  );

  // Auto save
  useEffect(() => {
    const interval = setInterval(() => {
      if(buildings != null){
        console.log("Saving");
        localStorage.setItem("saveData", JSON.stringify(buildings));
      }
    }, 5000);
    return () => clearInterval(interval);
    }, [buildings]
  );

  if(buildings == null)
    return <a>Loading</a>
  else
    return (
      <div className='App m-4 gap-2'>
          <Counter className="[grid-area:counter] justify-self-center" count={count}/>
          <Clicker className="[grid-area:clicker] justify-self-center" setCount={setCount} count={count}/>   
          <Buildings className="[grid-area:buildings] bg-green-500" buildings={buildings}/>
          <Shop className="[grid-area:shop] justify-self-center" buildings={buildings} setCount={setCount} count={count}/>
          <Farm className="[grid-area:farm] justify-self-center" plants={plants} setPlants={setPlants} count={count} setCount={setCount} buildings={buildings}/>
      </div>
  ); 
}

export default App;
