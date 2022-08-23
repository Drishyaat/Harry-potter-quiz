var readlineSync=require('readline-sync');
const chalk= require("chalk");

var score=0;
console.log(chalk.blue(":^:^: HARRY POTTER QUIZ :^:^:"));
var userName= readlineSync.question("Enter ur Name ");
console.log("Welcome" , userName);
console.log(chalk.yellow("LETS BEGIN!!"));
function quiz(question,answer)
  {
    var userAnswer= readlineSync.question(question);
    if (userAnswer.toUpperCase()== answer.toUpperCase())
    {
      console.log(chalk.green("RIGHT"));
      score=score+1;
    }
    else {
      console.log(chalk.red("WRONG"));
    }
  } 

quiz("How many books are there in Harry Potter series? ","7")
quiz("What is the name of Harry Potter's owl? ", "HEDWIG")
quiz("Name Ron Weasley's pet rat. ", "SCABBERS")
quiz("Name Luna Lovegood's father. ", " Lovegood")
quiz("Which actor played the character Cedric Diggory? ","Robert Pattinson")
quiz("How are students sorted into their houses? ", "Sorting Hat")
quiz("What animal can Harry speak to? ", "Snake")
quiz("What animal can Remus Lupin turn into? ", "Werewolf")
quiz("Ron Weasley has a fear of which insect? ", "Spider")
quiz("What is Harry’s position in the wizarding sport Quidditch? ", "Seeker")

 console.log("FINAL SCORE", score);
// Array for high score
var highScore=[
{
  name: "Drishya",
  score: 10
},
{
  name: "Akshita",
  score: 9
},
{
 name:"Diya",
 score: 8
}
]
if(highScore[0].score==score) 
{
 console.log("CONGRATULATIONS!! You are tied at first place with", highScore[0].name);
 console.log("Send me a screenshot so that I can update the scoreboard");
}
else if(highScore[1].score==score)
{
console.log("CONGRATULATIONS!! You are tied at second place with", highScore[1].name);
console.log("Send me a screenshot so that I can update the scoreboard");
}
else if(highScore[2].score==score)
{
console.log("CONGRATULATIONS!! You are tied at third place with", highScore[2].name);
console.log("Send me a screenshot so that I can update the scoreboard");
}  
console.log("THANK YOU FOR PLAYING");
 

