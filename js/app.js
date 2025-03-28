function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector(".dashboard__item__img");
  let botao = gameClicado.querySelector(".dashboard__item__button");
  let nomeJogo = gameClicado.querySelector(".dashboard__item__name").textContent; // Captura o nome do jogo
  
  if (botao.textContent === "Devolver") {
    // Exibe o alerta de confirmação apenas quando o botão for "Devolver"
    if (confirm(`Tem certeza que deseja devolver o jogo "${nomeJogo}"?`)) {  // Mostra o nome do jogo na mensagem de confirmação
      alert(`Jogo "${nomeJogo}" devolvido com sucesso!`);
      
      imagem.classList.remove("dashboard__item__img--rented");
      botao.classList.remove("dashboard__item__button--return");
      botao.textContent = "Alugar";
    } else {
      alert("Ação cancelada!");
    }
  } else {
    // Caso o botão seja "Alugar"
    imagem.classList.add("dashboard__item__img--rented");
    botao.textContent = "Devolver";
    botao.classList.add("dashboard__item__button--return");
  }
  
  // Recalcula o número de jogos alugados e disponíveis sempre que o status é alterado
  verificarJogosAlugados();
}

function verificarJogosAlugados() {
  let jogos = document.querySelectorAll(".dashboard__items__item");
  let jogosAlugados = 0;
  let jogosDisponiveis = 0;

  jogos.forEach(jogo => {
    let imagem = jogo.querySelector(".dashboard__item__img");
    
    if (imagem.classList.contains("dashboard__item__img--rented")) {
      jogosAlugados++;
    } else {
      jogosDisponiveis++;
    }
  });

  console.log(`Jogos alugados: ${jogosAlugados}`);
  console.log(`Jogos disponíveis: ${jogosDisponiveis}`);
}
