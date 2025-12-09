/**
 *  ESTUDO: JavaScript Assíncrono e Callbacks
 *  TEMA: Simulando latência de rede e o problema do "Callback Hell"
 * * DESCRIÇÃO:
 * Em JS, operações como acesso a banco de dados ou redes demoram um tempo incerto.
 * Antes das Promises (ES6), usávamos Callbacks aninhados para garantir a ordem de execução.
 * * O código abaixo simula uma missão de "Hacking" onde cada etapa depende da anterior.
 */

// 1. Função auxiliar para gerar latência aleatória (Simula "ping" da rede)
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

// 2. As Funções da Missão (Tasks)
function conectarNoServidor(callback) {
    console.log(" Tentando conexão...");
    
    setTimeout(function() {
        console.log(" Conexão estabelecida com sucesso!");
        // Se houver um callback (próxima etapa), execute-o
        if (callback) callback(); 
    }, rand());
}

function extrairDados(callback) {
    console.log(" Extraindo dados sigilosos...");

    setTimeout(function() {
        console.log(" Dados extraídos com sucesso!");
        if (callback) callback();
    }, rand());
}

function apagarRastros(callback) {
    console.log(" Apagando logs do sistema...");

    setTimeout(function() {
        console.log(" Rastros apagados. Missão cumprida!");
        if (callback) callback();
    }, rand());
}

// 3. A Execução: O famoso "Callback Hell" (Árvore de Natal )
// Garantimos a ordem síncrona dentro de um ambiente assíncrono.

console.log("---  INICIANDO MISSÃO ---");

conectarNoServidor(function() {
    extrairDados(function() {
        apagarRastros(function() {
            console.log("--- FIM DA OPERAÇÃO ---");
        });
    });
});