var readlineSync = require("readline-sync");

var score = 0;

function quiz(question, answer) {

  var userAnswer = readlineSync.question(question +"(Enter e to exit)? ");

  if (userAnswer === answer) {
    console.log("Right");
    score++;
  }
  else if(userAnswer === "e")
    return userAnswer;
  else
    console.log("Wrong");
}

//Array of Objects
ques = [
  {
    question: "Am I older than 25",
    answer: "no"
  }, {
    question: "Am I Software Engineer",
    answer: "yes"
  },{
    question: "Do I do programming",
    answer: "yes"
  },{
    question: "Do I read books",
    answer:"yes"
  },{
    question: "Do I drink Alcohol",
    answer:"yes"
  },{
    question: "Do I watch sit-coms",
    answer: "yes"
  }
];

let userAns,i=0;

do{ 
  userAns = quiz(ques[i].question, ques[i].answer);
  i++;
}while(userAns !== "e" && i < ques.length);

console.log("Yay "+ userName +"! your score is: "+score);