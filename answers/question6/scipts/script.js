let myApp = {};
let colour = '';

myApp.handleClick = () => {
    $('[data-colour] > :header').click(function () {
        colour = $(this).parent().attr('data-colour');
        myApp.colourChange(this);
    });
};

myApp.colourChange = (tar) => {
    $(tar).siblings().css('color', colour);
};

myApp.init = () => {
    myApp.handleClick();
};

$(document).ready(function () {
    myApp.init();
});
