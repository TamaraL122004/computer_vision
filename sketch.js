// // Classifier Variable de imagenes, no asigna
// let classifier;
// // Model URL
// let imageModelURL = "https://teachablemachine.withgoogle.com/models/jsHnyYQFn/";

// // Video variable
// let video;
// let flippedVideo;
// // To store the classification, almacena las etiquetas, ejm: crema, espejo
// let label = "";

// // Load the model first, se debe ejecutar antes del set up
// function preload() {
//   classifier = ml5.imageClassifier(imageModelURL + "model.json");
//   //es la variable que se puso anteriormente, si se pone el link mas el model.json, nos sale el codigo para interpretar imagenes
// }

// function setup() {
//   createCanvas(320, 260);
//   // Create the video, enciende la cámara, funcion que se puso anteriormente
//   video = createCapture(VIDEO);
//   video.size(320, 240);
//   video.hide();

//   //flippedVideo = ml5.flipImage(video);
//   // Start classifying
//   classifyVideo();
// }

// function draw() {
//   background(0);
//   // Draw the video
//   image(video, 0, 0);

//   // Draw the label
//   fill(255);
//   textSize(16);
//   textAlign(CENTER);
//   text("hola", width / 2, height - 4);
// }

// // Get a prediction for the current video frame
// function classifyVideo() {
//   classifier.classify(video, gotResult); //la funcion puede tener el nombre que quiera
// }

// // When we get a result
// function gotResult(results, error) {
//   // If there is an error
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(results);
//   return;
//   // The results are in an array ordered by confidence.
//   // console.log(results[0]);
//   label = results[0].label;

//   // Classifiy again!
//   classifyVideo();
// }

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "https://teachablemachine.withgoogle.com/models/9jd6mCgQl/";

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let confiaza = 0;
let img;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
  // Carga la imagen antes de que comience el setup
  img = loadImage(
    "https://cdns-images.dzcdn.net/images/cover/f069eb37e6caa47e7c6d94002ba025d6/0x1900-000000-80-0-0.jpg"
  ); //  ruta de tu imagen
}

function setup() {
  createCanvas(480, 390);

  // Create the video
  video = createCapture(VIDEO);
  video.size(480, 360);
  video.hide();

  // flippedVideo = ml5.flipImage(video);
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
  text(label, width / 2, height - 4);

  if (label == "delfin" && confiaza > 0.8) {
    // filter(OPAQUE);
    // fill(90, 0, 0);
    // textSize(35);
    // textAlign(CENTER);
    // text("just wanna be part of your symphony", width / 2, height / 2);
    image(img, 55, 10, 370, 370); // Dibuja la imagen en (50, 50) con un tamaño de 100x100 píxeles
  }

  if (label == "fondo" && confiaza > 0.9) {
    background(250);
    textSize(35);
    textAlign(CENTER);
    fill(100);
    text("My mind in Class", width / 2, height / 2);
  }

  if (label == "libro" && confiaza > 0.9) {
    filter(GRAY);
    textSize(30);
    text("A huuge book", width / 2, height / 2);
  }
}

// Get a prediction for the current video frame
function classifyVideo() {
  classifier.classify(video, gotResult);
}

// When we get a result
function gotResult(results, error) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}
