function somarGol(id){
    // Pegar os jogadores do localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Encontrar o jogador com o id passado como parâmetro
    let jogador = jogadores.find(jogador => jogador.id == id);

    // Somar 1 gol ao jogador
    jogador.gols++;

    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Atualizar o elemento na interface do usuário
    const jogadorElement = document.querySelector(`#jogador-${id}`);
    jogadorElement.querySelector('.gols').textContent = jogador.gols;

}

function subtrairGol(id){
    // Pegar os jogadores do localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Encontrar o jogador com o id passado como parâmetro
    let jogador = jogadores.find(jogador => jogador.id == id);

    // Subtrair 1 gol ao jogador
    jogador.gols--;

    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Atualizar o elemento na interface do usuário
    const jogadorElement = document.querySelector(`#jogador-${id}`);
    jogadorElement.querySelector('.gols').textContent = jogador.gols;
}

function somarAssistencia(id){
    // Pegar os jogadores do localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Encontrar o jogador com o id passado como parâmetro
    let jogador = jogadores.find(jogador => jogador.id == id);

    // Somar 1 assistência ao jogador
    jogador.assistencias++;

    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Atualizar o elemento na interface do usuário
    const jogadorElement = document.querySelector(`#jogador-${id}`);
    jogadorElement.querySelector('.assistencias').textContent = jogador.assistencias;
}

function subtrairAssistencia(id){
    // Pegar os jogadores do localStorage
    let jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Encontrar o jogador com o id passado como parâmetro
    let jogador = jogadores.find(jogador => jogador.id == id);

    // Subtrair 1 assistência ao jogador
    jogador.assistencias--;

    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    // Atualizar o elemento na interface do usuário
    const jogadorElement = document.querySelector(`#jogador-${id}`);
    jogadorElement.querySelector('.assistencias').textContent = jogador.assistencias;
}
