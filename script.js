const questions = [
    "Quelle est la capitale de la France?", 
    "Qui a peint la Joconde?"
];
const choicesArray = [
    ["Paris", "Londres", "Berlin", "Madrid"], 
    ["Van Gogh", "Picasso", "de Vinci", "Rembrandt"]
];

const correctAnswers = ["Paris", "de Vinci"];

// Initialisation des variables
let currentQuestionIndex = 0;
let score = 0;

// Affichage des questions et des choix
function displayQuestion() {
    // Vérifie si l'indice de la question actuelle (currentQuestionIndex) est < à la longueur du tableau questions
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerHTML = questions[currentQuestionIndex];

        for (let i = 0; i < 4; i++) {
            //choice$ permet de parcourir les id choice de nos boutons en lien avec la fonction checkAnswer()
            const button = document.getElementById(`choice${i+1}`);
            // Parcourt les choix d'une question spécifique
            button.innerHTML = choicesArray[currentQuestionIndex][i];
            // attribue les valeurs de ces choix aux boutons correspondants
            button.value = choicesArray[currentQuestionIndex][i];
        }
    } else {
        // Suppression du contenu HTML après avoir répondu à toutes les questions.
        document.getElementById('question').innerHTML = "";
        document.getElementById('choices').innerHTML = "";

        // Retour du résultat sous forme de texte
        document.getElementById('result').innerHTML = `Vous avez obtenu un score de ${score} sur ${questions.length}!`;
    }
}
// Vérifie si la réponse sélectionnée par l'utilisateur est correcte ou non
function checkAnswer(button) {
    // Chaque fois que la condition button.value === correctAnswers[currentQuestionIndex] est évaluée à true, le score est augmenté de 1.
    if (button.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

displayQuestion();