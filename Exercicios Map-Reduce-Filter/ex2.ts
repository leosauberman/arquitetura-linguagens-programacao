const nomes = ["Ben", "Jafar", "Matthews", "Priya", "Brian"];

const invertidos = nomes.map(nome => {
    let nomeInvertido = '';
    for(let i = nome.length - 1; i >= 0; i--){
        nomeInvertido += nome[i];
    }
    return nomeInvertido
});

// console.log(invertidos);

const maiorNome = nomes.reduce((acc, curr) => {
    if(curr.length > acc.length) return curr;
    return acc;
}, nomes[0]);

// console.log(maiorNome);