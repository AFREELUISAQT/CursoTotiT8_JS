let nome = prompt('Qual é seu Nome?') 
let sobreNome = prompt('Qual é seu Sobrenome?') 
let idade = Number (prompt('Qual é sua Idade?'))
let nacionalidade = prompt('Qual é sua nacionalidade?')
let cor = prompt('Qual é sua Cor Favorita?')

{
    console.log('Olá, ' + nome + (' ') + sobreNome + ', é um Prazer!');
    console.log('Sua Idade é: ' + idade);
    console.log('Sua Nacionalidade é: ' + nacionalidade);
    console.log('Sua Cor Favorita é: ' + cor);   
}

alert('Olá, ' + nome + (' ')+ sobreNome +', é um Prazer! Bora Inspecionar? ');

/////////OBJETO OPCIONAL/////////////

Pessoa = {
   nome : nome,
   sobreNome : sobreNome,
   idade : idade,
   nacionalidade : nacionalidade,
   cor : cor
}

console.table(Pessoa)