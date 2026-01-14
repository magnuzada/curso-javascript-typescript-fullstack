const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça', preco: 80 },
  { nome: 'Tênis', preco: 150 }
];

const valorTotal = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log(`Total: R$${valorTotal}`);
