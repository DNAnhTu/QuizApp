const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScores.sort((a, b) => b.score - a.score);
highScores.forEach(score => {
    const li = document.createElement("li");
    li.innerText = score.name + " - " + score.score;
    highScoresList.appendChild(li);
} 
);

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");
