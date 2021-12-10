function InstantHeartRate() {

    var val = Math.floor(Math.random() * (200 - 40) + 40);

    var classe = "color";

    if (val > 120){

        classe="danger";
        val = val + " BPM : ATTENTION ! ";
    }
    else if (val < 50){
        classe="danger";
        val = val + " BPM : ATTENTION ! ";
    }

    else{
        classe="ok";
        val = val + " BPM : Normal ";
    }
    return (
        <div class={classe}>Rythme cardiaque : {val} </div>
      )
    }
    

  

export default InstantHeartRate