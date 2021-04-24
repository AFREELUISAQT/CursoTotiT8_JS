let nomeUm = prompt('Nome da Primeira Pessoa:') 
let idadeUm = Number (prompt('Idade da Primeira Pessoa:'))



let nomeDois = prompt('Nome da Segunda Pessoa:') 
let idadeDois = Number (prompt('Idade da Segunda Pessoa:'))

{
    console.log('Olá, ' + nomeUm + ('/ ') + nomeDois + ', é um Prazer!');
    console.log('Suas Idades são: ' + nomeUm + (': ') + idadeUm + ' anos; e '  + nomeDois + (': ') + idadeDois + ' anos.');   
}

alert('Olá, ' + nomeUm + ('/ ') + nomeDois + ', é um Prazer! Bora Inspecionar? ');

let PessoaUm = {
    nomeUm : nomeUm,
    idadeUm : idadeUm,
}

let PessoaDois = {
    nomeDois : nomeDois,
    idadeDois : idadeDois,
}


if (PessoaUm.idadeUm > PessoaDois.idadeDois) {
    console.log(nomeUm + ', Você é mais velho(a) que: ' + nomeDois);
}
else if (PessoaUm.idadeUm < PessoaDois.idadeDois) {
    console.log(nomeUm + ', Você é mais novo(a) que: ' + nomeDois);
}
else{
    console.log(nomeUm + ' e ' + nomeDois + ', Vocês Tem a Mesma Idade.');
}

