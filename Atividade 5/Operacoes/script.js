const num1 = Number(prompt("Digite o numero 1:"));
const num2 = Number(prompt("Digite o numero 2:"));

if (!(isNaN(num1) || isNaN(num2))) {
  const soma = num1 + num2;
  const subtr = num1 - num2;
  const prod = num1 * num2;
  const divisao = num1 / num2;
  const resto = num1 % num2;
  
  alert(`Soma: ${soma}
    \nSubtração: ${subtr}
    \nProduto: ${prod}
    \nDivisão: ${divisao.toFixed(2)}
    \nResto: ${resto}`
  );
} else {
  alert('Valor Inválido!');
}