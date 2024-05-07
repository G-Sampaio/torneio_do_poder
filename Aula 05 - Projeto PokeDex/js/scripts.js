
function carregar_pokemons() {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            data.results.forEach(function(pokemon) {
                carregarDetalhes(pokemon.url);
            });
        })
}

function carregarDetalhes(url) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(pokemon) {
            adicionarCardPokemon(pokemon);
        })
}

function adicionarCardPokemon(pokemon) {
    const divCardElemento = document.createElement("div");
    divCardElemento.classList.add("card");

    const imagemElemento = document.createElement("img");
    imagemElemento.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`);
    imagemElemento.style.width = "90%";

    const textoElemento = document.createElement("h1");
    textoElemento.innerHTML = pokemon.name;

    const divElemento = document.getElementById("conteudo-pokemon");

    divCardElemento.appendChild(imagemElemento);
    divCardElemento.appendChild(textoElemento);
    divElemento.appendChild(divCardElemento);
}
carregar_pokemons();
