function carregarCotacao() {
    let url = "https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD,BTC-BRL,ETH-BRL";
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            mostrarCotacao(data);
        })
}

function mostrarCotacao(dados) {
    let conteudoCotacao = document.querySelector('#conteudo-cotacao');
    for (let moeda in dados) {
            conteudoCotacao.innerHTML +=
                "<p>Nome Conversão: " + dados[moeda].name + "</p>" +
                "<p>Valor: " + dados[moeda].bid + "</p>"
    }
}



// Método sem looping, precisa colocar todas as conversões.


// function MostraCotacao(dados){
//     let conteudoCotacao = document.querySelector('#conteudo-cotacao');
//     conteudoCotacao.innerHTML = "<p>Nome Conversão: " + dados.USDBRL.name + "</p>" +
//                                 "<p>Valor: " + dados.USDBRL.bid + "</p>"


// }