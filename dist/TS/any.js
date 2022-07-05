"use strict";
let valorAny;
valorAny = 1;
valorAny = 'olá';
valorAny = true;
let valorString = 'teste';
valorString = valorAny;
let valorString2 = 'Textão';
valorString2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorString, valorString);
somarStrings('Olá ', 'como vai?');
