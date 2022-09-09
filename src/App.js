import React, {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState()
  const [bottles, setBottles] = useState()
  const [time, setTime] = useState()
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)

  function calculate(e) {
    let result = 0
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsleft = grams - (burning * time)

    if (gender === 'male') {
      result = gramsleft / (weight * 0.7) 
    } 
    
    else {
      result = gramsleft / (weight * 0.6) 
    }

    if (result < 0) {
      result = 0
    }
    
    setResult(result)
  }

  return (
    <form onSubmit = {calculate}>
      <h3>Calculating alcohol blood level</h3>
    <div>
      <label>Weight</label>
      <input type = "text" name ="weight" value = {weight} onChange = {e => setWeight(e.target.value)}/>
    </div>
    <div>
      <label>Bottles</label>
      <input type = "number" min = "0" name ="bottles" value = {bottles} onChange = {e => setBottles(e.target.value)}/>
    </div>
    <div>
      <label>Time</label>
      <input type = "number" min = "0" name ="time" value = {time} onChange = {e => setTime(e.target.value)}/>
    </div>
    <div>
      <label>Gender</label>
      <input type="radio" name="gender" value="male" defaultChecked onChange = {e => setGender(e.target.value)}/><label>Male</label>
      <input type="radio" name="gender" value="female"onChange = {e => setGender(e.target.value)}/><label>Female</label>
    </div>
    <div>
    <output>{result.toFixed(1)}</output>
    </div>
    <button type = "button" onClick = {calculate}>Calculate</button>
    </form>
  );
}

export default App;


