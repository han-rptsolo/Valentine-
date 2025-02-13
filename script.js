let noClick = 1;
const maxNoClick = 4;
const minNoClick = 0.65;
let noScale = 1;
let yesScale = 1;
const gifElement = document.getElementById("toggle-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

const gifs = [
    "./asset/sad-pikachu.gif",
    "./asset/giphy.gif",
    "./asset/pikachu-heartbreaking-cry.gif",
    "./asset/200w.gif",
];

const buttonMessages = [
    "Are you sure??",
    "Please Choose Again",
    "One More Time",
    "Button Error!!!!!",
];

noButton.addEventListener("click", () => {
    if(noClick < maxNoClick) {
        gifElement.src = gifs[noClick];
    }

    noButton.textContent = buttonMessages[noClick % maxNoClick];

    noButton.style.width = "auto";
    noButton.style.width = `${noButton.scrollWidth}px`;

    if(noScale > minNoClick) {
        noScale -=0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    const baseWidth = parseFloat(yesButtonStyle.width);
    const scaledWidth = baseWidth * yesScale;

    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

    if(scaledWidth < maxYesWidth) {
        yesScale += 0.5;
        yesButton.style.transform = `scale(${yesScale})`;

        const rootStyles = getComputedStyle(document.documentElement);
        const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;

        const currentGap = parseFloat(buttonContainer.style.gap) || 20;
        const newGap = Math.sqrt(currentGap * gapScaleFactor);
        buttonContainer.style.gao = `${newGap}px`;
    }

    noClick++;
})