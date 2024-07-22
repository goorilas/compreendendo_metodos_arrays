//ARROWS FUNCTIONS
//uma arrow function é criada a partir de um parênteses () depois um sinal de igual e maior que +> seguido do valor que queremos retornar.
//isso tem que ser adaptado quando retornamos um objeto.
const minhaFuncao = () => "Diz Olá";
//temos que chamar a função para que seja executada.
console.log(minhaFuncao())

//outro exemplo de arrow function. colocando o objeto a ser retornado dentro dos parenteses e chaves.
const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford',
})
//chamando a função.
console.log(retornaUmCarro())

//exemplo com o (filtraAlunosDeBackend2) do exercicio anterior em arrays.js
//colocamos uma constante filtraAlunosDeBackend que recebe o argumento (aluno) com arrow (=>) aluno.curso igual áh ('Backend').
//no arrow nos passamos os argumentos dentro do parenteses antes do sinal (=>).
//tbm no arrow function quando temos só um argumento podemos omitir os () ficando: const filtraAlunosDeBackend2 = aluno => aluno.curso === 'Backend';
//mas quando temos mais de um ou nenhum argumento é obrigatório usar os ()
const filtraAlunosDeBackend2 = (aluno) => aluno.curso === 'Backend'; //uma escrita menor e mais elegante.