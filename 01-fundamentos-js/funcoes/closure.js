/**
 *  ESTUDO: Simulação de Conta Bancária
 *  Conceito: Closures, Escopo Léxico e Encapsulamento de Dados
 * *  DESCRIÇÃO TÉCNICA:
 * Este script demonstra como utilizar Closures para criar variáveis "privadas".
 * Ao retornar uma função interna, mantemos o acesso ao escopo da função externa (Factory),
 * protegendo a variável de estado contra modificações diretas pelo escopo global (Global Scope).
 */

function criarConta(saldoInicial) {
    // A variável 'saldoInicial' fica protegida neste escopo léxico (Closure)
    // Ninguém de fora consegue alterar isso diretamente, apenas a função abaixo.
    
    return function(valorDeposito) {
        // Esta função interna mantém referência viva à variável do escopo pai
        saldoInicial += valorDeposito;
        return `Saldo atual: R$ ${saldoInicial.toFixed(2)}`;
    };
}

// --- INSTANCIAÇÃO ---
// Cada chamada cria um novo Ambiente Léxico independente na memória.

const contaDoJoao = criarConta(100); // Closure A criada com saldo 100
const contaDaMaria = criarConta(500); // Closure B criada com saldo 500

// --- EXECUÇÃO E TESTES ---

console.log("===  TESTE: CONTA DO JOÃO ===");
console.log(`Depósito de 50: ${contaDoJoao(50)}`);  // Esperado: 150.00
console.log(`Depósito de 20: ${contaDoJoao(20)}`);  // Esperado: 170.00

console.log("\n===  TESTE: CONTA DA MARIA ===");
console.log(`Depósito de 50: ${contaDaMaria(50)}`); // Esperado: 550.00 
// (Note que o saldo da Maria não foi afetado pelas operações do João)

/**
 * CONCLUSÃO:
 * O estado de 'contaDoJoao' não interfere em 'contaDaMaria'.
 * Isso prova que cada Closure carrega seu próprio "pacote" de dados (backpack).
 */