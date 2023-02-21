x = 0;
y = 0;
draw_circle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening pelase speak";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized as: " + content;
    
    to_number = Number(content); 
    if (Number.isInteger(to_number)) { 
        document.getElementById("status").innerHTML = "Started drawing circles"; 
        draw_circle = "set"; 
    } 
    else { 
        document.getElementById("status").innerHTML = "The speech has not recognized a number "; 
    }
}

function setup() {
    canvas = createCanvas(900, 600);
    canvas.center()
}

function speak() { 
    var synth = window.speechSynthesis; 
    var utterThis = new SpeechSynthesisUtterance(speak_data); 
    synth.speak(utterThis); 
    speak_data = ""; 
}

function draw() {
    if (draw_circle == "set") {
        for(var i = 1 ; i <= to_number; i++) { 
            x = Math.floor(Math.random() * 700); 
            y = Math.floor(Math.random() * 400); 
            radius = Math.floor(Math.random() * 100);
            circle(x, y, radius);
        }
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
        
        speak_data = to_number + "Circles drawn"; 
        speak();
    }
}
