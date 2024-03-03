let arrayOfFunctions = [
  function () {
    const audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    animateButton(".w")
  },
  function () {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
    animateButton(".a")
  },
  function () {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    animateButton(".s")
  },
  function () {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    animateButton(".d")
  },
  function () {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    animateButton(".j")
  },
  function () {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    animateButton(".k")
  },
  function () {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
    animateButton(".l")
  },
];


const arrayOfButtons = document.querySelectorAll("button");
for (let i = 0; i < arrayOfButtons.length; i++) {
  arrayOfButtons[i].addEventListener("click", arrayOfFunctions[i]);
}

function detectPressedKeyAndCallFunction(pressedKey) {
  switch (pressedKey) {
    case 'w':
      arrayOfFunctions[0]();
      break;
    case 'a':
      arrayOfFunctions[1]();
      break;
    case 's':
      arrayOfFunctions[2]();
      break;
    case 'd':
      arrayOfFunctions[3]();
      break;
    case 'j':
      arrayOfFunctions[4]();
      break;
    case 'k':
      arrayOfFunctions[5]();
      break;
    case 'l':
      arrayOfFunctions[6]();
      break;
  }
}

document.addEventListener("keydown", function(event){
    detectPressedKeyAndCallFunction(event.key)
});

function animateButton(locator){
  document.querySelector(locator).classList.add("pressed")
  document.querySelector(locator).style.color = "white";
  document.querySelector(locator).style.textShadow = "3px 0 #DA0463";
  setTimeout(() => {
    document.querySelector(locator).classList.remove("pressed");
    document.querySelector(locator).style.color = "#DA0463";
    document.querySelector(locator).style.textShadow = "3px 0 #DBEDF3";
  }, 200);
}
