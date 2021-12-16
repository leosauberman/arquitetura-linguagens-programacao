const notas: number[] = [8.0, 7.0, 8.3, 9.0, 4.5, 6.0, 3.7, 5.0, 7.1, 9.5, 6.0];

const media = notas.reduce((soma, valorAtual) => {
    return soma += valorAtual
}, 0) / notas.length;

// console.log(media);

const aprovados = notas.filter(nota => nota > 6);
// console.log(aprovados);

const aprovadoReprovado = notas.map(nota => {
    if(nota > 6) return 'APROVADO';
    return 'REPROVADO';
});

console.log(aprovadoReprovado);