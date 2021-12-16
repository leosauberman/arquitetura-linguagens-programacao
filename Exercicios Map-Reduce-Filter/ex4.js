var medidas = [{ label: "sala", largura: 4.5, comprimento: 5 },
    { label: "quarto1", largura: 3.5, comprimento: 2 },
    { label: "quarto2", largura: 2.7, comprimento: 2 },
    { label: "banheiro", largura: 1.5, comprimento: 2 }];
var maiorComodo = medidas
    .map(function (c) {
    return { label: c.label, metragem: c.largura * c.comprimento };
})
    .reduce(function (acc, valor, index) {
    if (index === 0)
        return valor;
    if (valor.metragem > acc.metragem)
        return valor;
    return acc;
});
// console.log(maiorComodo);
var metragemTotal = medidas
    .map(function (c) {
    return c.largura * c.comprimento;
})
    .reduce(function (acc, val) {
    return acc += val;
}, 0);
// console.log(metragemTotal);
var metragemTotalQts = medidas
    .filter(function (c) { return c.label.startsWith('quarto'); })
    .map(function (c) {
    return c.largura * c.comprimento;
})
    .reduce(function (acc, val) {
    return acc += val;
}, 0);
console.log(metragemTotalQts);
