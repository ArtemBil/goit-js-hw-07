const input = document.getElementById('name-input');
const inputOutput = document.getElementById('name-output');

input.addEventListener('input', (event) => {
    const value = event.target.value.trim();

    inputOutput.textContent =  value.length ? value : 'Anonymous';
});