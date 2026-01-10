const clientes = ['João', 'Maria'];

const fornecedores = ['Fábrica X', 'Distribuidora Y'];

const contatos = [... clientes, '--- SEPARADOR ---', ...fornecedores, 'Extra 1', 'Extra 2'];
console.log(contatos);

 /*
  Resultado: [
  'João',
  'Maria',
  '--- SEPARADOR ---',
  'Fábrica X',
  'Distribuidora Y',
  'Extra 1',
  'Extra 2'
]
  */