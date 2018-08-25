let recognition = null;

let voiceCommands = [];

function voiceRecorderinit() {
  console.log("Initialize Voice Recorder");

  initSpeechRecognition();
  initSpeechListeners();
  initButtonListeners();
}

function initSpeechRecognition() {
  try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
  } catch (e) {
    console.log(e);
  }
}

function initSpeechListeners() {
  recognition.onstart = () => {
    console.log('Voice recognition activated. Try speaking into the microphone.');
    $('#js-recording-now').show();
  }

  recognition.onerror = (event) => {
    if(event.error == 'no-speech') {
      console.log('No speech was detected. Try again.');
    };
  }

  recognition.onaudioend = (event) => {
    console.log("onaudioend: fired");
  }

  recognition.onend = (event) => {
    console.log("onend: fired");
    $('#js-recording-now').hide();
  }

  recognition.onsoundend = (event) => {
    console.log("onsoundend: fired");
  }

  recognition.onspeechend = (event) => {
    console.log("onspeechend: fired");
  }

  recognition.onresult = (event) => {
    console.log("onresult: fired")
    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far.
    // We only need the current one.
    var current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;

    // Add the current transcript to the contents of our Note.
    console.log(transcript)
    addSpeechToUi(transcript);
  }
}

function initButtonListeners() {
  $('#js-record-film').click(() => {
    $('#js-record-controls').toggle("slow");
  });

  $('#js-start-recording').click(() => {
    console.log("Start Recording");
    recognition.start();
  });

  $('#js-stop-recording').click(() => {
    console.log("Stop Recording");
    recognition.stop();
  });
}

function showSpeechOnUi() {
  for(var voiceCommand in voiceCommands) {
    console.log("Show voice command in UI", voiceCommand);
  }
}

function addSpeechToUi(speech) {
  console.log("Add speech to UI", speech);
  var displaySpeech = "<p>" + speech + "</p>";
  $('#js-speech-log').append(displaySpeech);
}


export { voiceRecorderinit };
