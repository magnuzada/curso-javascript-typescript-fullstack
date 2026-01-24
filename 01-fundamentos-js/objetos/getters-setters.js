function Produto(nome, preco, estoqueInicial) {
  this.nome = nome;
  this.preco = preco;

  // Variável que realmente guarda o valor
  let estoquePrivado = estoqueInicial;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,    // Mostra no console
    configurable: false, // Não permite apagar a chave

    get: function() {
      return estoquePrivado;
    },

    set: function(valor) {
      if (typeof valor !== 'number' || valor < 0) {
        console.log('Erro: Valor de estoque inválido');
        return; 
      }
      estoquePrivado = valor;
      console.log(`Estoque atualizado para: ${valor}`);
    }
  });
}

// TESTANDO:
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'valor inválido'; // Vai cair no IF do erro
p1.estoque = 500;             // Vai atualizar o estoquePrivado
console.log(`Resultado final: ${p1.estoque}`); // 500