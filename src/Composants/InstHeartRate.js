
function InstantHeartRate(props) {

    var {data} = props; //Met les valeurs de l'App.js dans le composant.
    

    var classe = "ok";
    

if (!data){
    return <div> no data </div>
}
    let text = data.heartRate + " BPM : Normal"

    if (data.heartRate > 120){

        classe="danger";
        text = data.heartRate + " BPM : ATTENTION ! ";
    }
    else if (data.heartRate < 50){
        classe="danger";
        text = data.heartRate + " BPM : ATTENTION ! ";
    }
    
    
    
    

    return (
        <div className={classe}>Rythme cardiaque : {text} 
        </div>
      )
    }
    

  

export default InstantHeartRate