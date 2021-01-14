import GOTPanel from "./got-panel";
import RMPanel from "./rm-panel";
import BBPanel from "./bb-panel";

const gotQuizPanel = new GOTPanel(53);
const rmQuizPanel = new RMPanel(20);
const bbQuizPanel = new BBPanel(50);

console.log("GoT");
let question = gotQuizPanel.drawAnswers(1);
console.log(question);
let newOrder = gotQuizPanel.shuffledArray(question);
console.log(newOrder);

console.log("R&M");
question = rmQuizPanel.drawAnswers(1);
console.log(question);
newOrder = rmQuizPanel.shuffledArray(question);
console.log(newOrder);

console.log("BB");
question = bbQuizPanel.drawAnswers(1);
console.log(question);
newOrder = bbQuizPanel.shuffledArray(question);
console.log(newOrder);
