function getPhone() {
    let checkPhone = document.getElementById("phone").value;
    let toMatch = /^\d{3}-\d{3}-\d{4}$/;

    if (toMatch.test(checkPhone)) {
        alert("Your number has been validated");
    } else {
        alert("The number is invalid. Please enter in the valid formate XXX-XXX-XXXX");
    }
}