import GOTPanel from "./got-panel";
import RMPanel from "./rm-panel";
import BBPanel from "./bb-panel";

const gotQuizPanel = new GOTPanel(53);
const rmQuizPanel = new RMPanel(20);
const bbQuizPanel = new BBPanel(50);
let correctAnswer = "";
let questionCounter = 1;

function checkAnswer(e) {
  if (parseInt(e.target.dataset.id, 10) === correctAnswer.id) {
    e.target.classList.add("btn--correct");
    questionCounter++;
    setTimeout(() => {
      showQuestion();
    }, 1000);
  } else {
    e.target.classList.add("btn--wrong");
  }
}

function insertImage(correctAnswer) {
  const characterImg = document.querySelector("#character-img");
  setTimeout(() => {
    if (correctAnswer.image === undefined) insertImage(correctAnswer);
    else characterImg.style.backgroundImage = `url("${correctAnswer.image}")`;
  }, 100);
}

function insertAnswers(answers) {
  const answersBtn = document.querySelectorAll(".main__quiz__button");
  setTimeout(() => {
    if (answers[0].id === undefined) insertAnswers(answers);
    else {
      for (let i in answers) {
        clearBtn(answersBtn[i]);
        answersBtn[i].innerText = answers[i].name;
        answersBtn[i].dataset.id = answers[i].id;
        answersBtn[i].addEventListener("click", checkAnswer);
      }
    }
  }, 100);
}

function clearBtn(btn) {
  btn.classList.remove("btn--correct");
  btn.classList.remove("btn--wrong");
}

export function showQuestion() {
  const answers = gotQuizPanel.drawAnswers(questionCounter);
  correctAnswer = answers[0];
  const newOrder = gotQuizPanel.shuffledArray(answers);

  insertImage(correctAnswer);
  insertAnswers(newOrder);
}
