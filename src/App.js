import { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {


  var [user, setuser] = useState('')
  const [weather, setweather] = useState()
  const [temp, settemp] = useState('')
  const [des, setdes] = useState('')


  function wheather() {
    var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${user}&appid=09d1817fc74c1cd276699078ae11066d`)
    data.then(function (sucess) {
      console.log(sucess.data)
      setweather(sucess.data.weather[0].main)
      setdes(sucess.data.weather[0].description)
      settemp(sucess.data.main.temp)

    })
  }
  function Condition() {

    return (
      <div>
        <h3><span className='text-xl font-bold'>Weather:</span>{weather}</h3>
        <h3><span className='text-xl font-bold'>Temperature:</span>{temp}</h3>
        <h3><span className='text-xl font-bold'>Description:</span> {des}</h3>
      </div>
    )
  }

  function handlecheck(event) {
    console.log(event.target.value)
    setuser(event.target.value)
  }
  return (
    <div className='p-10 bg-black'>
      <div className='one p-10 border rounded'>
        <h1 className='text-xl font-extrabold'>Weather Report</h1>
        <p className='mb-2'>I can give you a weather report about your ciy</p>
        <input onChange={handlecheck} value={user}></input>
        <br></br>
        <button onClick={wheather}>Get Report</button>
        <Condition></Condition>
      </div>
    </div>
  );
}

export default App;
