let numeroMaximo = 10;
let fraseParagrafo = `Descubra o número secreto entre 1 e ${numeroMaximo}`;
let numeroSecreto = gerarNumero();

alterarTexto('h1', 'Jogo do Número Secreto');
alterarTexto('p', fraseParagrafo);

function alterarTexto(tag, text){
  let campoTexto = document.querySelector(tag);
  campoTexto.innerHTML = text;

  responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate: 1.2});
}

function gerarNumero() {
  return parseInt(Math.random() * numeroMaximo) + 1;
}

function verificarChute() {
  var chute = document.querySelector('.container__input').value;
  
  if(chute > numeroSecreto){
    alterarTexto('p', `O número secreto é menor que ${chute}. Tente novamente!'`)
  }
  else if(chute < numeroSecreto){
    alterarTexto('p', `O número secreto é maior que ${chute}. Tente novamente!`)
  }
  else {
    alterarTexto('p', `Parabéns, você acertou! O número secreto é ${numeroSecreto}`);

    reset();
  }
}

function mensageAlert(mensage) {  
  alert(mensage);
  document.querySelector('.container__input').value = '';
}

function novoJogo() {
  numeroSecreto =  gerarNumero();  
  alterarTexto('p', `Descubra o número secreto entre 1 e ${numeroMaximo}`);;
  reset();
}

function reset() {
  document.querySelector('.container__input').value = '';
  document.querySelector('.container__botao').toggleAttribute('disabled');
  document.querySelector('.container__input').toggleAttribute('disabled');
  document.getElementById('reiniciar').toggleAttribute('disabled');
}