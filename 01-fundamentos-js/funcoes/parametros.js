/**
 * TEMA: Parâmetros de Função (Básico e Avançado)
 * CONCEITOS: Default Parameters, Destructuring e Rest Operator
 * * OBJETIVO:
 * Simular a configuração de um servidor para demonstrar como lidar com:
 * 1. Valores padrão (evitar undefined).
 * 2. Objetos de configuração (desestruturação).
 * 3. Argumentos infinitos (Rest Operator).
 */

// --- SIMULAÇÃO: CONFIGURADOR DE SERVIDOR ---

/*
  A função recebe:
  1. 'config': Um Objeto que será desestruturado.
     - Definimos valores padrão para 'porta' e 'host' caso não sejam enviados.
     - Definimos '= {}' no final para evitar erro caso a função seja chamada sem nenhum objeto.
  2. '...rotas': O Rest Operator captura todos os argumentos restantes em um Array.
*/
function configurarServidor({ porta = 3000, host = 'localhost', protocolo = 'http' } = {}, ...rotas) {
    
    console.log(`\n[SISTEMA] Iniciando servidor...`);
    console.log(`- Endereço: ${protocolo}://${host}:${porta}`);
    
    // Verificando se existem rotas capturadas pelo Rest Operator
    if (rotas.length === 0) {
        console.log(`- Aviso: Nenhuma rota foi configurada.`);
        return;
    }

    console.log(`- Carregando ${rotas.length} rotas dinâmicas:`);
    
    // Como 'rotas' é um array, podemos usar métodos como forEach, map, reduce...
    rotas.forEach((rota, index) => {
        console.log(`  [${index + 1}] Endpoint ativo: ${rota}`);
    });

    console.log(`[SUCESSO] Servidor online e aguardando requisições.`);
}


// --- ÁREA DE TESTES ---

// CASO 1: Tudo padrão (sem argumentos)
// Usa porta 3000, localhost e array de rotas vazio.
configurarServidor();

// CASO 2: Configuração parcial + Rotas
// Sobrescreve a porta para 8080, mantém host padrão.
// Passa 3 rotas soltas que são agrupadas pelo Rest Operator.
configurarServidor(
    { porta: 8080 }, 
    '/api/usuarios', 
    '/api/produtos', 
    '/api/vendas'
);

// CASO 3: Argumentos inválidos (Curiosidade)
// Se tentássemos fazer isso com 'arguments' antigo, daria trabalho limpar.
// Com Rest Operator, ele separa limpo.
configurarServidor({ host: '192.168.0.1' }, '/dashboard');