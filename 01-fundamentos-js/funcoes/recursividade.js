// Função Recursiva: Contagem Regressiva
function recursiva(max) {
    console.log(max);
    
    // CASO BASE (O Freio)
    // Se chegou a 0, imprime a mensagem final e para a execução.
    if (max <= 0) {
        console.log("DECOLAR! 🚀");
        return; 
    }
    
    // CHAMADA RECURSIVA
    // Chama a si mesma com um número a menos
    recursiva(max - 1);
}

// Executando
recursiva(10);