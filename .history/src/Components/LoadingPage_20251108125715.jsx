.loading-screen {
  width: 100vw;
  height: 100vh;
  background-color: #0f172a; /* adjust if your site background differs */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loader-circle {
  position: relative;
  width: 100px;
  height: 100px;
}

.ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: #a855f7;     /* purple accent */
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
}

.ring2 {
  border-top-color: #3b82f6;     /* blue accent */
  animation-delay: 0.3s;
}

.ring3 {
  border-top-color: #f472b6;     /* pink accent */
  animation-delay: 0.6s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    transform: rotate(360deg) scale(1);
    opacity: 1;
  }
}

.loading-text {
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #a855f7;
  letter-spacing: 1px;
  animation: fadeIn 1s ease-in-out infinite alternate;
}

@keyframes fadeIn {
  from { opacity: 0.5; }
  to   { opacity: 1;   }
}
