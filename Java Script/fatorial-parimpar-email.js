function fatorial(){
  var valor, i, fat = 1;
  valor = prompt("Digite o valor: ");

  for(i=1; i<=valor; i++){
    fat = fat * i;
  }

  alert(fat);
}

function parouimpar(){
  var valor, i;
  valor = prompt("Digite o valor: ");

  if(valor%2 == 0){
    alert("O número é par");
  }
  else{
    alert("O número é ímpar");
  }
}

function verificaemail(){
  var email = prompt('Entre com um e-mail:');

  var RegExpEmail = /^\w*(\.\w*)?@[a-z].[a-z]+(\.[a-z]+)?$/;

  if(email.search(RegExpEmail) !=-1){
      alert('Email Válido');
    }
  else{
      alert('Email Inválido');
    }

}
