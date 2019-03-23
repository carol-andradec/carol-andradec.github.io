function adiciona(){
  var novo = document.createElement("li");
  var palavra = document.getElementById('palavra').value;
  var node = document.createTextNode(palavra);

  novo.appendChild(node);

  document.getElementById('lista').appendChild(novo);

}

function lampada(){
    document.getElementById('lamp').src="lampada_on.gif";
}

function apagar(){
    document.getElementById('lamp').src="lampada_off.gif";
}
