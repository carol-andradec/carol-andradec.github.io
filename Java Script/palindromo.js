function verifica(){
  var palavra, reverso;

  palavra = prompt("Digite a palavra");
  reverso = palavra.split('').reverse().join('');

  if(palavra == reverso){
    alert("É palíndromo");
  }
  else{
    alert("Não é palíndromo");
  }
}
