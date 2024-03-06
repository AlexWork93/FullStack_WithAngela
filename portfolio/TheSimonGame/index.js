let arrayOfNumbers = [];
let arrayOfUserInput = [];
let isGameRunning = false;
let isWin = true;

const arrayOfButtons = {
  green: {
    id: "#green",
    audio: new Audio("sounds/green.mp3"),
  },
  red: {
    id: "#red",
    audio: new Audio("sounds/red.mp3"),
  },
  yellow: {
    id: "#yellow",
    audio: new Audio("sounds/yellow.mp3"),
  },
  blue: {
    id: "#blue",
    audio: new Audio("sounds/blue.mp3"),
  },
};

$(document).keypress(function (e) {
  if ((e.key == "a" || e.key === "A") && !isGameRunning) {
    startGame();
  }
});

function assignEventToPlayButtons() {
  $(".btn").click(function (e) {
    pressOnButton(this.id);
    arrayOfUserInput.push(this.id);
  });
}

function reassignEventToDocument() {
  $(document).off();
  $(document).keypress(function (e) {
    if (!isGameRunning) {
      startGame();
    }
  });
}

function removeEventFromButtons() {
  $(".btn").off();
}

function pressOnButton(buttonID) {
  $(arrayOfButtons[buttonID].id).addClass("pressed");
  arrayOfButtons[buttonID].audio.play();
  setTimeout(function () {
    $(arrayOfButtons[buttonID].id).removeClass("pressed");
  }, 200);
}

function createGameData() {
  isGameRunning = true;
  isWin = true;
  arrayOfNumbers = [];
  for (let i = 0; i < 10; i++) {
    let result = "";
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        result = "green";
        break;
      case 1:
        result = "red";
        break;
      case 2:
        result = "yellow";
        break;
      case 3:
        result = "blue";
        break;
    }
    arrayOfNumbers.push(result);
  }
}

function updateLevelTitleText(textString) {
  $("#level-title").text(textString);
}

async function startGame() {
  createGameData();
  reassignEventToDocument();
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (!isGameRunning) break;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    arrayOfUserInput = [];
    updateLevelTitleText(`Level ${i + 1}`);
    pressOnButton(arrayOfNumbers[i]);
    for (let j = 0; j <= i; j++) {
      assignEventToPlayButtons();
      while (arrayOfUserInput.length <= j) {
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      removeEventFromButtons();
      if (arrayOfUserInput[j] !== arrayOfNumbers[j]) {
        const failedAudio = new Audio("sounds/wrong.mp3");
        failedAudio.play();
        isGameRunning = false;
        isWin = false;
        break;
      }
    }
  }
  isGameRunning = false;
  updateLevelTitleText(isWin ? "You Win!\nPress any key" : "You Lose!\nPress any key");
}
