var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("text_box").innerHTML="";
    recognition.start();
}
recognition.onresult= function (event) {
console.log(event);
var Content= event.results[0][0].transcript;
console.log(Content);
if(Content=="take my selfie")
{
    console.log("question_recognition");
    speak();
}
document.getElementById("text_box").innerHTML=Content;
}

function speak()
{
    var synth = window.speechSynthesis;
   var speak_data = "TAKING YOUR CLEAR AND YOUR BEST SELFIE EVER IN 5 SECONDS";
   var utterThis = new SpeechSynthesisUtterance (speak_data);
   synth.speak(utterThis);
   Webcam.attach(Camera);
   setTimeout(function (){
       take_snapshot();
       save();
   },5000)
}

Camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function (data_uri) {
        document.getElementById("svechfusindianer").innerHTML="<img id='yankeedivision'src='"+data_uri+"'/>";
    });
    
}

function save()
{
    germanempire = document.getElementById("weimerempire");
    image = document.getElementById("yankeedivision").src;
    germanempire.href=image;
    germanempire.click();
}
