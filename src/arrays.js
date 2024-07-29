//ARRAYS COM BABEL.

const redesSociais = ['Facebook', 'Instagram', 'Twiter'];
//vamos intender o que esta acontecendo no for. esse (i) é o indice inicial de um arry. quando o (i é (0) o item inicial é facebook.)
//quando o (i) é 1 dentro do array é o instagram. 
// esse (for) só sera executado enquanto o (i) for menor do que a quantidade de itens dentro desse array.
//quando a gente faz o array.length temos o retorno de 3 itens.
for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

//fazendo a compilação com ES6, método para array com (forEach). O forEach é o unico metodo que não retorna nada ele so itera(repete).
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice}Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

//metodo map, com ele a gente pode interar por um array e a partir disso criar um novo array.
//vmos transfmormar esse array onde temos apenas strings, para um array de objetos.
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagnes'];
//basicamente vai ser igual o forEach tendo uma função com o item atual, e aqui a gente consegue manipular o item atual, e a partir disso ter o retorno de um novo array.
alunos.map(function(itemAtual) {
    //entao aqui editamos o itemAtual, que vai ser igual a um objeto
    itemAtual = {
        //itemAtual dentro de nome ainda é a string 'Gustavo', 'Julia', 'Paula', 'Wagnes'.
        nome: itemAtual,
        //aqui vmos adicionar um curso para esse aluno.
        curso: 'Frontend',
    }
    //aqui a gente tbm precisa fazer o retorno do itemAtual.
    return itemAtual;
})
//aqui precisamos de uma variavel para armazenar a resposta.
//ex: (esse método é bastante ultilizado).
const alunos1 = alunos.map(function(itemAtual) {
    itemAtual = { //poderiamos aqui tbm colocar (return {nome: itemAtual, curso: 'Frontend}), que tbm daria certo.
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

//CRIANDO OUTRO EXEMPLO com map:

//aqui criamos uma constante com array...
const numero = [1, 2, 3, 4, 5]
//aqui criamos outra constante com o metodo (map) adicionando uma função descrita como (numeroAtual) para manipular o array (numero). Conseguimos iterar nesse array, fazer modificações e ainda retornar esse array modificado. 
const dobroDosNumeros = numero.map(function(numeroAtual) {
//aqui fazemos qual função queremos executar... que sera a multiplicação pelo numero dois.
    numeroAtual = numeroAtual * 2;
//aqui retornamos a constante que criamos para armasenar o array ja com a função executada que é a multiplicação por dois dentro de (dobroDosNumeros).
    return numeroAtual; //aqui poderiamos escrever tbm (return numeroAtual * 2) excluindo a linha anterior.
})

//CRIANDO FUNÇÃO PARA BUSCA DENTRO DO ARRAY!

//usando o exemplo do alunos, usando o metodo (find) para buscar a string (Paula) dentro da constante alunos.
const paula = alunos1.find(function(item) {
//sabemos que encontramos a (Paula) pelo nome.
    return item.nome == 'Paula'//essa expressão vai retornar um boleano (true ou false), a partir disso que o (find) vai retornar os itens.
    //se o metodo (find) não encontrar nada ele vai retornar (undefined).
})

//temos outro tipo de metodo que vai retornar o indice do item. ex:
const indiceDaPaula = alunos1.findIndex(function(item) {
//lembrando que o JS vai começar a contagem do (0, 1, 2, 3, ...) 
    return item.nome == 'Paula'
    //se o metodo (findIndex) não encontrar nada ele vai retornar -1.
    //para sabe se o (indIndex) é válido ele tem que ser >= 0, outro numero diferente disso quer dizer que é invalido. como o (-1).
})

//CONHECENDO O METODO (every).

//(every) com ele a gente consegue verificar se todos os alunos fazem parte do curso de Frontend. Se todos os valores correspondem a um predicado.
//temos uma resposta boleana com esse metodo.(true ou false). exe:
//criamos uma constante (todosAlunosSaoDeFrontend) para armazenar a execução do metodo.
const todosAlunosSaoDeFrontend = alunos1.every(function(item) {
    //essa verificação será executada para todos os itens do array, e se todos forem verdadeiros vmos ter uma resposta (true) caso um deles não seja verdadeiro teremos uma resposta (false), valores boleanos.
    return item.curso === "Frontend"
})

//exemplo de como seria se adicionarmos um outro aluno mas no caso com a curso Backend.
alunos1.push( {
    nome: 'Lucio',
    curso: 'Backend',
})
//aqui ele retornará (false) pelo fato de que os valores não são todos de Frontend.
const todosAlunosSaoDeFrontend2 = alunos1.every(function(item) {
    return item.curso === "Frontend"
})

//o every tem meio que um oposto que é o (some), que verifica se pelo menos um item dentro de array contemplo esse nosso predicado, ele satisfaz a nossa condição.
const existeAlgumAlunoDeBeckend = alunos1.some(function(item) {
    return item.curso === "Backend"
})
//podemos fazer tbm a verificação de alunos que estudem os dois cursos simultâneamente. Mas como não temos esse aluno ele retornará (false).
const existeAlgumAlunoFullstack = alunos1.some(function(item) {
    return item.cruso === "Frontend" && item.curso === "Backend"
})

//podemos tbm filtrar apenas os alunos desejados. com o metodo (filter)
//ex: os alunos de backend.
const alunosDeBackend = alunos1.filter(function(item) { //essa função dentro de filter recebe o nome de função anonima por que é uma função que não recebe um nome.
    return item.curso === "Backend";
})

//podemos tbm dar um nome a função e coloca-la dentro de (filter). Para não precisarmos dar return e ficar mais formatado.
function fintraAlunosBackend(aluno) {
    return aluno.curso === 'Backend';
}
const alunosDeBackend2 = alunos1.filter(fintraAlunosBackend)

//vmos ao ultimo metodo de array dessa parte que é o (reduce), com o reduce a gente consegue reduzir o conteudo de um array em um unico valor.
const nums = [10, 20, 30, 10]
//nesse metodo vmos receber dois argumentos (o acumulador e o itemAtual)
const soma = nums.reduce(function(acumulador, itemAtual) {
//o acumulador vai ter como valor inicial o (0) vai passar pelo primeiro item (10) depois vai somar com (20) depois (30) e depois (10).
//assim somamos todos os numeros dentro do array. para fazer isso pegamos o acumulador que vai receber o valor do itemAtual, como abaixo.
//no caso do (+=) recebendo um valor numérico, ele vai somar.
    acumulador += itemAtual;
//e precisamos dar um return no acumulador.
    return acumulador
}, 0) //aqui o valor inicial vai ser o (0).

//tbm podemos fazer usando o (for).
//cria-se uma variavel.
let somaComFor = 0;
//variavel (i) igual a (0), enquanto (i) for menor que nums.length, o (i) incrementa.
for (let i = 0; i < nums.length; i++) {
//pegamos o somaComFor adicionando nums[i].
    somaComFor += nums[i];
}

//o (reduce) é bastante conhecido para trabalhas com numeros, mas tbm pode ser usado para trabalhar com strings.
//como por exemplo:
const nomesDosAlunos = alunos1.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `; //no caso do (+=) recebendo uma string ele fará uma concatenação. agregando um valor novo ao (acumulador), sem remover o valor anterior.
    //templatestring usada somente para colocar um espaço.
    return acumulador;
}, '')//o valor inicial vai ser uma string vazia, só aspas ('').

console.log(alunos1)
console.log(dobroDosNumeros)
console.log(paula)
console.log(indiceDaPaula)
console.log(todosAlunosSaoDeFrontend)
console.log(todosAlunosSaoDeFrontend2)
console.log(existeAlgumAlunoDeBeckend)
console.log(existeAlgumAlunoFullstack)
console.log(alunosDeBackend)
console.log(alunosDeBackend2)
console.log(soma)
console.log(somaComFor)
console.log(nomesDosAlunos)