const btnRecord = document.getElementById('btn_record');
const btnStop = document.getElementById("btn_stop");

let Recorder = window.webkitSpeechRecognition  || window.SpeechRecognitionEvent;
let recognition = new Recorder();
console.log(recognition);

recognition.lang = 'es-ES';
recognition.continuous = true;

// Start recording
const body = document.querySelector('body');
let colorSaved;
const drawScreen = (phrase) => { 
  let color;
  if (phrase=="Rojo.") color = "red";
}

// Event
recognition.onStart = () => { 
  console.log("Microphone is activated, you can speak now.");
}

recognition.onresult = (event) => { 
  const results = event.results;
  console.log(event);
  // const phrase = results[results.length - 1][0].transcript;
  // drawScreen(transcript);
}

btnRecord.addEventListener('click', () => {
  recognition.start();
});

btnStop.addEventListener('click', () => { 
  recognition.abort();
});