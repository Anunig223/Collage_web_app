var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my picture") {
        console.log("taking selfie");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    setTimeout(function () {
        imageid = "selfie1";
        take_snapshot();
        speak_data = "taking your picture in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);

    setTimeout(function () {
        imageid = "selfie2";
        take_snapshot();
        speak_data = "taking your picture in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 10000);

    setTimeout(function () {
        imageid = "selfie3";
        take_snapshot();
        speak_data = "taking your picture in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 15000);

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
function take_snapshot(){
    console.log("");
    Webcam.snap(function(data_uri){
        if(imageid = "selfie1"){
            document.getElementById("result_1").innerHTML = '<img id = "selfie1" src = "'+ data_uri +'"/> ';
        }
        if(imageid = "selfie2"){
            document.getElementById("result_2").innerHTML = '<img id = "selfie2" src = "'+ data_uri +'"/> ';
        }
        if(imageid = "selfie3"){
            document.getElementById("result_3").innerHTML = '<img id = "selfie3" src = "'+ data_uri +'"/> ';
        }
        
    });
    


}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").scr;
    link.href = image;
    link.click();
}