const select = document.querySelector('select');

select.onchange = () => {
  if (confirm('Quer abrir a janela do curso?')) {
    location.assign(`./curso.html?curso=${select.value}`);
  }
}