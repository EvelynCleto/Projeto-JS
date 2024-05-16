document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs
    const nome = document.getElementById("nome").value;
    const time = document.getElementById("time").value;
    const gols = parseInt(document.getElementById("gols").value);
    const assistencias = parseInt(document.getElementById("assistencias").value);
    const foto = document.getElementById("foto").value;

    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(), // Isso está bem para criar um ID único, mas tenha em mente que não é totalmente à prova de falhas em situações de alta velocidade
        nome: nome,
        time: time,
        gols: gols,
        assistencias: assistencias,
        foto: foto
    }

    // Salvar o objeto no localStorage usando a chave "jogadores"
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    jogadores.push(jogador);
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Redirecionar o usuário para a página inicial
    window.location.href = "/futstats/index.html";
})
