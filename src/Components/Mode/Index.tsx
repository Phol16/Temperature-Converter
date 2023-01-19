import React, { useState } from 'react'

const Mode = ({value}):JSX.Element => {
  const[mode,setMode]=useState('Celcius');
  value = mode;

  const setCF = ():void=>{
    setMode('Celcius')
  }
  const setFC = ():void=>{
    setMode('Fahrenheit')
  }
  return (
    <section>
        <p>Select Mode:</p>
        <button onClick={setCF}>
          <p>C° - F°</p>
        </button>
        <button onClick={setFC}>
          <p>F° - C°</p>
        </button>
      </section>
  )
}

export default Mode