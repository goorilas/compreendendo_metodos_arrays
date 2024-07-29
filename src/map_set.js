//o map é uma estrutura tipo (dicionário), é um conjunto de valores e esses valores são como objetos.
//por exemplo.
let meuMap = new Map();
//temos como retorno {'nome' => 'davi'} onde temos a chave do item (nome) apontando para o valor (davi).
meuMap.set("nome", "davi");
meuMap.set("stack", "html, css, js");
console.log(meuMap);

const nome = meuMap.get("nome");
//aqui a gente tem o retorno do valor (davi) com get.
console.log(nome)

//podemos tambem recuperar a quantidade de itens dentro de um (map), para isso a gente usa um atributo chamado (size).
console.log(meuMap.size)

//podemos verificar se determinada chave existe em um (map) com o atributo chamado (has).
console.log(meuMap.has("nome"))

//temos a função de fazer a limpeza do (map). remover todos os itens ali dentro.
//meuMap.clear()
//se estiver tudo oks ele voltará com o valor (0)
console.log(meuMap.size)

//tbm podemos fazer uma iteração dentro dos itens do (map) com (for).
//para fazer a iteração em um (map) ultilizamos o (for) com uma variavel seguida de (of) seguido de uma função (keys()).
for (let chave of meuMap.keys()) {
    console.log(chave);
}
//para recuperar valors usamos invez de (values()), invez de (keys()). 
for (let valor of meuMap.values()) {
//sera mostrado os valores dentro do item que esta dentro do (map) sendo stack a chave e html, css, js os valores dentro dessa chave.
    console.log(valor);
}
//usamos entries para recuperar os valores dentro de (map).
for (let entrada of meuMap.entries()) {
//será mostrado as chaves e os valores dela no console.
    console.log(entrada);
}
//tambem podemos fazer a desestruturação dendro de (map) tambem, para ter uma saida mais formatada.
for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}
//para remover um item do (map) usamos o (delete).
meuMap.delete("stack")
console.log(meuMap)

//o set é uma instrutura um pouco mais rigida nãp temos o conjunto de chave e valor dentro de um (set). e alem disse os valores não podem se repetir dentro de um (set).
const cpfs = new Set();
cpfs.add('96543869097')
cpfs.add('48639090041')
cpfs.add('36249282017')
//note que no (set) eles recebem o msm valor.
console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

//podemos fazer com forEach também.
cpfs.forEach((valor) => {
    console.log(valor);
})

//NOTA IMPORTANTE.
//conseguimos criar uma listagem de itens unicos também.
const array = ['wev dav', 'gian sousa', 'josé paulo', 'maria isabel', 'luana', 'luana', 'wev dav']
//convertendo o array para um (set)
//podemos colocar como agumnto os valores iniciais dentro de set como o array.
const arrayComoSet = new Set([...array])
//os itens são adicionados sem repetições.
console.log(arrayComoSet)

//para fazer a converção do set para um array.
const arraySemItensDuplicados = [...arrayComoSet]
console.log(arraySemItensDuplicados)
