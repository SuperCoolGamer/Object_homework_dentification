cocoholder="";

function preload(){

}

function setup(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object ";
}

function modelLoaded(){
    status=true;
    objectDetector.detect(img, gotResult);
}

function draw(){

}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}