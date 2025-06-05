function getValores() {
  const a = parseFloat(document.getElementById('valor01').value.replace(',', '.'));
  const b = parseFloat(document.getElementById('valor02').value.replace(',', '.'));
  return { a, b };
}

function soma() {
  const { a, b } = getValores();
  document.getElementById('demo').textContent = a + b;
}

function subtrair() {
  const { a, b } = getValores();
  document.getElementById('demo').textContent = a - b;
}

function multiplicar() {
  const { a, b } = getValores();
  document.getElementById('demo').textContent = a * b;
}

function dividir() {
  const { a, b } = getValores();
  document.getElementById('demo').textContent = a / b;
}

function potenciar() {
  const { a, b } = getValores();
  document.getElementById('demo').textContent = a ** b;
}

function limpar() {
  document.getElementById('valor01').value = '';
  document.getElementById('valor02').value = '';
  document.getElementById('demo').textContent = '';
}
