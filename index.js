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