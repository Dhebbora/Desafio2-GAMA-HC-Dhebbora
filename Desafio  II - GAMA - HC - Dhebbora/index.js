//função para adicionar uma nov linha na tabela

function salvarDados() {
  var cadastro = new Object();
  cadastro.nome = document.getElementById('inNome').value;
  cadastro.endereco = document.getElementById('inAdress').value;
  cadastro.email = document.getElementById('inEmail').value;
  cadastro.telefone = document.getElementById('inPhone').value;

  localStorage.setItem('cliente', JSON.stringify(cadastro));

  var showCliente = JSON.parse(localStorage.getItem('cliente'));
  console.log(showCliente);

  var tabela = document.getElementById('divisao_tabela');
  var numerosLinhas = tabela.rows.length;
  var linhas = tabela.insertRow(numerosLinhas);
  var celula1 = linhas.insertCell(0);
  var celula2 = linhas.insertCell(1);
  var celula3 = linhas.insertCell(2);
  var celula4 = linhas.insertCell(3);
  var celula5 = linhas.insertCell(4);
  celula1.innerHTML = cadastro.nome;
  celula2.innerHTML = cadastro.endereco;
  celula3.innerHTML = cadastro.email;
  celula4.innerHTML = cadastro.telefone;
  celula5.innerHTML = "<button onclick='removeLinha(this)'> X </button>";

}
function removeLinha(linhas) {
  var i = linhas.parentNode.parentNode.rowIndex;
  document.getElementById('divisao_tabela').deleteRow(i);
}