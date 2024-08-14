import { useState } from 'react'
import TextField from '@mui/material/TextField';
import './App.css';
import Button from '@mui/material/Button';
// import Weathercard from './Weathercard';

import './App.css'
import Weathercard from './Weathercard';

function App() {
  const [city, setCity] = useState("")
  const[location,setLocation]=useState({})
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "a4c7281c1b95b7c589a166c4819bf6a1";
const weather=async()=>{
  const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
  const responsejson = await response.json()
  setLocation(responsejson);
  console.log(responsejson)

}
console.log(location);



const handlesubmit = (e) => {
  e.preventDefault();
  if (city) { // Check if the city field is not empty
    weather();
  } else {
    setError('Please enter a city name');
  }
};

  return (
    <div className='weather'>
      <h1>Weather App</h1>
      <form onSubmit={handlesubmit}>
      <TextField id="outlined-basic" label="City name" variant="outlined" onChange={(e) => setCity(e.target.value)}
          value={city}/>
      <br /> <br />
      <br />
      <Button variant="contained" type="submit">Click me</Button>
      </form>
      <br /><br /><br /><br />
      
      <Weathercard location={location}/>


    </div>

  
     
 
  )
}

export default App
