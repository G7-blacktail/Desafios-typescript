"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Estudante"] = 2] = "Estudante";
    Profissao[Profissao["Desenvolvedora"] = 3] = "Desenvolvedora";
    Profissao[Profissao["Jogador"] = 4] = "Jogador";
})(Profissao || (Profissao = {}));
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desevolvedora"
};
pessoa.idade = 25;
const andre = {
    nome: 'Silvestre',
    idade: 14,
    profissao: 'Estudante'
};
const Paula = {
    nome: 'tejando',
    idade: 14,
    profissao: 'Desenvolvedora'
};
const Vanessa = {
    nome: 'Vanessa',
    idade: 21,
    profissao: Profissao.Professora
};
const Maria = {
    nome: 'Maria',
    idade: 21,
    profissao: Profissao.Professora
};
const Jessica = {
    nome: 'Jessica',
    idade: 29,
    profissao: Profissao.Estudante,
    materias: ['Matématica', 'Física', 'Programação']
};
const Monica = {
    nome: 'Monica',
    idade: 29,
    materias: ['Matématica', 'Física', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' ', item);
    }
}
listar(Monica.materias);
