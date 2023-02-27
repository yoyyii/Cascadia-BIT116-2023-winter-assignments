function checkForS() {
    let userName = prompt("Please enter your name");
    let firstChar = userName.charAt(0);

    if (firstChar === 'S') {
        document.getElementById('display').innerHTML = userName;
    } else {
        document.getElementById('display').innerHTML = "You need a name that starts with an UPPERCASE S";
    }
}