class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

let pessoas = []

let form = document.querySelector('#cadastro');
form.addEventListener('btn-cadastro', function (evento) {
  evento.preventDefault();

});

let btnEnvio = document.getElementById('btn-cadastro');
btnEnvio.addEventListener('click', function () {

  let nome = document.querySelector('#nome').value;
  let idade = Number(document.querySelector('#idade').value);

  let pessoa = new Pessoa(nome, idade);
  pessoas.push(pessoa);
  alert("Pessoa Cadastrada com Sucesso! Pode Cadastrar mais Uma...");

  document.querySelector('#nome').value = '';
  document.querySelector('#idade').value = '';

  let li = document.createElement('li');
  li.textContent = pessoa.nome;
  let lista = document.getElementById('listado');
  lista.appendChild(li);
  let comparando = document.getElementById('comparando');
  comparando.textContent = `${idadeMaior().nome}, de ${idadeMaior().idade} anos, é a pessoa mais Velha.`;
});

function idadeMaior() {
  if (pessoas.length == 1) return pessoas[0];
  let ordenIdades = pessoas.sort((a, b) => b.idade - a.idade);
  return ordenIdades[0];
}

