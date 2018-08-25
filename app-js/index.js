import {voiceRecorderinit} from './VoiceRecorder';

const lib = () => {

  function sum(a, b)  { return a + b; }
  function mult(a, b) { return a * b; }

  return {
    sum,
    mult
  };

};

document.addEventListener("turbolinks:load", voiceRecorderinit);
