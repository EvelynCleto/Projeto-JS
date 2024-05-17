function somarAssistencia(id){
    // Pegar os jogadores do localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Encontrar o jogador com o id passado como parâmetro
    const jogador = jogadores.find(jogador => jogador.id == id);

    if (jogador) {
        // Somar 1 assistência ao jogador
        jogador.assistencias++;

        // Atualizar o elemento na interface do usuário que exibe as assistências
        const assistenciasElement = document.getElementById(`assistencias-${id}`);
        if (assistenciasElement) {
            assistenciasElement.textContent = jogador.assistencias;
        }

        // Salvar a lista de jogadores no localStorage
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
    }
}

function subtrairAssistencia(id){
    // Pegar os jogadores do localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Encontrar o jogador com o id passado como parâmetro
    const jogador = jogadores.find(jogador => jogador.id == id);

    if (jogador) {
        // Subtrair 1 assistência ao jogador
        jogador.assistencias--;

        // Garantir que as assistências não fiquem negativas
        if (jogador.assistencias < 0) {
            jogador.assistencias = 0;
        }

        // Atualizar o elemento na interface do usuário que exibe as assistências
        const assistenciasElement = document.getElementById(`assistencias-${id}`);
        if (assistenciasElement) {
            assistenciasElement.textContent = jogador.assistencias;
        }

        // Salvar a lista de jogadores no localStorage
        localStorage.setItem("jogadores", JSON.stringify(jogadores));
    }
}
