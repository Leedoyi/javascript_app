const boardElement = document.getElementById("board");
const boardSize = 10;
const totalCells = boardSize * boardSize;
const totalMines = 20;
const mines = [];

// Generate mines
for (let i = 0; i < totalMines; i++) {
  let randomCell;
  do {
    randomCell = Math.floor(Math.random() * totalCells);
  } while (mines.includes(randomCell));
  mines.push(randomCell);
}

// Render board
for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  cell.addEventListener("click", handleCellClick);
  cell.addEventListener("contextmenu", handleCellRightClick); // Right click event
  boardElement.appendChild(cell);
}

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = parseInt(cell.dataset.index);

  if (mines.includes(cellIndex)) {
    // Game over
    cell.style.backgroundColor = "red";
    revealMines();
    alert("Game over! You clicked on a mine.");
  } else {
    // Check neighboring cells
    revealCells(cellIndex);
  }
}

function handleCellRightClick(event) {
  event.preventDefault(); // Prevent default right-click behavior (context menu)
  const cell = event.target;
  const cellIndex = parseInt(cell.dataset.index);

  // Toggle temporary mine display
  if (!cell.textContent) {
    cell.textContent = "✅";
  } else {
    cell.textContent = "";
  }
}

function revealCells(cellIndex) {
  const queue = [cellIndex];
  const revealedCells = new Set();

  while (queue.length > 0) {
    const currentCellIndex = queue.shift();
    const currentCell = boardElement.querySelector(
      `[data-index="${currentCellIndex}"]`
    );

    if (!revealedCells.has(currentCellIndex)) {
      revealedCells.add(currentCellIndex);

      const neighboringMines = countNeighboringMines(currentCellIndex);
      if (neighboringMines === 0) {
        currentCell.style.backgroundColor = "#ddd";

        const neighboringOffsets = [
          -boardSize - 1,
          -boardSize,
          -boardSize + 1,
          -1,
          1,
          boardSize - 1,
          boardSize,
          boardSize + 1,
        ];
        neighboringOffsets.forEach((offset) => {
          const neighborIndex = currentCellIndex + offset;
          if (
            isValidCellIndex(neighborIndex) &&
            !revealedCells.has(neighborIndex)
          ) {
            queue.push(neighborIndex);
          }
        });
      } else {
        currentCell.textContent = neighboringMines;
        currentCell.style.backgroundColor = "#ddd";
      }
    }
  }

  // Check if all non-mine cells are revealed
  if (revealedCells.size === totalCells - totalMines) {
    setTimeout(() => {
      alert("Congratulations! You've cleared the game!");
    }, 100);
  }
}

function isValidCellIndex(index) {
  return index >= 0 && index < totalCells;
}

function countNeighboringMines(cellIndex) {
  const neighboringOffsets = [
    -boardSize - 1,
    -boardSize,
    -boardSize + 1,
    -1,
    1,
    boardSize - 1,
    boardSize,
    boardSize + 1,
  ];
  let count = 0;
  neighboringOffsets.forEach((offset) => {
    const neighborIndex = cellIndex + offset;
    if (mines.includes(neighborIndex)) {
      count++;
    }
  });
  return count;
}

function revealMines() {
  mines.forEach((mineIndex) => {
    const mineCell = boardElement.querySelector(`[data-index="${mineIndex}"]`);
    mineCell.textContent = "💣";
  });

  // 게임 종료 후 다시 시작할지 묻는 알림 창을 추가한다.
  setTimeout(() => {
    // 알림 창이 모든 지뢰를 보여준 후에 나타나도록 setTimeout 사용
    if (confirm("게임 오버! 다시 시작하시겠습니까?")) {
      initGame();
    }
  }, 100);
}

function initGame() {
  // 게임 보드를 초기화한다.
  boardElement.innerHTML = "";
  mines.length = 0; // 지뢰 배열을 비운다.

  // 지뢰를 다시 생성하고, 게임 보드를 다시 렌더링한다.
  for (let i = 0; i < totalMines; i++) {
    let randomCell;
    do {
      randomCell = Math.floor(Math.random() * totalCells);
    } while (mines.includes(randomCell));
    mines.push(randomCell);
  }

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleCellClick);
    cell.addEventListener("contextmenu", handleCellRightClick); // Right click event
    boardElement.appendChild(cell);
  }
}

// 페이지 로딩 시 게임 초기화를 진행한다.
document.addEventListener("DOMContentLoaded", function () {
  initGame();
});