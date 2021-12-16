const filmes = [
    { id: 70111470, title: "Die Hard", rating: [4.0] },
    { id: 654356453, title: "Bad Boys", rating: [5.0] },
    { id: 65432445, title: "The Chamber", rating: [3.0] }
];

const topFilmes = filmes.filter(filme => filme.rating[0] >= 4).map(f => f.title);

// console.log(topFilmes);

const topFilmesObj = filmes.filter(filme => filme.rating[0] >= 4);
console.log(topFilmesObj);