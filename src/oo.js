// Programação Orientada a Objetos
// exemplo de função construtora sem poo.
// function Pokemon(nomePokemon, tipoPokemon) {
//     this.nome = nomePokemon;
//     this.tipo = tipoPokemon;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

//exemplo com poo.
class Pokemon {
//usando encapsulamento com o (hp)
//para tornar um recurso privado usamos o (#), e ele fica condicionado a ser usado apenas dentro da classe.
    #hp = 100;

//ultilizando o constructor.
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    //criando um método.
    //acessando apropriedade nome atraves no this.nome depois pegamos o argumento e ultilizamos no parenteses(nomeDoAtaque) para compor a string.
    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

//para alterar um atributo privado usamos um metodo dentro da classe, só ele poderá acessar esse valor.
    exibeHp() {
        console.log(this.#hp);
    }
}

//ultilizando a herança no ES6 com poo.
//para dizer que Pikachu é uma classe herdeira ultilizamos o argumanto (extends) e depois passamos a classe mãe no caso (Pokemon).
class Pikachu extends Pokemon {
//para tirar a redundância dos argumentos. ja sabmos dos argumentos ... sabemos que o pikachu é do tipo eletrico, entao não faz sentido ter argumentos.
//para chamarmos o construtor da classe mãe (Pokemon), usamos uma função (super), que é como se fosse uma função. 
//herança
    constructor() {
        super ('Pikachu', 'Elétrico')
    }
    //tambám sabemos que ele ataca com o choque do trovão. entao podemos sobrescrever esse metodo atacar, e tirar os argumentos.
    //polimorfismo
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
} 

const pikachuDoAsh = new Pikachu(); //não sendo necessario mas o uso dos argumentos dentro do parenteses por estar usando o (super) 

pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.hp = 5000;

console.log(pikachuDoAsh.hp)

pikachuDoAsh.atacar();

pikachuDoAsh.exibeHp();

const pikachu = new Pokemon('pikachu', 'elétrico');
//chamanto o metodo
// pikachu.atacar('choque do trovão')
// pikachu.nome = 'pikachu';
// pikachu.tipo = 'elétrico';
console.log(pikachu);
console.log(pikachuDoAsh)
//as instâncias da classe filha também são considedas instâncias da classe mãe.
console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);