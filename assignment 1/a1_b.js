// Yoyi Liao
function calcu(value) {

    let result = document.getElementById("output");

    if (value === 'ce') {
        result.value = '';
    } else if (value === '=') {
        result.value = eval(result.value);
    } else {
        result.value += value;
    }
}