import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InstantHeartRate from "./Composants/InstHeartRate";
import Graphic from "./Composants/Graphic";
import mqtt from 'mqtt';

function App() {
  const [measurements, setMeasurements] = useState([]);

  function subscribeToMqtt(){
    const client  = mqtt.connect('mqtt://localhost:8080')
    
    client.on('connect', function () {
      console.log("connected")
      client.subscribe('heartRateTopic', function (err) {
        
      })
    })
    
    client.on('message', function (topic, message) {

      
      setMeasurements((prev) =>{
        if (prev.length > 5) {
          prev = prev.slice(-5  );
        }
        const liste = [...prev, JSON.parse(message.toString())]
  
        return liste
  
        })

     console.log(JSON.parse(
     message.toString())
    )
    
      
    })
  }


function setBPM (){
  setInterval(()=>{
    const measurement = {
      timestamp: new Date().getTime(),
      heartRate: Math.floor(Math.random() * (200 - 40) + 40)
    };
    setMeasurements((prev) =>{
      if (prev.length > 5) {
        prev = prev.slice(-5  );
      }
      const liste = [...prev, measurement]

      return liste

      })}, 2000);
}

  useEffect(() =>{
    subscribeToMqtt();
  },[]);


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
