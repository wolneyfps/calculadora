function soma() {
    var a = parseFloat(document.getElementById('valor01').value);
    var b = parseFloat(document.getElementById('valor02').value);
    document.getElementById('demo').innerHTML = a + b;
  }
  
  function subtrair() {
    var a = parseFloat(document.getElementById('valor01').value);
    var b = parseFloat(document.getElementById('valor02').value);
    document.getElementById('demo').innerHTML = a - b;
  }
  
  function multiplicar() {
    var a = parseFloat(document.getElementById('valor01').value);
    var b = parseFloat(document.getElementById('valor02').value);
    document.getElementById('demo').innerHTML = a * b;
  }
  
  function dividir() {
    var a = parseFloat(document.getElementById('valor01').value);
    var b = parseFloat(document.getElementById('valor02').value);
    if (b === 0) {
      document.getElementById('demo').innerHTML = "Erro: divisão por zero!";
    } else {
      document.getElementById('demo').innerHTML = a / b;
    }
  }
  
  function potenciar() {
    var a = parseFloat(document.getElementById('valor01').value);
    var b = parseFloat(document.getElementById('valor02').value);
    document.getElementById('demo').innerHTML = Math.pow(a, b);
  }
  