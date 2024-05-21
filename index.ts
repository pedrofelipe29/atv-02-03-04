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
var t = entrada('true or false?');

console.log('essa é sua resolução' + r, 'esse é o nivel de dificuldade' + d, 'raytrancing:' + t)







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






