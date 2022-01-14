const kalame = ["elephant", "dog", "horse", "lion", "tiger", "human", "cat", "cow", "aligator", "donkey", "dolphin", "mouse", "rabit", "fish"];

let randomItems = ""
let clicks = [];
let result = "";
mistakes = 0;


function randomSelection() {
    randomItems = kalame[Math.floor(Math.random() * kalame.length)];
    document.querySelector(".alefba").addEventListener("click", btnHandle)
    console.log(randomItems);
}

function underScore() {
    let splitName = randomItems.split("");
    let splitMap = splitName.map(letter => clicks.indexOf(letter) >= 0 ? letter : "_");
    result = splitMap.join("");
    document.querySelector(".asili").innerHTML = `<p>${result}</p>`;
}

function checWonOrlose() {
    if (randomItems === result) {
        document.querySelector(".finish").querySelector("#win").style.visibility = "visible";
        document.querySelector(".adam").querySelector("img").src = "./img/winner.png";
    }
}

function checkLose() {
    if (mistakes === 6) {
        document.querySelector(".finish").querySelector("#lose").style.visibility = "visible";
        document.querySelector(".asili").querySelector("p").innerText = `current name is ${randomItems}`;
        document.querySelector(".adam").querySelector("img").src = "./img/hangman6.png";

    }
}

function photoChange() {
    const image = document.querySelector(".adam").querySelector("img");
    image.src = `img/hangman${mistakes}.png`;
}

function keyHandle(letter) {
    letter = letter.toLowerCase();
    clicks.indexOf(letter) === -1 ? clicks.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomItems.indexOf(letter) >= 0) {
        underScore();
        checWonOrlose();
    } else if (randomItems.indexOf(letter) === -1) {
        mistakes++;
        checkLose();
        photoChange();
    }
}

function btnHandle(event) {
    keyHandle(event.target.id);
    console.log(event.target.id);
}


randomSelection();
underScore();