var password = document.getElementById("password");

function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");

}
function getpasswordfunction() {
    var user = prompt("Generate Your Password Please?")
    if (user != null) {
        document.getElementById("hello").innerHTML =
            "Hello " + user + "!";
    }
}