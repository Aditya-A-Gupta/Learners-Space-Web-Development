function checkQuiz() {
    const answers = {
        question1: 'Supercell',
        question2: 'Real-time strategy'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    for (let question in answers) {
        const answer = answers[question];
        const selected = form.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answer) {
            score++;
        }
    }

    document.getElementById('quiz-result').textContent = `You scored ${score} out of 2!`;
}