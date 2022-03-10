//         chave.   valor.
var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var isa = { nome: "Isa", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var gabi = { nome: "Gabi", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var di = { nome: "Gildson", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

rafa.pontos = calculaPontos(rafa);
isa.pontos = calculaPontos(isa);
gabi.pontos = calculaPontos(gabi);
di.pontos = calculaPontos(di);

var jogadores = [rafa, isa, gabi, di];

function exibirNaTelaJogadores(jogadores) {
    var elemento = "";
    for (var indice = 0; indice < jogadores.length; indice++) {
        elemento += "<tr><td>" + jogadores[indice].nome + "</td>";
        elemento += "<td>" + jogadores[indice].vitorias + "</td>";
        elemento += "<td>" + jogadores[indice].empates + "</td>";
        elemento += "<td>" + jogadores[indice].derrotas + "</td>";
        elemento += "<td>" + jogadores[indice].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + indice + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + indice + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + indice + ")'>Derrota</button></td>";
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}
exibirNaTelaJogadores(jogadores);

function adicionarVitoria(indice) {
    var jogador = jogadores[indice];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirNaTelaJogadores(jogadores);
}
function adicionarEmpate(indice) {
    var jogador = jogadores[indice];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirNaTelaJogadores(jogadores);
}
function adicionarDerrota(indice) {
    var jogador = jogadores[indice];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibirNaTelaJogadores(jogadores);
}
