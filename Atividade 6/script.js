jogo();

function jogo() {
  const player = Number(prompt('Escolha:\n1. Pedra\n2. Papel\n3. Tesoura'));
  const jogadas = ['Pedra', 'Papel', 'Tesoura'];

  if (isNaN(player)) {
    alert('Valor Invalido');
    return;
  }
  
  // jogada da maquina
  const maquina = Math.floor(Math.random() * 3 + 1);

  alert(`Maquina joga como ${jogadas[maquina - 1]}`);

  if (player === maquina) {
    alert('Empate');
  } else if ((player === 1 || maquina === 1) && (maquina === 2 || player === 2)) {
    alert('Papel cobre pedra');
  } else if ((player === 2 || maquina === 2) && (maquina === 3 || player === 3)) {
    alert('Tesoura corta papel');
  } else if ((player === 1 || maquina === 1) && (maquina === 3 || player === 3)) {
    alert('Pedra quebra tesoura');
  }
}
