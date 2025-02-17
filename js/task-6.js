const createBoxesBtn = document.querySelector("[data-create]");
const destroyBoxesBtn = document.querySelector("[data-destroy]");

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

/**
 * Creates and renders the boxes based on number specified.
 *
 * @param {number} amount - number of boxes to create
 */
function createBoxes(amount) {
    const boxes = document.getElementById('boxes');
    const minDimension = 30;
    const elements = [];

    boxes.innerHTML = '';

    for (let i = 0; i < amount; i++) {
        const element = document.createElement('div');
        const maxDimension = minDimension + (minDimension - 20) * i;

        element.style.width = `${maxDimension}px`;
        element.style.height = `${maxDimension}px`;
        element.style.backgroundColor = getRandomHexColor();

        elements.push(element);
    }

    boxes.append(...elements);
}

/**
 * Destroys all created boxes
 */
function destroyBoxes() {
    const boxes = document.getElementById('boxes');

    boxes.innerHTML = '';
}


createBoxesBtn.addEventListener('click', () => {
    const amount = parseInt(document.querySelector('.amount').value);

    if (amount && amount > 0 && amount <= 100) {
        createBoxes(amount);
    }
});

destroyBoxesBtn.addEventListener('click', destroyBoxes);
