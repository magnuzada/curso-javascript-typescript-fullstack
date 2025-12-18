/**
 * TEMA: Factory Functions (Funções Fábrica)
 * OBJETIVO: Criar objetos complexos de forma automatizada e encapsulada.
 * * CONCEITOS:
 * 1. Factory Function: Função que retorna um objeto.
 * 2. 'this': Refere-se ao objeto que está sendo executado no momento.
 * 3. Getter: Método que finge ser atributo (leitura).
 * 4. Setter: Método que intercepta uma atribuição (escrita/validação).
 */

function criaProduto(nome, precoBase) {
    return {
        nome,
        precoBase,
        
        // Método normal
        apresentar() {
            return `O produto ${this.nome} custa R$${this.precoBase}`;
        },

        // Getter: Acessa como propriedade (sem parênteses)
        // Útil para valores calculados
        get precoComImposto() {
            return (this.precoBase * 1.1).toFixed(2);
        },

        // Setter: Intercepta a atribuição de valor
        // Útil para validação e tratamento de dados
        set alterarNome(novoNome) {
            if (novoNome.length < 3) {
                console.log('ERRO: Nome muito curto.');
                return;
            }
            this.nome = novoNome.toUpperCase();
        }
    };
}

// --- TESTES ---
const mouse = criaProduto('Mouse Gamer', 100);

// Usando método
console.log(mouse.apresentar()); 

// Usando Getter (note a falta de parênteses)
console.log(`Preço final: R$${mouse.precoComImposto}`); 

// Usando Setter (note o uso do =)
mouse.alterarNome = 'Teclado Mecânico'; // Setter valida e transforma em maiúsculo
console.log(mouse.nome); // "TECLADO MECÂNICO"

mouse.alterarNome = 'Oi'; // Dispara a validação de erro