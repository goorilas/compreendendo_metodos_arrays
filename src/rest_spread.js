//aprendendo sobre REST E SPREAD.
//exemplo da função arguments. para mostrar que o rest consegue agora fazer a função de arguments com array.
function somar() {
//no JS temos uma palavra reservada que se chama (arguments) que vai retornar todos os argumentos que foram passados na função.
//e com ela podemos receber infinitos argumentos.
    console.log(arguments)
}
console.log(somar(10, 20, 30))
//esse tipo de estrutura recebe o nome de dicionário, temos o verbeite {'0':} e o conteudo dela (10). ficando {'0': 10}

//o arguments não é um array, mas ele aceita o (for), ele é iteravel.
//exemplo. sem o rest.
function somar2() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}
console.log(somar2(10, 20, 30))

//mostrando como funciona o (rest)
//podemos ultilizar apenas 1 argumento desse modo. E alem disso o operador rest tem que ser o ultimo argumento da função.
//para ultilizar o rest temos que adicionar antes do argumento três pontos (...).
//que significa que agora podemos receber inumeros argumentos nessa função.
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => { //ultilizamos os (...) apenas na hora da declaração logo acima.
    total += numeroAtual;
    return total;
    }, 0) 
    return soma;
}

console.log(somarComRest(10, 20, 30))

//SPREAD 
//com o spread operator a gente consegue separar os itens de um array.. ele tem a mesma aparencia de um rest.
//o que vai diferenciar do rest, é o seu uso.. geralmente usado para concatenações, ou console.logs.
//exemplo sem o spread.
const numeros = [1, 2, 3, 4,]
console.log(...numeros)

//segundo exemplo. unindo dois arrays.
const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolDeRj = ['vasco', 'botafogo', 'flamengo', 'fluminense'];
//podemos fazer isso atravez de uma função chamada concat.
const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDeRj);
//timesDeFutebolDeSp.concat(timesDeFutebolDeRj)
console.log(timesDeFutebol)

//exemplo com spread.
//espalhando os valores do timesdefuteboldesp para um novo array.basicamente criando uma cópia do de cima.
//para unir os dois arrays colocamos a virgula(,) depois do primeiro array com spread, adicionamos o spread novamente e botamos o array que vmos concatenar.
//isso nos possibilita a fazer a junção dos dois arrays.
const timesDeFutebol2 = [...timesDeFutebolDeSp, ...timesDeFutebolDeRj];

console.log(timesDeFutebol2)

//tbm conseguimos fazer o spread em objetos, conseguimos espalhar as propriedades do objeto. exemplo.
const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}
//para não criar uma repetição de código e ficar extenço, que não é legal, usamos o oprador spread.
//pegando as propriedades do (carroDaJulia) e mudando apenas a propriedade que é diferente no (carroDaAna).
const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}
console.log(carroDaAna)

//conecendo um outro recurso do ES6.
//desestruturação.
//exemplo sem usar a desestruturação.
//pegando o motor do carro da ana.
const motorCarroDaAna = carroDaAna.motor;

//usando a desestruturação. essa é uma forma de ascessarmos propriedades dentro de objteos.
// const {motor} = carroDaAna;

//com a desestruturação conseguimos adotar apelidos(alias) as propriedades, para caso tivermos mais de uma para executar.
const {motor: motorCarroDaAna2} = carroDaAna;
const {motor: motorCarroDaJulia2} = carroDaJulia;

console.log(motorCarroDaAna2)
console.log(motorCarroDaJulia2)

//podemos tbm fazer o uso da desestruturação em arrays.
//exemplo com os times a cima. 
//atravez do rest temos acesso ao restante dos itens times.
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
//note que ele retorna nos itens strings e no rest ele retorna os itens junto de um array.
console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)