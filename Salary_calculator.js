// level 1- Intern
//Level 2 Associate
//level 3 Managers
//level 4 Executives

var level = document.getElementById("level-options").value;
//var level = e.options[e.selectedIndex].value;

var year = document.getElementById("year").value;


var Amount = {"Intern": 25000, "Associate": 35000, "Managers": 45000, "Executives": 50000};

var InternAmount = 25000
var Transportation = 20000
var wardrope = 50000
var Feeding = 50000
var clothing = 35000




function GetSalary(year, level){
	 if (level === "Intern"){
	 	return  "The Value for an Intern is:" + Amount["Intern"]; 
	 }

	 
	 else if (level === "Associate"){
	 	document.getElementById('total').innerHTML = Amount["Associate"];
	 	
	 	//return  "The Value for an Associate is:" +  + Transportation 
	 }
	 
	 else if (level === "Managers"){
	 	
	 	return "The Value for an Managers is:" +  Amount["Managers"] + Transportation + Feeding  
	 }
	 
	 else if (level === "Managers"){
	 	
	 	return  "The Value for an Managers is:" + Amount["Executives"] + Transportation + Feeding + wardrope + clothing
	 }
	 
}

//console.log(GetSalary(4, "Associate"))

//function display(){

//ar p = document.createElement("p");               // Create a p element
	//	var t = document.createTextNode("The Salary for " + GetSalary(year, level));     // Create a text node
//.appendChild(t);

	//document.getElementById("display-result")


}


