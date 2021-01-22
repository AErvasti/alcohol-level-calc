import {useState} from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(89);
  const [bottles, setBottles] = useState(3);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcoholLvl, setAlcoholLvl] = useState(0);

  function handleSubmit(e) {
    let result = 0;
    let burning = weight/10;
    let grams = bottles * 0.33 * 8 * 4.5;
    let gramsLeft = grams - (burning * time);

    e.preventDefault();

    if (gender === 'male') {
      result = gramsLeft / (weight * 0.7);
      if (result < 0) {
        result = 0;
      }
    } else {
      result = gramsLeft / (weight * 0.6);
      if (result < 0) {
        result = 0;
      }
    }
    setAlcoholLvl(result);
  }
  
  return (
    <div style={{margin: 16}}>
      <h1>Calculating alcohol blood level</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="weight">Weight</label>
          <input id="weight" type="number" value={weight} onChange={e => setWeight(e.target.value)} min="0"/>
        </div>

        <div>
          <label>Bottles</label>
          <input type="number" value={bottles} onChange={e => setBottles(e.target.value)} min="0"/>
        </div>

        <div>
          <label>Time</label>
          <input type="number" value={time} onChange={e => setTime(e.target.value)} min="0"/>
        </div>

        <div>
          <label>Gender</label>
          <label><input type="radio" value="male" name="gender" defaultChecked onChange={e => setGender(e.target.value)}></input>Male</label>
          <label><input type="radio" value="female" name="gender" onChange={e => setGender(e.target.value)}></input>Female</label>
        </div>

        <button>Calculate</button>

        <div style={{marginTop: 16}}>
          <output>Your alcohol blood level is {alcoholLvl.toFixed(2)}</output>
        </div>
      
      </form>

    </div>
  );
}

export default App;
