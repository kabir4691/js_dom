function changeBackground(color) {
    document.body.style.background = color;
}

/**
 * Returns a random color in RGB format.
 */
function getRandomColor() { 
    let letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) { 
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

document.body.onclick = () => changeBackground(getRandomColor());
