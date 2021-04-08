const priNum = prompt('Coloque o primeiro numero:');
const segNum = prompt('Coloque o segundo numero:');
const terNum = prompt('Coloque o terceiro numero:');

alert(maiorNumero(priNum, segNum, terNum));

function maiorNumero(priNum, segNum, terNum) {
  if ([priNum, segNum, terNum].some(value => isNaN(value) || !value)) {
    return 'Valor Inválido!';
  }

  const mensagem = `O maior numero é ${Math.max(priNum, segNum, terNum)}`;

  return mensagem;
}