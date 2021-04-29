let janela = document.querySelector('#janela');
let titulo = document.querySelector('#titulo');

janela.addEventListener('mouseover', () => {
  janela.setAttribute('src', 'janela-aberta.png');
  titulo.textContent = 'Janela Aberta';
});

janela.addEventListener('mouseout', () => {
  janela.setAttribute('src', 'janela-fechada.png');
  titulo.textContent = 'Abra a janela';
});

janela.addEventListener('click', () => {
  janela.setAttribute('src', 'janela-quebrada.png');
  titulo.textContent = 'Janela quebrada';
})