
// Pedido de um cliente que montaremos conforme id dos itens
let pedido = {
  nomes: [],
  precoTotal: 0,
  pesos: {
    'gramas': 0,
    'mililitros': 0
  },
}

// Função será responsável por atualizar a variável nomes
function definirNome(minhaListaDeProdutos){
  for(let i=0;i<minhaListaDeProdutos.length;i++){
pedido.nomes.push(minhaListaDeProdutos[i].nome)
  }
return pedido.nomes
}

// Função será responsável por atualizar a variável precoTotal
function definirPrecoTotal(minhaListaDeProdutos){
  for(let i=0;i<minhaListaDeProdutos.length;i++){
pedido.precoTotal+=minhaListaDeProdutos[i].preco
  }
  return pedido.precoTotal
}

// Função será responsável por atualizar a variável pesos
function definirGramasEMililitros (minhaListaDeProdutos){
  let ok=[]
  let mili=[]
  let grama=[]
  for(let i=0;i<minhaListaDeProdutos.length;i++){
     ok.push(minhaListaDeProdutos[i].peso)
     
}
for(let j=0;j<ok.length;j++){
  if((ok[j].split("")[ok[j].split("").length-1])=="l"){
mili.push(ok[j])
  }
  else{
    grama.push(ok[j])
  }
}
let novoMili=[]
let novoGrama=[]
for(let a=0;a<mili.length;a++){
  novoMili.push(parseInt(mili[a].slice(0,-2)))
}
for(let cont=0;cont<grama.length;cont++){
  novoGrama.push(parseInt(grama[cont].slice(0,-1)))
}
let somaMili=0
for(let b=0;b<novoMili.length;b++){
somaMili+=novoMili[b]
}
let somaGrama=0
for(let s=0;s<novoGrama.length;s++){
  somaGrama+=novoGrama[s]
  }

  pedido.pesos.gramas=somaGrama+'g'
  pedido.pesos.mililitros=somaMili+'ml'
  return pedido.pesos
}


// Função será responsavel por atualizar a variavel minhaListaDeProdutos 
function encontrarItensPeloId(idList){
  let produtos=[]
for(let i=0;i<idList.length;i++){
  for(let j=0;j<cardapio.length;j++){
    if(idList[i]==cardapio[j].id){
      produtos.push(cardapio[j])
    }
  }
}
return produtos
}
// Função será responsável pela apresentação do pedido. Obs: usar console.log() invés return na string criada.
function apresentacao() {
console.log(pedido.nomes)
console.log(pedido.pesos)
console.log(pedido.precoTotal)
}

// Função principal da nossa aplicação, será responsável por chamar as funções.
function principal(idDosProdutosComprados){
  // objetos que serão filtrados conforme o id dos itens. Obs: esse sera nosso array de objetos.
  const minhaListaDeProdutos = encontrarItensPeloId(idDosProdutosComprados);
  
  // atualizar nomes
definirNome(minhaListaDeProdutos);

  // atualiar pesos
  definirGramasEMililitros(minhaListaDeProdutos);

  // atualizar precoTotal
  definirPrecoTotal(minhaListaDeProdutos);

  // apresentação do pedido
  apresentacao()
}

principal([1,3,5])
