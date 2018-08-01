var VoiceRecorder = {
  recognition: null,
  voiceCommands: [],
  init: function() {
    console.log("Initialize Voice Recorder");

    this.initSpeechRecognition();
    this.initSpeechListeners();
    this.initButtonListeners();
  },
  initButtonListeners: function() {
    var that = this;
    $('#js-record-film').click(function() {
      $('#js-record-controls').toggle("slow");
    });

    $('#js-start-recording').click(function() {
      console.log("Start Recording");
      that.recognition.start();
    });

    $('#js-stop-recording').click(function() {
      console.log("Stop Recording");
      that.recognition.stop();
    });
  },
  initSpeechListeners: function() {
    var that = this;
    this.recognition.onstart = function() {
      console.log('Voice recognition activated. Try speaking into the microphone.');
      $('#js-recording-now').show();
    }

    this.recognition.onerror = function(event) {
      if(event.error == 'no-speech') {
        console.log('No speech was detected. Try again.');
      };
    }

    this.recognition.onaudioend = function(event) {
      console.log("onaudioend: fired");
    }

    this.recognition.onend = function(event) {
      console.log("onend: fired");
      $('#js-recording-now').hide();
    }

    this.recognition.onsoundend = function(event) {
      console.log("onsoundend: fired");
    }

    this.recognition.onspeechend = function(event) {
      console.log("onspeechend: fired");
    }

    this.recognition.onresult = function(event) {
      console.log("onresult: fired")
      // event is a SpeechRecognitionEvent object.
      // It holds all the lines we have captured so far.
      // We only need the current one.
      var current = event.resultIndex;

      // Get a transcript of what was said.
      var transcript = event.results[current][0].transcript;

      // Add the current transcript to the contents of our Note.
      console.log(transcript)
      that.addSpeechToUi(transcript);
    }
  },
  initSpeechRecognition: function() {
    try {
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
    } catch (e) {
      console.log(e);
    }
  },
  showSpeechOnUi: function() {
    for(var voiceCommand in this.voiceCommands) {
      console.log("Show voice command in UI", voiceCommand)

    }
  },
  addSpeechToUi: function(speech) {
    console.log("Add speech to UI", speech);
    var displaySpeech = "<p>" + speech + "</p>";
    $('#js-speech-log').append(displaySpeech);
  }
}

$(function(){
  VoiceRecorder.init();
})
