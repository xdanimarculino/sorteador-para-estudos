let nomes = [];

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

function adicionarAmigo() {
  let inputNome = document.getElementById("nome"); //inputNome e refere ao que for digitado no input.
  let nomeDigitado = inputNome.value; //pega o valor digitado.
  nomes.push(nomeDigitado); //vai ser adicionado ao array (lista).
  if(nomeDigitado !== "") { //se nomeDigitado não estiver vazio.
  exibirTextoNaTela('p', 'Amigo adicionado');
  inputNome.value = ""; //limpa o imput
  }
  else { //caso contrário, se estiver vazio
    exibirTextoNaTela('p', 'Adicione um amigo primeiro!');
  }
}

function sortearAmigo() {
  if(nomes.length === 0) {
    exibirTextoNaTela('p', 'Digite um nome antes de sortear');
    return;
  }
  let indiceSorteado = Math.floor(Math.random() * nomes.length); //indiceSorteado é igual a "nomes" que é o nome do meu array. aqui eu quero sortear um nome aleatório que está na lista, então posso usar o Math.random que gera um número decimal entre 0 e 1, mas ele não vai e retornar um número, porque dentro do array tem nomes, e eles são listados automaticamente em números. quando fazemos *nomes.length é para que esse número gerado pelo math.random se multiplique até a quantidade de itens adicionados na lista. e o math.floor é para arredondar o número para baixo, para que não haja problemas e o comando me retorne um item correto da lista.
  let sorteado = nomes[indiceSorteado];
  nomes.splice(indiceSorteado, 1);
  exibirTextoNaTela('p', `Seu amigo secreto é: ${sorteado}`);
  
  //adicionei ao html uma bibliotetca pronta de coisinhas de efeitos visuais, ai vim aqui no js, e posso chamar esse efeito que adicionei, aonde eu quero que surja.
  
  confetti({
        particleCount: 150, // quantidade de confetes
        spread: 70, // Espalhamento
        origin: { y: 0.6 } // De onde começa o efeito
    });
}
