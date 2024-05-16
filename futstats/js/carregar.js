function carregarJogadores() {
    // Obter os jogadores do localStorage ou um array vazio se não houver nenhum
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];

    // Iterar sobre cada jogador e criar o elemento correspondente na página
    jogadores.forEach(jogador => {
        const jogadorElement = document.createElement("article");
        jogadorElement.classList.add("data");

        const content = `
            <div>
                <img src="${jogador.foto}" alt="foto do jogador" class="avatar">
                <h3>${jogador.nome}</h3>
            </div>
            <div>
                <p class="row">
                    <strong>Time:</strong> ${jogador.time}
                </p>
                <p class="row">
                    <strong>Nota:</strong> ${jogador.nota}
                </p>
                <p class="row">
                    <strong>Gols:</strong> ${jogador.gols}
                    <button onClick="somarGol('${jogador.id}')" class="outline sm">+</button>
                    <button onClick="subtrairGol('${jogador.id}')" class="outline sm">-</button>
                </p>
                <p class="row">
                    <strong>Assistências:</strong> ${jogador.assistencias}
                    <button onClick="somarAssistencia('${jogador.id}')" class="outline sm">+</button>
                    <button onClick="subtrairAssistencia('${jogador.id}')" class="outline sm">-</button>
                </p>
            </div>
            <button onClick="apagar('${jogador.id}')" class="pico-background-pink-600">Apagar</button>
        `;

        jogadorElement.innerHTML = content;

        document.querySelector("#lista-de-jogadores").appendChild(jogadorElement);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    carregarJogadores();
});
