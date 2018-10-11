// Import module.
const AudioRecorder = require('node-audiorecorder');
 
// Options is an optional parameter for the constructor call.
// If an option is not given the default value, as seen below, will be used.
const options = {
  // Amount of channels to record.
  channels: 1,
  // Recording device to use.
  device: null,
  // Which program to use, either 'arecord', 'sox', and 'rec'.
  program: 'sox',
  // Audio sample rate in hz.
  sampleRate: 16000,
  // Time of silence in seconds before it stops recording.
  silence: 2,
  // Silence threshold (only for 'sox' and 'rec').
  threshold: 0.5,
  // Silence threshold to start recording, overrides threshold (only for 'sox' and 'rec').
  thresholdStart: null,
  // Silence threshold to stop recording, overrides threshold (only for 'sox' and 'rec').
  thresholdStop: null,
};
// Optional parameter intended for debugging.
// The object has to implement a log and warn function.
const logger = console;
 
// Create an instance.
let audioRecorder = new AudioRecorder(options, logger);

console.log(audioRecorder)

audioRecorder.Start();
// Stops and removes the recording process.
audioRecorder.Stop();
// Returns the stream of the recording process.
audioRecorder.Stream();











/*const {Wit, log, interactive} = require('node-wit');

const client = new Wit({
  accessToken: "ISO5VCEHIIYCMCWNGOPOMF74BWGP7OCQ",
  logger: new log.Logger(log.DEBUG) // optional
});
client.message('what is the weather in London?', {})
.then((data) => {
  console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
})
.catch(console.error);

interactive(client);

//console.log(client.message('set an alarm tomorrow at 7am'));*/