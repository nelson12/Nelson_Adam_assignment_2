// Nelson_Adam_Assignment 2
//my story will be about playing paintball

//Intial Variables
var playPaintball= "Today"
var teamMembers = 2
var teamName = "Potassium"
var readyToPlay = true
var strategy = "Surprize Attack!!!!"
var notReadyToPlay = "Practice"

//Output Variables
console.log("Welcome", + teamName);
console.log("You are here to play paintball", + playPainball);
console.log("To play you need", + teamMembers);
console.log("You will lose without our", + strategy);
console.log("Your ready to play?", + readyToPlay);

readyToPlay = confirm("Are you ready to play?");//confirm
//boolean conditional
if (readyToPlay == true && teamMemebers < 4){
	console.log("Great Let's Play Paintball!!!");
}else{
	console.log("Ok then maybe we should practice.");
}

teamMembers=prompt("Do you have 3 players?");//prompt
//number conditional
if(teamMembers>parseInt("2")){
	console.log("You have enough to play.");
}else{
	console.log("You need to get more players.");
}
//boolean function and confirm
function doWeHaveEnoughPaintballs(){
	var doWeHaveEnoughPaintballs = "true";
	doWeHaveEnoughPaintballs=confirm("Do we have enough paintballs?");
}if(doWeHaveEnoughPaintballs == true){
	console.log("Let's Play!");
}else{
	console.log("Need to buy Paintballs Bro.");
}
doWeHaveEnoughPaintballs ();
//while loop
var a = "20";
while (a>0){//checks the condition
	console.log(a + "paintballs");
	a--;
}

//number function
function playersOnTheField(){
	var playersOnTheField =3*2;
	var teamMemebers =2;
	console.log("There are", + playersOnTheField + "team members");
}
playersOnTheField();
//passing values and arguements

 //for Loop
 var B ="30";
 for (var B=30; B > C; B--); {
	 console.log(b+ "players on the field.");
 }
 
 //String Function
 function stateOfmind () {
	 var stateOfmind = "calm and ready";
	 console.log ("what is your", + stateOfmind ); 
 }