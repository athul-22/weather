var input_section = document.getElementsByClassName('input-section');
var alert_text = document.getElementById("alert_text");
var button = document.querySelector(".location_button");
var inputField = document.querySelector("input");
var tem = document.querySelector(".tem-text");



button.addEventListener("click", function(){


    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputField.value+'&appid=4f415838509611f520feb293a7a4f1d1')
    .then(response => response.json())
    
    .then(data => {

        // VAR INITIZALIZATION

        var location = document.querySelector(".location");
        var wind = document.querySelector("#wind");
        var humidity = document.querySelector("#humidity");
        var clouds = document.querySelector("#clouds");
        

        // DATA FROM API

        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var windValue = data['wind']['speed'];
        var humidityValue = data['main']['humidity'];
        var cloudsValue = data['clouds']['all'];
        
        
        
        // VALUE DISPLAYING

        tem.innerHTML = tempValue.toFixed()-"273";
        location.innerHTML = nameValue;
        wind.innerHTML = windValue;
        humidity.innerHTML = humidityValue;
        clouds.innerHTML = cloudsValue;

        console.log(data);

        if(tempValue>=295){
           document.getElementById('image').src = 'sun.gif';
        }else if(tempValue>=290){
            document.getElementById('image').src = 'rain.gif';
        }else{
            document.getElementById('image').src = 'snow.gif';
        }
    })
    .catch(error => {

        swal("Location Error", "Entered location is not found !", "error");

        var alertCon = document.querySelector(".alertTop");
        var resultSec = document.querySelector(".result-section");
        var inputSec = document.querySelector('.input-section');
    
        inputSec.style.display = "block";
        inputField.value ="";
        resultSec.style.display = "none";
        alertCon.style.display = "none";
    })
})



function mainFun(){
    var inputField = document.querySelector("input");
    var alertCon = document.querySelector(".alertTop");
    var resultSec = document.querySelector(".result-section");
    var inputSec = document.querySelector('.input-section');

    if(inputField.value ==""){
        swal("Empty Input", "Please input the location", "info");
    }else{
        inputSec.style.display = "none";
        resultSec.style.display = "grid";
        alertCon.style.display = "block";
        alert_text.innerHTML = "SUCCESS";
        alertTop.style.display = "block";
    }
}


 // DISPLAY ELEMENTS

function funOnload(){
    var alertCon = document.querySelector(".alertTop");
    var resultSec = document.querySelector(".result-section");
    
    resultSec.style.display = "none";
    alertCon.style.display = "none";
}


function backFun(){
    var alertCon = document.querySelector(".alertTop");
    var resultSec = document.querySelector(".result-section");
    var inputSec = document.querySelector('.input-section');
    


    if(alertCon.style.display = "none"){

        inputSec.style.display = "block";
        resultSec.style.display = "none";

    }
}