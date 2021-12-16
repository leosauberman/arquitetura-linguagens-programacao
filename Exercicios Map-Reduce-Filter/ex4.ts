const medidas = 
    [{ label: "sala"    , largura: 4.5, comprimento:5 },
    { label: "quarto1"  , largura: 3.5, comprimento:2 },
    { label: "quarto2"  , largura: 2.7, comprimento:2 },
    { label: "banheiro" , largura: 1.5, comprimento:2 }];

const maiorComodo = medidas
    .map(c => {
        return {label: c.label, metragem: c.largura * c.comprimento}
    })
    .reduce((acc, valor, index) => {
        if(index === 0) return valor; 
        if(valor.metragem > acc.metragem) return valor;
        return acc; 
    });

// console.log(maiorComodo);


const metragemTotal = medidas
    .map(c => {
        return c.largura * c.comprimento
    })
    .reduce((acc, val) => {
        return acc += val;
    }, 0);

// console.log(metragemTotal);

const metragemTotalQts = medidas
    .filter(c => c.label.startsWith('quarto'))
    .map(c => {
        return c.largura * c.comprimento
    })
    .reduce((acc, val) => {
        return acc += val;
    }, 0);

console.log(metragemTotalQts);