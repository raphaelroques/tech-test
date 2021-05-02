myBingo = {};

let billesRestantes = [];
let billesTirees = [];

for (let i = 1; i <= 75; i++) {
    billesRestantes.push(i);
}

myBingo.tirage = function () {
    let billeAleatoire =
        billesRestantes[Math.floor(Math.random() * billesRestantes.length)];

    if (billeAleatoire >= 0 && billeAleatoire <= 15) {
        billesTirees.push(`B${billeAleatoire}`);
    } else if (billeAleatoire >= 16 && billeAleatoire <= 30) {
        billesTirees.push(`I${billeAleatoire}`);
    } else if (billeAleatoire >= 31 && billeAleatoire <= 45) {
        billesTirees.push(`N${billeAleatoire}`);
    } else if (billeAleatoire >= 46 && billeAleatoire <= 60) {
        billesTirees.push(`G${billeAleatoire}`);
    } else if (billeAleatoire >= 61 && billeAleatoire <= 75) {
        billesTirees.push(`O${billeAleatoire}`);
    }

    let billeSupprimee = billesRestantes.splice(
        billesRestantes.indexOf(billeAleatoire),
        1
    );
    $('button').html('CONTINUER LE TIRAGE');

    $('.tirage').append(`<li>
                            <p>Tirage numéro ${billesTirees.length}</p>
                            <p class="billeInfo"">${
                                billesTirees[billesTirees.length - 1]
                            }</p>
                        </li>`);

    if (billesRestantes.length === 0) {
        $('button').hide();
        $('.gameMasterInstructions').append(
            `<p class="grillePleine">Toutes les billes ont été tirées!<p>
            <p class="grillePleine">Nouvelle grille imminente<p>`
        );
    }
};

myBingo.play = () => {
    $('button').click(function (event) {
        event.preventDefault();
        myBingo.tirage();
    });
};

myBingo.init = () => {
    myBingo.play();
};

$(document).ready(function () {
    myBingo.init();
});
