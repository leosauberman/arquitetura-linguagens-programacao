var nomes = ["Ben", "Jafar", "Matthews", "Priya", "Brian"];
var invertidos = nomes.map(function (nome) {
    var nomeInvertido = '';
    for (var i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i];
    }
    return nomeInvertido;
});
// console.log(invertidos);
var maiorNome = nomes.reduce(function (acc, curr) {
    if (curr.length > acc.length)
        return curr;
    return acc;
}, nomes[0]);
console.log(maiorNome);
