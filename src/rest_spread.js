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
//exemplo.
function somar2() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}
console.log(somar2(10, 20, 30))

//mostrando como funciona o (rest)
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