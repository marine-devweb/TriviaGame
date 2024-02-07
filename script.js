const question = "Quelle planète est connue sous le nom de « Planète rouge » ?";
const choices = ["Terre", "Mars", "Jupiter", "Saturne"];
const correctAnswer = "Mars";

// Utilisée pour afficher une question et une liste de choix
function displayQuestion() {
    document.getElementById('question').innerHTML = question;
  
    for (let i = 0; i < 4; i++) {
    const btn = document.getElementById(`choice${i+1}`);
    btn.innerHTML = choices[i];
    btn.value = choices[i];
    }
}
// Vérifie si la réponse sélectionnée par l'utilisateur est correcte ou non
function checkAnswer(button) {
    if (button.value === correctAnswer) {
        document.getElementById('result').innerHTML = "Correcte!";
    } else {
        document.getElementById('result').innerHTML = "Faux!";
    }
}

displayQuestion();