/*
 * Prototypes: Herança e Performance em JavaScript
 */

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// 1. Criando um método no protótipo (Uma única cópia na memória)
Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};

// 2. Criando uma propriedade no protótipo (Compartilhada por todos)
Pessoa.prototype.especie = 'Humano';

const p1 = new Pessoa('Magnum', 'Werneck');
const p2 = new Pessoa('Maria', 'Silva');

console.log('--- Teste de Performance e Herança ---');
console.log(`P1: ${p1.nomeCompleto()} | Espécie: ${p1.especie}`);
console.log(`P2: ${p2.nomeCompleto()} | Espécie: ${p2.especie}`);

// PROVA REAL: Onde estão os dados?
console.log('\n--- Inspeção Forense ---');
console.log('p1 tem "nome"?', p1.hasOwnProperty('nome'));         // true (local)
console.log('p1 tem "especie"?', p1.hasOwnProperty('especie'));   // false (herdado)
console.log('p1 tem "nomeCompleto"?', p1.hasOwnProperty('nomeCompleto')); // false (herdado)