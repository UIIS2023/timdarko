let secretNumber, attempts;

function startGame() {
    secretNumber = Math.floor(Math.random() * 40) + 1;
    attempts = 0;
    resetUI();
}

function resetUI() {
    document.getElementById('userGuess').value = '';
    document.getElementById('userGuess').disabled = false;
    document.querySelector('button').disabled = false;
    document.getElementById('message').innerHTML = '';
    document.getElementById('attempts').innerHTML = '';
}

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;

    if (userGuess.trim() === '' || isNaN(userGuess)) {
        alert('Please enter a valid number.');
        return;
    }

    attempts++;

    if (userGuess == secretNumber) {
        displayMessage(`Bravo pogodili ste iz ${attempts} pokušaja. <br> Sada možete da se pripremite na vreme kod nas.`, 'lightgreen');
        disableInputAndButton();
    } else {
        const message = userGuess < secretNumber ? 'Veoma skromno, pokušajte opet' : 'Optimistično, pokušajte opet';
        displayMessage(message, 'red');
        displayAttempts();
    }
}

function displayMessage(message, color) {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
    messageElement.style.color = color;
}

function displayAttempts() {
    const attemptsElement = document.getElementById('attempts');
    attemptsElement.innerHTML = `Broj pokušaja: ${attempts}`;
}

function disableInputAndButton() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}

function resetGame() {
    startGame();
    resetUI();
}

window.onload = startGame;