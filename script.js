// Inicializar o jogo
let currentPlayer = "X";
let gameOver = false;
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

// Selecionar todas as células da grade
const cells = document.querySelectorAll(".cell");

// Loop através de cada célula para adicionar um evento de clique
cells.forEach(cell => {
  cell.addEventListener("click", () => {
    // Verificar se o jogo já acabou
    if (gameOver) {
      return;
    }
    
    // Verificar se a célula já foi selecionada
    if (cell.textContent !== "") {
      return;
    }
    
    // Marcar a célula com a marcação do jogador atual
    cell.textContent = currentPlayer;
    
    // Adicionar a marcação à matriz do tabuleiro do jogo
    const row = parseInt(cell.dataset.row);
    const col = parseInt(cell.dataset.col);
    gameBoard[row][col] = currentPlayer;
    
    // Verificar se o jogador atual ganhou o jogo
    if (checkWin(currentPlayer)) {
      alert(currentPlayer + " venceu o jogo!");
      gameOver = true;
      return;
    }
    
    // Verificar se o jogo empatou
    if (checkTie()) {
      alert("O jogo empatou!");
      gameOver = true;
      return;
    }
    
    // Alternar para o próximo jogador
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

// Função para verificar se um jogador venceu o jogo
function checkWin(player) {
  // Verificar linhas
  for (let i = 0; i < 3; i++) {
    if (gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player) {
      return true;
    }
  }
  
  // Verificar colunas
  for (let i = 0; i < 3; i++) {
    if (gameBoard[0][i] === player && gameBoard[1][i] === player && gameBoard[2][i] === player) {
      return true;
    }
  }
  
  // Verificar diagonais
  if (gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player) {
    return true;
  }
  if (gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player) {
    return true;
  }
  
  // Se nenhuma linha, coluna ou diagonal for encontrada, o jogador não venceu
  return false;
}

// Função para verificar se o jogo empatou
function checkTie() {
  // Loop através de cada célula para verificar se todas foram selecionadas
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] === "") {
        return false;
      }
    }
  }
  
 // Se todas as células foram selecionadas, o jogo empatou
return true;
}

