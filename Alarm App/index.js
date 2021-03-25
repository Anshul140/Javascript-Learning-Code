console.log("Alarm App");

let submit = document.getElementById('submit');

let sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");

function playAlarm(){
  sound.play();
}

submit.addEventListener('click', funcAlarm);

function funcAlarm(e){
    e.preventDefault();
    console.log("Alarm setting starts...");
    let alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();
    
    let diff = alarmDate-now;
    if(diff>=0)
    {
        console.log("Time remaining for alarm:",diff);
        setTimeout(() => {
            playAlarm();
        }, diff);
    }
    else{
        document.getElementById('message').innerHTML= `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Failure: </strong> Please give valid time input!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    }
}








