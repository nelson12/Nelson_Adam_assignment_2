// Nelson_Adam_Assignment 1
//my story will be about playing paintball

//Intial Variables
var playPaintball= "Today"
var teamMembers = 3
var teamName = "Potassium"
var readyToPlay = true
var strategy = "Surprize Attack!!!!"
var notReadyToPlay = "Practice"

//Output Variables
console.log("Welcome", + teamName);
console.log("You are here to play paintball", + playPainball);
console.log("You need", + teamMembers , + "team mates to play.");
console.log("You should have a plan like a" + strategy);

readyToPlay = confirm("Are you ready to play?");//confirm
//boolean conditional
if (readyToPlay === true){
	console.log("Great Let's Play Paintball!!!");
}else{
	console.log("Ok then maybe we should practice.");
}

teamMembers=prompt("Do you have 3 players?");//prompt
//number conditional
if(teamMembers>2){
	console.log("You have enough to play.");
}else{
	console.log("You need to get more players.");
}