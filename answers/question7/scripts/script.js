myApp = {};

let abc;
abc = { x: '1', y: '2', z: '3' };

myApp.hello_world = (foo) => {
    const $foo = $(`.${foo}`);
    return `${foo}: ${$foo.data('hello')}`;
};

const [test, myDiv, x, y, loremIpsum] = [
    myApp.hello_world('welcome'),
    $('#mine'),
    abc.x,
    abc.y,
    (dolor) => {
        let test, val;
        dolor = dolor || 'dolor';
        test = '123456';
        val = $(`[data-${dolor}]`).data(dolor);
        return `<p>Result [${test}]: ${test * val}</p>`;
    },
];

myApp.divColour = () => {
    myDiv
        .html(loremIpsum())
        .css('background-color', 'cyan')
        .on('click', function () {
            $(this).find('p').css('color', 'red');
        });
};

// pour tester uniquement; a supprimer lors de la production!
myApp.tempTest = () => {
    console.log(test + ' [test]');
    console.log(x == 1 && y >= 2 ? 'yeah' : 'boo');
};

myApp.init = () => {
    myApp.tempTest(); // pour tester uniquement; a supprimer lors de la production!
    myApp.hello_world();
    myApp.divColour();
};

$(document).ready(function () {
    myApp.init();
});
