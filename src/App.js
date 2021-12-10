import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InstantHeartRate from "./Composants/InstHeartRate";

function App() {
  const [measurements, setMeasurements] = useState([50]);
  useEffect(() =>{
    setInterval(()=>{
      
      setMeasurements((prev) => {
     return [...prev, Math.floor(Math.random() * (200 - 40) + 40)]
      }); 
    }, 5000);
  }, [])

  const measurement = measurements [ measurements.length - 1];
  console.log(measurement);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Une application pour les BPM.</p>
        <InstantHeartRate data ={measurement}/>
      </header>
    </div>
  );
}

export default App;
