function setup() {
  createCanvas(780,500);
  background(200);
  video = createCapture(VIDEO);
  video.size(640,480);
  video.hide();
  bouton = createButton('capture');
  bouton.mousePressed(capturerImage);
}

function capturerImage(){
  save('image'+'.png');
}

function draw() {
  image(video,70,10);
}