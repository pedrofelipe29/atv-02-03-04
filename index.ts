//atv-02
class Setup {
    static resolucao: string;
    static dificuldade: string;
    static raytracing: boolean;

    constructor(resolucao: string, dificuldade: string, raytracing: boolean) {
        Setup.resolucao = resolucao;
        Setup.dificuldade = dificuldade;
        Setup.raytracing = raytracing;
    }

    static listarUsuario() {
        console.log("resolucao:"+ Setup.resolucao + "\ndificuldade:" + Setup.dificuldade +"\raytrancing:" + Setup.raytracing)
    }
}


console.log("Resolução:", Setup.resolucao);
console.log("Dificuldade:", Setup.dificuldade);
console.log("Raytracing:", Setup.raytracing);

var entrada = require('prompt-sync')();

var r = entrada('qual o modelo de resolução que você deseja?');
var d = entrada('qual é a dificuldade que você deseja?');
var tipoPersonagem = entrada('true or false?');

console.log('essa é sua resolução' + r, 'esse é o nivel de dificuldade' + d, 'raytrancing:' + tipoPersonagem)







//atv 03

class Monstro {
    nome: string;
    forca: number;
    defesa: number;
    raridade: string;

    constructor(nome: string, forca: number, defesa: number, raridade: string) {
        this.nome = nome;
        this.forca = forca;
        this.defesa = defesa;
        this.raridade = raridade;
    }
}


class MonstroDatabase {
    static listaMonstros: Monstro[] = [];

    static exibirDatabase() {
        console.log("Monstros na Database:");
        this.listaMonstros.forEach(monstro => {
            console.log(monstro.nome);
        });
    }

    static getInfoMonstro(nome: string): { nome: string, raridade: string } | null {
        const monstro = this.listaMonstros.find(m => m.nome === nome);
        if (monstro) {
            return { nome: monstro.nome, raridade: monstro.raridade };
        }
        return null;
    }
}


MonstroDatabase.listaMonstros.push(new Monstro('Dragão', 100, 80, 'Épico'));
MonstroDatabase.listaMonstros.push(new Monstro('Ogro', 90, 70, 'Comum'));

MonstroDatabase.exibirDatabase();

const infoMonstro = MonstroDatabase.getInfoMonstro('Dragão');
if (infoMonstro) {
    console.log(`Nome: ${infoMonstro.nome}, Raridade: ${infoMonstro.raridade}`);
} else {
    console.log("Monstro não encontrado na Database.");
}










//atv=04

class Personagem {
    nome: string;
    hp: number;
    mp: number;
    forca: number;
    defesa: number;
    agilidade: number;
    tipo: string;

    
    static TIPO_GUERREIRO = "Guerreiro";
    static TIPO_MAGO = "Mago";
    static TIPO_ASSASINO= "Assasino";
    static TIPO_ARQUEIRO = "Arqueiro"

    constructor(nome: string, tipo:string, hp: number = 100, mp: number = 70, forca: number = 60, defesa: number = 40, agilidade: number = 25) {
        this.nome = nome;
        this.hp = hp;
        this.mp = mp;
        this.forca = forca;
        this.defesa = defesa;
        this.agilidade = agilidade;
        this.tipo = tipo;
    }
}

    this.nome = nomePersonagem;




console.log(Personagem.TIPO_GUERREIRO); 
console.log(Personagem.TIPO_MAGO); 
console.log(Personagem.TIPO_ASSASINO); 
console.log(Personagem.TIPO_ARQUEIRO);

var entrada = require('prompt-sync')();
var nomePersonagem = entrada('informe o nome do personagem? ');
var tipoPersonagem = entrada('qual o tipo de personagem vc deseja criar?\n1 - guerreiro\n2 - mago\n');

let p = new Personagem(nomePersonagem, tipoPersonagem);

if (tipoPersonagem === Personagem.TIPO_MAGO) {
    p.mp += 30;
} else if (tipoPersonagem === Personagem.TIPO_GUERREIRO) {
    p.hp += 30;
    p.forca += 15;
} else if (tipoPersonagem === Personagem.TIPO_ASSASINO) {
    p.agilidade += 15;
} else if (tipoPersonagem=== Personagem.TIPO_ARQUEIRO) {
    p.agilidade += 5;
    p.forca += 7;
    p.hp += 5;
} else {
    throw new Error("Tipo de personagem inválido!");
}

console.log(p);







