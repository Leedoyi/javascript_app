const boardElement = document.getElementById("board");
const boardSize = 10;
const totalCells = boardSize * boardSize;
const totalMines = 20;
const mines = [];
let safeCellsCount = totalCells - totalMines; // 안전한 셀의 총 수
let revealedSafeCellsCount = 0; // 클릭한 안전한 셀의 수

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

  // 내가 누른 셀 index
  const cellIndex = parseInt(cell.dataset.index);

  if (mines.includes(cellIndex)) {
    // Game over
    cell.style.backgroundColor = "red";
    revealMines();
    alert("게임 오버! 지뢰를 클릭했습니다😭");
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
    cell.textContent = "📌";
  } else {
    cell.textContent = "";
  }
}

let revealedCells = new Set();

function revealCells(cellIndex) {
  // 큐가 빌때까지 반복
  const queue = [cellIndex];

  while (queue.length > 0) {
    const currentCellIndex = queue.shift();
    const currentCell = boardElement.querySelector(
      `[data-index="${currentCellIndex}"]`
    );

    if (!revealedCells.has(currentCellIndex)) {
      revealedCells.add(currentCellIndex);
      if (!mines.includes(currentCellIndex)) {
        revealedSafeCellsCount++; // 클릭한 안전한 셀의 수 증가
      }

      const neighboringMines = countNeighboringMines(currentCellIndex);
      if (neighboringMines === 0) {
        currentCell.style.backgroundColor =
          "var(--minesweeper-cell-click-color)";

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
          const neighborRow = Math.floor(neighborIndex / boardSize);
          const neighborCol = neighborIndex % boardSize;
          const currentRow = Math.floor(currentCellIndex / boardSize);
          const currentCol = currentCellIndex % boardSize;

          if (
            isValidCellIndex(neighborIndex) &&
            !revealedCells.has(neighborIndex) &&
            Math.abs(neighborRow - currentRow) <= 1 &&
            Math.abs(neighborCol - currentCol) <= 1
          ) {
            queue.push(neighborIndex);
          }
        });
      } else {
        currentCell.textContent = neighboringMines;
        currentCell.style.backgroundColor =
          "var(--minesweeper-cell-click-color)";
      }
    }
  }

  if (revealedCells.size === totalCells - totalMines) {
    setTimeout(() => {
      alert("축하드립니다🎉 게임을 통과했습니다👏");
      initGame();
    }, 100);
  }
}

function isValidCellIndex(index) {
  return index >= 0 && index < totalCells;
}

function isEdgeCell(index) {
  const row = Math.floor(index / boardSize);
  const col = index % boardSize;
  return (
    row === 0 || row === boardSize - 1 || col === 0 || col === boardSize - 1
  );
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
  const row = Math.floor(cellIndex / boardSize);
  const col = cellIndex % boardSize;

  neighboringOffsets.forEach((offset) => {
    const neighborIndex = cellIndex + offset;
    const neighborRow = Math.floor(neighborIndex / boardSize);
    const neighborCol = neighborIndex % boardSize;

    if (
      isValidCellIndex(neighborIndex) &&
      Math.abs(neighborRow - row) <= 1 &&
      Math.abs(neighborCol - col) <= 1
    ) {
      if (mines.includes(neighborIndex)) {
        count++;
      }
    }
  });
  return count;
}

function revealMines() {
  mines.forEach((mineIndex) => {
    const mineCell = boardElement.querySelector(`[data-index="${mineIndex}"]`);
    mineCell.textContent = "💣";
  });

  setTimeout(() => {
    if (confirm("다시 시작하시겠습니까?")) {
      initGame();
      revealedCells.clear();
    } else {
      initGame();
      revealedCells.clear();
    }
  }, 100);
}

function initGame() {
  boardElement.innerHTML = "";
  mines.length = 0;
  safeCellsCount = totalCells - totalMines; // 안전한 셀의 총 수 재계산
  revealedSafeCellsCount = 0; // 클릭한 안전한 셀의 수 초기화

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
    cell.addEventListener("contextmenu", handleCellRightClick);
    boardElement.appendChild(cell);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initGame();
});
