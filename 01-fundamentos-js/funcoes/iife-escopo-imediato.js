/**
 * TEMA: IIFE (Immediately Invoked Function Expression)
 * DESCRIÇÃO: 
 * Funções invocadas imediatamente são usadas para fugir do escopo global.
 * Elas criam um escopo isolado ("bolha") para que variáveis internas não
 * colidam com variáveis de outras bibliotecas ou partes do código.
 */

// CENÁRIO: Poluição do Escopo Global (O Problema)
// Imagine que o navegador ou outra biblioteca já tem uma variável 'nome'
var nome = "Sistema Global"; 

// SOLUÇÃO: Usando IIFE para proteger variáveis
(function() {
    // Variável 'nome' existe APENAS aqui dentro.
    // Não sobrescreve a variável global.
    const nome = "Magnum"; 
    console.log("Dentro da IIFE: " + nome); // Magnum
    
    //Lógica complexa
    const sobrenome = "Werneck";
    console.log("Executando lógica isolada...");
})();

// PROVA REAL: O escopo global continua intacto
console.log("Fora da IIFE: " + nome);

/*
    NOTA TÉCNICA:
    Entender este padrão é crucial para ler códigos legados e 
    entender como bundlers (como Webpack) funcionam por baixo dos panos.
*/