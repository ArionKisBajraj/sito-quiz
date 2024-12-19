document.getElementById('submitBtn').addEventListener('click', () => {
    const form = document.getElementById('quizForm');
    const results = document.getElementById('results');

    const risposte = new FormData(form);
    let punteggio = 0;

    // Verifica domande a scelta multipla
    if (risposte.get('q1') === 'C') punteggio++;
    if (risposte.get('q2') === 'HyperText Markup Language') punteggio++;
    if (risposte.get('q3') === 'Linux') punteggio++;

    // Mostra risultati
    let output = `Hai totalizzato ${punteggio} su 3 nelle domande a scelta multipla!<br><br>`;
    output += `<strong>Risposte aperte:</strong><br>`;
    output += `4. Socket: ${risposte.get('q4')}<br>`;
    output += `5. Differenza tra TCP e UDP: ${risposte.get('q5')}<br>`;
    output += `6. Database: ${risposte.get('q6')}`;

    results.innerHTML = output;
});
