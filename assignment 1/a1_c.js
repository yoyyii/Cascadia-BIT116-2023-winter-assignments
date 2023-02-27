// Yoyi Liao
function calcu(value) {

    let result = document.getElementById("output");
    switch (value) {
        case 'ce':
            result.value = '';
            break;
        case '=':
            result.value = eval(result.value);
            break;
        default:
            result.value += value;
    }

}