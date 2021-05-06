const text = document.querySelector('#text');
const radios = document.querySelectorAll('[name=caps]');

text.onkeydown = () => {
  if (radios[0].checked === true) {
    text.value = text.value.toUpperCase();
    console.log('ads')
  } else {
    text.value = text.value.toLowerCase();
  }
}
