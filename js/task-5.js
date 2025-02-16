const changeBackgroundColorBtn = document.querySelector('.change-color');
const backgroundColorOutElement = document.querySelector('.color');
const body = document.body;

/**
 * Create a random hex color string
 *
 * @return {string}
 */
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

changeBackgroundColorBtn.addEventListener('click', () => {
    const currentColor = getRandomHexColor();

    backgroundColorOutElement.textContent = currentColor;
    body.style.backgroundColor = currentColor;
});