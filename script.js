let startTime = null;

window.onload = function () {
  const inputBox = document.getElementById("input");
  const submitButton = document.getElementById("submit-btn");

  if (inputBox && submitButton) {
    inputBox.addEventListener("focus", () => {
      if (!startTime) {
        startTime = performance.now(); // Start timer
      }
    });

    submitButton.addEventListener("click", () => {
      const original = document.getElementById("code").innerText;
      const typed = inputBox.value;
      const endTime = performance.now(); // End timer

      // Accuracy
      let correct = 0;
      for (let i = 0; i < typed.length; i++) {
        if (typed[i] === original[i]) correct++;
      }
      const accuracy = ((correct / original.length) * 100).toFixed(2);

      // Time Taken
      const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // in seconds

      // WPM (Words Per Minute)
      const wordsTyped = typed.trim().split(/\s+/).length;
      const minutes = timeTaken / 60;
      const wpm = Math.round(wordsTyped / minutes);

      // Show Results
      const resultBox = document.getElementById("result");
      resultBox.innerHTML = `
        <h3>Results</h3>
        <p>✅ Accuracy: ${accuracy}%</p>
        <p>⌛ Time Taken: ${timeTaken} seconds</p>
        <p>📈 Words Per Minute: ${wpm}</p>
        <p>🔤 Total Characters Typed: ${typed.length}</p>
      `;
    });
  }
};