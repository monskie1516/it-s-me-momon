var email = document.getElementById("email");
var submitBtn = document.getElementById("loginBtn");
var responseText = document.getElementById("response");

submitBtn.addEventListener('click', Login);

function Login(){
    if(email.value){
        responseText.textContent = email.value;
    }else{
        responseText.textContent = 'Email is required';
    }
}

var someVariable = "Test";

var stringVar = 2;
var stringVar = someVariable + "";

responseText.textContent = stringVar;