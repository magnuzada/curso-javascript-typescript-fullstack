/*
 * Métodos úteis para Objetos em JavaScript
 * Praticando cópia, inspeção e descritores.
 */

// 1. O Objeto Original (Base de dados)
const produto = { 
    nome: 'Caneca de Café', 
    preco: 25.90 
};

// 2. Cópia Independente (Spread Operator)
// Criamos um novo objeto na memória, alterando o preço sem afetar o original.
const produtoCopia = { 
    ...produto, 
    preco: 40.00,
    material: 'Porcelana' // Adicionando uma nova chave na cópia
};

console.log('--- Comparação de Objetos ---');
console.log('Original:', produto);
console.log('Cópia (Alterada):', produtoCopia);

// 3. Inspeção de Chaves e Valores
console.log('\n--- Inspeção ---');
console.log('Chaves do produto:', Object.keys(produto));
console.log('Valores do produto:', Object.values(produto));

// 4. O "Raio-X" da Propriedade (Property Descriptor)
// Mostra as permissões ocultas (writable, enumerable, configurable)
console.log('\n--- Descritores (nome) ---');
console.table(Object.getOwnPropertyDescriptor(produto, 'nome'));

// 5. Iteração Dinâmica (Object.entries)
// Transformamos o objeto em array para percorrer chave e valor simultaneamente.
console.log('\n--- Listagem de Propriedades (Cópia) ---');
Object.entries(produtoCopia).forEach(([chave, valor]) => {
    console.log(`>> ${chave.toUpperCase()}: ${valor}`);
});