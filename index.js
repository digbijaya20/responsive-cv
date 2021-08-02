var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function topRegistrationBtn(){
    x.style.left ="-400px";
    y.style.left ="50px";
    z.style.left ="100px";
}

function topLoginBtn(){
    x.style.left ="50px";
    y.style.left ="450px";
    z.style.left ="0px";
}

function signUp(){
    var name = document.getElementById('nameS').value;
    var email = document.getElementById('emailS').value;
    var password = document.getElementById('passwordS').value;

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)

}

function logIn(){
    var email = document.getElementById('emailL').value;
    var password = document.getElementById('passwordL').value;

    var emailG = localStorage.getItem("email");
    var passwordG = localStorage.getItem("password");

    if(email == emailG && password == passwordG){
        alert("Login successful")
        // setTimeout(function(){document.location.href = "home.html;"},500);
        location.replace('/home.html');
        
    }
    else{

        alert("Email and password is incorrect!")
        return false;
    }
}

