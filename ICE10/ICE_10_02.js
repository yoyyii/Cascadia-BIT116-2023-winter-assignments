function getAddress() {
    let emailAddress = prompt("enter a valid email address");
    let at = emailAddress.indexOf('@');
    let dot = emailAddress.indexOf('.');;

    if (at < 0 && dot < 0) {
        alert("You need both an at (@) character and a dot (.) character. Please try again");
    } else {
        alert("Thank you");
    }
}