const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points")
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type")
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card")
    },
    actions: {
        button: document.getElementById("next-duel")
    }
}
// const players = {
//     player1: "player-cards",
// player2: "computer-cards"
// }
const playerSides = {
    player1: "player-field-card",
    computer: "computer-field-card"
}
const pathImages = "./src/assets/icons/"

const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2]
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0]
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1]
    },
]

function resetDuel() {

}

function getRandomCardId() {

}

async function getRandomCardId() {
    const ramdomIndex = Math.floor(Math.random() * cardData.length)
    return cardData[ramdomIndex].id;
}

async function createCardImage(randomIdCard, feildSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", `${pathImages}card-back.png`);
    cardImage.setAttribute("data-id", randomIdCard);
    cardImage.classList.add("card");
    if (feildSide === playerSides.player1) {
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"))
        });
    };
    cardImage.addEventListener("mouseover", () => {
        drawSelectedCard(randomIdCard);
    });
    return cardImage;
}

async function drawCards(cardNumber, feildSide) {
    for (let i = 0; i > cardNumber; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, feildSide);

        console.log(feildSide);

        document.getElementById(feildSide).appendChild(cardImage);
    }
}

function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);

}

init();