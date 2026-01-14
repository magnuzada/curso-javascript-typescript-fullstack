const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça', preco: 80 },
  { nome: 'Tênis', preco: 150 }
];

const nomesProdutos = produtos.map(produtos => produtos.nome);
const comIds = produtos.map((produtos, index) => ({...produtos, index}));
const precosAjustados = produtos.map(produtos => ({...produtos, preco: (produtos.preco * 1.1).toFixed(2)}));
console.log(precosAjustados);
console.log(comIds);
console.log(nomesProdutos);