enum Profissao {
    Professora,
    Atriz,
    Estudante,
    Desenvolvedora,
    Jogador
}


interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[];
}


const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: "desevolvedora"
}

pessoa.idade = 25;

const andre : {nome: string, idade: number, profissao: string} = {
    nome: 'Silvestre',
    idade: 14,
    profissao: 'Estudante'
}

const Paula : {nome: string, idade: number, profissao: string} = {
    nome: 'tejando',
    idade: 14,
    profissao: 'Desenvolvedora'
}




const Vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 21,
    profissao: Profissao.Professora
    
}
const Maria: Pessoa = {
    nome: 'Maria',
    idade: 21,
    profissao: Profissao.Professora
    
}

const Jessica: Estudante = {
    nome:'Jessica',
    idade: 29,
    profissao: Profissao.Estudante,
    materias: ['Matématica','Física','Programação']
}

const Monica: Estudante = {
    nome:'Monica',
    idade: 29,
    materias: ['Matématica','Física','Programação']
}

function listar(lista: string[]) {
    for(const item of lista){
        console.log(' ', item)
    }
}

listar(Monica.materias);

