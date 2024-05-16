function apagar(id){
    // Convertendo o ID passado para o mesmo tipo do ID do jogador
    id = parseInt(id);

    // Pegar os jogadores do localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Filtrar os jogadores para remover o jogador com o id passado como parâmetro
    jogadores = jogadores.filter(jogador => jogador.id !== id);

    // Salvar a lista de jogadores atualizada no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Remover o item da página ou recarregar a página
    location.reload();
}
