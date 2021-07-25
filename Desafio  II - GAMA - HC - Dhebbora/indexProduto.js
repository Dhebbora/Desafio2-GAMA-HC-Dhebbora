//função para adicionar uma nov linha na tabela

function salvarProdutos() {
  var cadastroProduto = new Object();
  cadastroProduto.produto = document.getElementById('inProduto').value;
  cadastroProduto.descricao = document.getElementById('inTipo').value;
  cadastroProduto.valor = document.getElementById('inValor').value;
  cadastroProduto.qtd = document.getElementById('inQuantidade').value;

  localStorage.setItem('produto', JSON.stringify(cadastroProduto));

  var showProduto = JSON.parse(localStorage.getItem('produto'));
  console.log(showProduto);

  var tabela = document.getElementById('divisaoProduto_tabela');
  var numerosLinhas = tabela.rows.length;
  var linhas = tabela.insertRow(numerosLinhas);
  var celula1 = linhas.insertCell(0);
  var celula2 = linhas.insertCell(1);
  var celula3 = linhas.insertCell(2);
  var celula4 = linhas.insertCell(3);
  var celula5 = linhas.insertCell(4);
  celula1.innerHTML = cadastroProduto.produto;
  celula2.innerHTML = cadastroProduto.descricao;
  celula3.innerHTML = cadastroProduto.valor;
  celula4.innerHTML = cadastroProduto.qtd;
  celula5.innerHTML = "<button onclick='removeProdutoLinha(this)'> X </button>";

}
function removeProdutoLinha(linhas) {
  var i = linhas.parentNode.parentNode.rowIndex;
  document.getElementById('divisaoProduto_tabela').deleteRow(i);
}