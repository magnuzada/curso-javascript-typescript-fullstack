/**
 * TEMA: Retorno de Função e Closures
 * OBJETIVO: Criar um gerador de IDs sequenciais com estado privado.
 * * CONCEITO CHAVE:
 * Ao retornar uma função de dentro de outra, criamos um "Closure".
 * A função interna mantém acesso às variáveis da função externa (o 'contador'),
 * mesmo após a externa ter terminado de executar.
 */

function criarGeradorDeId() {
    // Esta variável é PRIVADA. Ninguém de fora consegue alterá-la diretamente.
    let contador = 0; 

    // Retornamos a função que tem permissão para mexer no contador
    return function() {
        contador++;
        return contador;
    };
}

// --- TESTES ---

// CRIANDO O GERADOR A (Contexto 1)
const geradorUsuarios = criarGeradorDeId();

console.log("ID Usuário:", geradorUsuarios()); // 1
console.log("ID Usuário:", geradorUsuarios()); // 2
console.log("ID Usuário:", geradorUsuarios()); // 3


// CRIANDO O GERADOR B (Contexto 2 - Totalmente isolado)
const geradorProdutos = criarGeradorDeId();

console.log("\nID Produto:", geradorProdutos()); // 1 (Começa do zero novamente)
console.log("ID Produto:", geradorProdutos()); // 2

// O gerador A continua de onde parou, pois tem sua própria "mochila" de variáveis
console.log("\nID Usuário (retomando):", geradorUsuarios()); // 4