let scoreResult = document.getElementById("score");

let gameStart = document.querySelector(".game");
let gamePlayingScreen = document.querySelector(".game-playing");

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let playerChoiceIcon = document.querySelector("#player-choice img");
let computerChoiceIcon = document.querySelector("#computer-choice img");

let rockIcon = "./images/icon-rock.svg";
let paperIcon = "./images/icon-paper.svg";
let scissorsIcon = "./images/icon-scissors.svg";

let result = document.querySelector(".result span:first-of-type");
let playBtn = document.getElementById("play-again");

let rulesBtn = document.getElementById("rules-btn");
let rulesModal = document.getElementById("rules");
let ruelsCloseBtn = document.getElementById("close-modal");
let modalBack = document.getElementById("modal-back");

let picked = "";
let computer = "";
let score = 0;

// -------------------------------------------------------------
// ---------------------- EVENT LISTENERS ----------------------
// -------------------------------------------------------------

// Add EveListener To Rock Button to Pick It
rock.addEventListener("click", function () {
	picked = "rock";
	playerChoiceIcon.src = rockIcon;

	displayPicked(picked, computer);
});

// Add EveListener To Paper Button to Pick It
paper.addEventListener("click", function () {
	picked = "paper";
	playerChoiceIcon.src = paperIcon;

	displayPicked(picked, computer);
});

// Add EveListener To Scissors Button to Pick It
scissors.addEventListener("click", function () {
	picked = "scissors";
	playerChoiceIcon.src = scissorsIcon;

	displayPicked(picked, computer);
});

// Add EventListener To Rules Button
rulesBtn.addEventListener("click", function () {
	rulesModal.style.zIndex = "12";
	modalBack.style.zIndex = "11";
});

// Add EventListener To Paly Again Button
playBtn.addEventListener("click", function () {
	gameStart.classList.remove("hidden");
	gamePlayingScreen.classList.add("hidden");
	result.parentElement.classList.add("hidden");
	playerChoiceIcon.parentElement.classList.remove(picked);
	computerChoiceIcon.parentElement.className = "choice computer-choice";
});

// Add EventListener To Rules Button
ruelsCloseBtn.addEventListener("click", function () {
	rulesModal.style.zIndex = "-1";
	modalBack.style.zIndex = "-1";
});

// -------------------------------------------------------------
// ------------------------- FUNCTIONS -------------------------
// -------------------------------------------------------------

// Function To Move To Next Step
function displayPicked(picked, computer) {
	gameStart.classList.add("hidden");
	gamePlayingScreen.classList.remove("hidden");

	playerChoiceIcon.parentElement.classList.add(picked);

	setTimeout(() => {
		computer = getComputerChoice();
		computerChoiceIcon.parentElement.classList.add(computer);
		computerChoiceIcon.src =
			computer === "rock"
				? rockIcon
				: computer === "paper"
				? paperIcon
				: scissorsIcon;

		// Call Play function To Get The Result
		play(picked, computer);
	}, 200);
}

// Function Get Computer Choice
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

// Function Of Playing The Game
function play(playerChoice, computerChoice) {
	// console.log("player: ", playerChoice);
	// console.log("computer: ", computerChoice);

	if (playerChoice === computerChoice) {
		result.innerHTML = "It's a tie!";
		playerChoiceIcon.parentElement.parentElement.className = "";
		computerChoiceIcon.parentElement.parentElement.className = "";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		score++;
		result.innerHTML = "You win!";

		playerChoiceIcon.parentElement.parentElement.className = "winner";
		computerChoiceIcon.parentElement.parentElement.className = "loser";
	} else {
		score--;
		result.innerHTML = "You lose!";

		playerChoiceIcon.parentElement.parentElement.className = "loser";
		computerChoiceIcon.parentElement.parentElement.className = "winner";
	}
	scoreResult.innerText = score;
	result.parentElement.classList.remove("hidden");
}
