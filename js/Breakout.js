document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");


  const ballRadius = 15;
  let x = canvas.width / 2;
  let y = canvas.height - 30;
  let dx = 2;
  let dy = -2;


  const paddleHeight = 10;
  const paddleWidth = 90;
  let paddleX = (canvas.width - paddleWidth) / 2;


  const brickRowCount = 5;
  const brickColumnCount = 4;
  const brickWidth = 95;
  const brickHeight = 30;
  const brickPadding = 10;
  const brickOffsetTop = 30;
  const brickOffsetLeft = 30;
  const bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }


  let rightPressed = false;
  let leftPressed = false;

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
      rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
      leftPressed = false;
    }
  }


  function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const brick = bricks[c][r];
        if (brick.status === 1) {
          if (
            x > brick.x &&
            x < brick.x + brickWidth &&
            y > brick.y &&
            y < brick.y + brickHeight
          ) {
            dy = -dy;
            brick.status = 0; 
          }
        }
      }
    }
  }


  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#82A7DF";
    ctx.fill();
    ctx.closePath();
  }

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#82A7DF";
    ctx.fill();
    ctx.closePath();
  }

  const brickColors = ["#FE8D6F", "#FDC453", "#DFDD6C", "#A0DDE0", "#9ADBC5"];

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = brickColors[r]; 
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    let blocksRemaining = 0;
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        blocksRemaining += bricks[c][r].status;
      }
    }

    if (blocksRemaining === 0) {
      setTimeout(() => {
        if (
          confirm(
            "축하합니다🎉 모든 블록을 파괴했습니다!👏 다시 시작하시겠습니까?"
          )
        ) {
          startGame();
        }
      }, 100);
      return;
    }


    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }
    if (y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      } else {
        // Game over
        gameOver();
        return;
      }
    }


    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    } else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw);
  }

function gameOver() {
  setTimeout(() => {
    const restart = confirm("게임 오버! 다시 시작하시겠습니까?");
    if (restart) {
      startGame();
    } else {
      const startMessage = document.getElementById("startMessage");
      startMessage.style.display = "block"; 
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, 100);
}

  function startGame() {
    x = canvas.width / 2;
    y = canvas.height - 30;
    paddleX = (canvas.width - paddleWidth) / 2;
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r].status = 1;
      }
    }
    draw();

      const startMessage = document.getElementById("startMessage");
      startMessage.style.display = "none";
  }

  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", startGame);
});
