import React,{useState,useEffect} from 'react'
import Mode from '../Components/Mode/Index';

const MainContent = () => {
  const[mode,setMode]=useState('Celcius');
  const[inputText,setInputText]=useState('Celcius');
  const[resultText,setresultText]=useState('Fahrenheit');

useEffect(()=>{
if(mode !== 'Fahrenheit'){
  setInputText('Celcius')
  setresultText('Fahrenheit')
  return
}
setInputText('Fahrenheit')
setresultText('Celcius')
},[mode])



  return (
    <div>
      <p>Temperature Converter</p>
      <Mode value={mode}/>
      <section>
        <p>{inputText}</p>
        <input type="text" />
      </section>
      <section>
        <p>{resultText}</p>
        <input type="text" readOnly/>
      </section>
    </div>
  )
}

export default MainContent