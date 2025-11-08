import { useEffect, useRef, useState } from "react";
import "./LoadingPage.css";

export default function LoadingPage({ onLoaded }) {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let ball = { x: 150, y: 150, dx: 3, dy: 3, radius: 10 };
    let paddle = { x: 130, y: 280, width: 80, height: 10 };
    let keys = {};

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#00FFFF"; // ball color
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = () => {
      ctx.beginPath();
      ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
      ctx.fillStyle = "#a855f7"; // paddle color
      ctx.fill();
      ctx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      drawPaddle();

      // Ball movement
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Wall collision
      if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
      }

      // Paddle collision
      if (
        ball.y + ball.dy > paddle.y - ball.radius &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width
      ) {
        ball.dy = -ball.dy;
      }

      // Missed ball (reset)
      if (ball.y > canvas.height - ball.radius) {
        ball = { x: 150, y: 150, dx: 3, dy: 3, radius: 10 };
      }

      // Paddle control
      if (keys["ArrowLeft"] && paddle.x > 0) paddle.x -= 5;
      if (keys["ArrowRight"] && paddle.x < canvas.width - paddle.width) paddle.x += 5;

      requestAnimationFrame(draw);
    };

    // Keyboard listeners
    const handleKeyDown = (e) => (keys[e.key] = true);
    const handleKeyUp = (e) => (keys[e.key] = false);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    draw();

    // Simulate loading delay (replace with actual data load if needed)
    const timer = setTimeout(() => {
      setLoading(false);
      onLoaded();
    }, 5000); // ⏱️ Adjust delay as needed (5s)

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [onLoaded]);

  return (
    <div className="loading-container">
      {loading && (
        <>
          <canvas ref={canvasRef} width={400} height={300}></canvas>
          <p className="loading-text">Loading Portfolio...</p>
        </>
      )}
    </div>
  );
}
