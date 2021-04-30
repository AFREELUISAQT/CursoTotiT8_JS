
alert('Olá! Vamos testar a comparação de idades sub cadastro de varias pessoas..... Então, vamos lá!');

class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }

let pessoas = []
let novoCadastro = 's'
let contador = 0

while (novoCadastro === 's' || novoCadastro === 'S') {
    contador  += 1
    alert("CADASTRO DE PESSOA nº " + (contador))

    let nome = prompt("Nome da Pessoa?")
    let idade = Number (prompt("Idade da Pessoa?"))

    console.log(`Cadastro OK de: ${nome} com ${idade} anos.`)

    let cadastro = new Pessoa(nome, idade)
       
    pessoas.push(cadastro)

    novoCadastro = prompt("VAMOS CADASTRAR OUTRA PESSOA? (s/n)");
   
}

if (pessoas.length > 1){
    let pessoaPorIdade = pessoas.sort((a, b) => a.idade - b.idade);
    let idadeMaior = pessoaPorIdade[pessoaPorIdade.length - 1];
    let velho = `${idadeMaior.nome} de ${idadeMaior.idade} anos, é a pessoa mais Velha`;
    console.log(velho);
 
}

alert('Cadastros feitos com Sucesso!, Bora Inspecionar?');




