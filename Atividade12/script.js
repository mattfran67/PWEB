const form = document.querySelector('form');
const clean = document.querySelector('#clean');

form.addEventListener('submit', validar());
clean.addEventListener('click', () => {
  form.elements[0].value = '';
  form.elements[1].value = '';
  form.elements[2].value = '';
});

function validar() {
  if (form.elements[3].checked) {
    alert('Volte sempre a esta página!');
  } else {
    alert('Que bom que você voltou a visitar esta página!');
  }
}