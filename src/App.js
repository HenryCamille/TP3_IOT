import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InstantHeartRate from "./Composants/InstHeartRate";
import Graphic from "./Composants/Graphic";

function App() {
  const [measurements, setMeasurements] = useState([]);
  useEffect(() =>{
    setInterval(()=>{
      const measurement = {
        timestamp: new Date().getTime(),
        heartRate: Math.floor(Math.random() * (200 - 40) + 40)
      };
      setMeasurements((prev) => [...prev.slice(1).slice(-40), measurement]);
    }, 5000);
  },[])

  let measurement = null;
  if (measurements.length>0){
     measurement = measurements [ measurements.length - 1];
  }

  console.log(measurements)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Une application pour les BPM.</p>
        <InstantHeartRate data ={measurement}/>
        <Graphic data = {measurements} />
      </header>
    </div>
  );
}

export default App;
