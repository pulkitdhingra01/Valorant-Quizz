var readlinesync = require('readline-sync');
console.log("Welcome to the Valorant Quizz!!")
var name = readlinesync.question("Enter your name here - ")
console.log("Hello "+name+". Lets test how much do you know about Valorant!")
score = 0
function qna(question,answer){
  var userans = readlinesync.question(question)

  if(answer == userans){
    console.log("Right Answer!!")
    score= score+1
  }
  else{
    console.log("Wrong Answer!")
    score=score-1
  }
  console.log("Your current score is "+score)
}

question1={
  question:"What type of game is Valorant?",
  answer:"fps"
}
question2={
  question:"Who developed Valorant?",
  answer:"riotgames"
}
question3={
  question:"Who is the best duelist in Valorant?",
  answer:"jett"
}
question4={
  question:"Which gun triggers most people in Valorant?",
  answer:"odin"
}
question5={
  question:"Which map is considered as the best map in Valorant?",
  answer:"ascent"
}
question6={
  question:"Which weapon has the most accurate first bullet fire rate in Valorant?",
  answer:"phantom"
}
question7={
  question:"What is the basic free weapon in the starting of a game in Valorant?",
  answer:"classic"
}
question8={
  question:"How to many points are needed to win a standard Valorant match?",
  answer:"13"
}
question9={
  question:"Is Valorant the most famous fps game right now?",
  answer:"yes"
}
question10={
  question:"Which agent in Valorant has the power to heal itself and other players?",
  answer:"sage"
}
questionlist=[question1,question2,question3,question4,question5,question6,question7,question8,question9,question10]
for(var i =0;i<questionlist.length;i++){
  ques=questionlist[i]
  qna(ques.question,ques.answer)
}
console.log("Your Final score is "+score+"!!")
console.log("Thanks")