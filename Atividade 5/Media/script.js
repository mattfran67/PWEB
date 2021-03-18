const nome = prompt("Digite seu nome:");
const nota1 = Number(prompt("Digite a nota 1:"));
const nota2 = Number(prompt("Digite a nota 2:"));
const nota3 = Number(prompt("Digite a nota 3:"));

console.log(nota1);

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
  alert("Nota Inválida!");
} else {
  const media = (nota1 + nota2 + nota3) / 3;
  
  alert(`${nome} sua nota final é: ${(media.toFixed(2))}`);
}