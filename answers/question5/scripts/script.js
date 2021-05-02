let myApp = {};
let str = '';
let res = '';

myApp.string = function () {
    str = document.getElementById('stringToReverse').innerHTML;
    return str;
};

myApp.strReverse = function (string) {
    res = string.split('').reverse().join('');
    return res;
};

myApp.handleClick = function () {
    $('button').click(function () {
        myApp.string();
        myApp.strReverse(str);
        $('#stringToReverse').html(`<p>${res}</p>`);
        $('button').hide();
    });
};

myApp.init = function () {
    myApp.handleClick();
};

$(document).ready(function () {
    myApp.init();
});
