


function InstantHeartRate(props) {

    var {data} = props; //Met les valeurs de l'App.js dans le composant.
    console.log(data); 

    var classe = "color";

    if (data > 120){

        classe="danger";
        data = data + " BPM : ATTENTION ! ";
    }
    else if (data < 50){
        classe="danger";
        data = data + " BPM : ATTENTION ! ";
    }

    else{
        classe="ok";
        data = data + " BPM : Normal ";
    }
    return (
        <div class={classe}>Rythme cardiaque : {data} 
        </div>
      )
    }
    

  

export default InstantHeartRate