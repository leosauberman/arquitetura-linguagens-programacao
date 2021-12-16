var notas = [8.0, 7.0, 8.3, 9.0, 4.5, 6.0, 3.7, 5.0, 7.1, 9.5, 6.0];
var media = notas.reduce(function (soma, valorAtual) {
    return soma += valorAtual;
}, 0) / notas.length;
// console.log(media);
var aprovados = notas.filter(function (nota) { return nota > 6; });
// console.log(aprovados);
var aprovadoReprovado = notas.map(function (nota) {
    if (nota > 6)
        return 'APROVADO';
    return 'REPROVADO';
});
console.log(aprovadoReprovado);
