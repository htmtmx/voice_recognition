const btnRecord = document.getElementById('btn_record');
const btnStop = document.getElementById("btn_stop");

let Recorder = window.webkitSpeechRecognition  || window.SpeechRecognitionEvent;
let recognition = new Recorder();
// console.log(recognition);

recognition.lang = 'es-ES';
recognition.continuous = true;

// Start recording
const body = document.querySelector('body');
const drawScreen = (phrase) => { 
  let color;
  if (phrase == 'Rojo.' || phrase == 'rojo') color = 'red';
  if (phrase == 'Verde.' || phrase == 'verde') color = 'green';
  if (phrase == 'Azul.' || phrase == 'azul') color = 'blue';
  if (phrase == 'Amarillo.' || phrase == 'amarillo') color = 'yellow';
  if (phrase == 'Naranja.' || phrase == 'naranja') color = 'orange';
  if (phrase == 'Morado.' || phrase == 'morado') color = 'purple';
  if (phrase == 'Blanco.' || phrase == 'blanco') color = 'white';
  if (phrase == 'Negro.' || phrase == 'negro') color = 'black';
  if (color === undefined) color = 'cyan';
  localStorage.setItem('currentColor', color);
  sessionStorage.setItem('currentColor', color);

  document.body.style.backgroundColor = color;
}

// Persistent data in localStorage
window.addEventListener('DOMContentLoaded', () => {
  let colorSaved = localStorage.currentColor || sessionStorage.currentColor;
  console.log(colorSaved);
    document.body.style.backgroundColor = colorSaved;
})

// Event
recognition.onStart = () => { 
  console.log("Microphone is activated, you can speak now.");
}

recognition.onresult = (event) => { 
  const results = event.results;
  let phrase = results[results.length - 1][0].transcript.split(" ").join("");
  drawScreen(phrase);
  // console.log(phrase);
  // console.log(results);
}

btnRecord.addEventListener('click', () => {
  recognition.start();
});

btnStop.addEventListener('click', () => { 
  recognition.abort();
});