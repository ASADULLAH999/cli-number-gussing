#! /usr/bin/env node
import inquirer from "inquirer";

const randomNum=Math.floor(Math.random() * 10 + 1);


const answer=await inquirer.prompt([{
    message:"please guess a  number b/w 1-10",
    type:"number",
    name:"userinput"
}]);
console.log(answer);

//operation:
if(answer.userinput=== randomNum){
console.log("you guess right number")

}else{
    console.log("you guess wrong number")
}; 