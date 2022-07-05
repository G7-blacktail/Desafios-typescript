let valorAny: any;

valorAny = 1;
valorAny = 'olá';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny
let valorString2: string = 'Textão';
valorString2 = valorAny;

function somarStrings(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarStrings(valorString, valorString);
somarStrings('Olá ', 'como vai?');