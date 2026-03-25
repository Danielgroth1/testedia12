// Variável LGC para mensagens
const LGC = "Sistema de Cadastro de Cliente";

// Dado do cliente
const cliente = {
  nome: "",
  email: "",
  telefone: ""
};

// Função 1: Exibir título do sistema
function exibirTitulo() {
  console.log("=".repeat(40));
  console.log(LGC);
  console.log("=".repeat(40));
}

// Função 2: Cadastrar cliente
function cadastrarCliente(nome, email, telefone) {
  cliente.nome = nome;
  cliente.email = email;
  cliente.telefone = telefone;
  console.log(LGC + " - Cliente cadastrado com sucesso!");
  console.log("Nome: " + cliente.nome);
}

// Função 3: Listar dados do cliente
function listarCliente() {
  console.log(LGC + " - Dados do Cliente:");
  console.log("Nome: " + cliente.nome);
  console.log("Email: " + cliente.email);
  console.log("Telefone: " + cliente.telefone);
}

// Executando as funções
exibirTitulo();
cadastrarCliente("João Silva", "joao@email.com", "(11) 99999-8888");
listarCliente();

let altura 6
let largura 4
let area = altura * largura
console.log ("A área do retângulo é: " + area);


let num1 = 10
let num2 = 5
console.log (num1 > num2);
console.log (num1 < num2);
console.log (num1 == num2);
console.log (num1 != num2); 







