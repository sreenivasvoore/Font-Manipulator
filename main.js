img = "";

leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload() {
    img = loadImage("Comic Book.avif");
}

function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);

    canvas = createCanvas(300, 300);
    canvas.center();
    background('white');

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model has been loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
    }
}

function draw() {
    textSize(difference);
    fill('orange');
    text('Neil', 10, 150);
}