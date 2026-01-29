function Usuario(id, login) {
    // Configuração do ID
    Object.defineProperty(this, 'id', {
        enumerable: true,
        writable: false,
        configurable: false,
        value: id
    });

    // Configuração do Login
    Object.defineProperties(this, {
        login: {
            enumerable: true,
            writable: true,
            configurable: false,
            value: login
        }
    });
}

const user1 = new Usuario(123, 'magnuzada');
delete user1.id;    // Não deve apagar
user1.id = 456;     // Não deve mudar
user1.login = 'dev_mag'; // Deve mudar
console.log(user1);

// 1. Criando o Array de usuários (Usando sua Função Construtora)
const usuarios = [
    new Usuario(1, 'magnuzada'),
    new Usuario(2, 'ana_dev'),
    new Usuario(3, 'joao_engineer')
];

// 2. Integração com MAP
// Vamos extrair apenas os logins do nosso array de objetos protegidos
const listaLogins = usuarios.map(obj => obj.login);

console.log('Logins extraídos:', listaLogins);
// Saída esperada: ['magnuzada', 'ana_dev', 'joao_engineer']