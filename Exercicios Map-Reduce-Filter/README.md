# Exercícios Map-Reduce-Filter

## Exercício 1

`const notas: number[] = [8.0, 7.0, 8.3, 9.0, 4.5, 6.0, 3.7, 5.0, 7.1, 9.5, 6.0];`

### a)
```node
const media = notas.reduce((soma, valorAtual) => {
    return soma += valorAtual
}, 0) / notas.length;

console.log(media);
```

![Resultado 1-a)](https://i.ibb.co/2ktJP3D/ex1-a.png)

---

### b)
```node
const aprovados = notas.filter(nota => nota > 6);
console.log(aprovados);
```

![Resultado 1-b)](https://i.ibb.co/bXP1H0C/image.png)

---

### c)
```node
const aprovadoReprovado = notas.map(nota => {
    if(nota > 6) return 'APROVADO';
    return 'REPROVADO';
});

console.log(aprovadoReprovado);
```
![Resultado 1-c)](https://i.ibb.co/5Fby992/image.png)

---

## Exercício 2

`const nomes = ["Ben", "Jafar", "Matthews", "Priya", "Brian"];`

### a)
```node
const aprovadoReprovado = notas.map(nota => {
    if(nota > 6) return 'APROVADO';
    return 'REPROVADO';
});

console.log(aprovadoReprovado);
```

![Resultado 2-a)](https://i.ibb.co/d5Q2ThG/image.png)

---

### b)
```node
const maiorNome = nomes.reduce((acc, curr) => {
    if(curr.length > acc.length) return curr;
    return acc;
}, nomes[0]);

console.log(maiorNome);
```

![Resultado 2-b)](https://i.ibb.co/frq64Cz/image.png)

---

## Exercício 3

```node
const filmes = [
    { id: 70111470, title: "Die Hard", rating: [4.0] },
    { id: 654356453, title: "Bad Boys", rating: [5.0] },
    { id: 65432445, title: "The Chamber", rating: [3.0] }
];
```

### a)

```node
const filmes = [
    { id: 70111470, title: "Die Hard", rating: [4.0] },
    { id: 654356453, title: "Bad Boys", rating: [5.0] },
    { id: 65432445, title: "The Chamber", rating: [3.0] }
];

const topFilmes = filmes.filter(filme => filme.rating[0] >= 4).map(f => f.title);

console.log(topFilmes);
```

![Resultado 3-a)](https://i.ibb.co/6Y4GHBN/image.png)

---

### b)

```node
const topFilmesObj = filmes.filter(filme => filme.rating[0] >= 4);
console.log(topFilmesObj);
```

![Resultado 3-b)](https://i.ibb.co/FKXZ3NV/image.png)

---

## Exercício 4

```node
const medidas = 
    [{ label: "sala"    , largura: 4.5, comprimento:5 },
    { label: "quarto1"  , largura: 3.5, comprimento:2 },
    { label: "quarto2"  , largura: 2.7, comprimento:2 },
    { label: "banheiro" , largura: 1.5, comprimento:2 }];
```

### a)

```node
const maiorComodo = medidas
    .map(c => {
        return {...c, metragem: c.largura * c.comprimento}
    })
    .reduce((acc, valor, index) => {
        if(index === 0) return valor; 
        if(valor.metragem > acc.metragem) return valor;
        return acc; 
    });

console.log(maiorComodo);
```

![Resultado 4-a)](https://i.ibb.co/zxLCT6W/image.png)

---

### b)

```node
const maiorComodo = medidas
const metragemTotal = medidas
    .map(c => {
        return c.largura * c.comprimento
    })
    .reduce((acc, val) => {
        return acc += val;
    }, 0);

console.log(metragemTotal);
```

![Resultado 4-b)](https://i.ibb.co/sPLcBxX/image.png)

---

### c)

```node
const metragemTotalQts = medidas
    .filter(c => c.label.startsWith('quarto'))
    .map(c => {
        return c.largura * c.comprimento
    })
    .reduce((acc, val) => {
        return acc += val;
    }, 0);

console.log(metragemTotalQts);
```

![Resultado 4-b)](https://i.ibb.co/6B5tpvz/image.png)
