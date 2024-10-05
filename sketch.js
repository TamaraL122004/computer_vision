// Classifier Variable de imagenes, no asigna
let classifier;
// Model URL
let imageModelURL = "https://teachablemachine.withgoogle.com/models/jsHnyYQFn/";

// Video variable
let video;
let flippedVideo;
// To store the classification, almacena las etiquetas, ejm: crema, espejo
let label = "";

// Load the model first, se debe ejecutar antes del set up
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
  //es la variable que se puso anteriormente, si se pone el link mas el model.json, nos sale el codigo para interpretar imagenes
}

function setup() {
  createCanvas(320, 260);
  // Create the video, enciende la cámara, funcion que se puso anteriormente
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  //flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(video, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text("hola", width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(video, gotResult); //la funcion puede tener el nombre que quiera
}

// When we get a result
function gotResult(results, error) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
  return;
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;

  // Classifiy again!
  classifyVideo();
}
