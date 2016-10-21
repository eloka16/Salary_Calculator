// level 1- Intern
//Level 2 Associate
//level 3 Managers
//level 4 Executives

var level = document.getElementById("level-options").value;
//var level = e.options[e.selectedIndex].value;

var year = document.getElementById("year").value;


//var Amount = {"Intern": 25000, "Associate": 35000, "Managers": 45000, "Executives": 50000};

var Transportation = 20000
var wardrope = 50000
var Feeding = 50000
var clothing = 35000




function GetSalary(year, level){
	 if (level === "Intern"){
	 	return  "The Value for an Intern is:" + parseInt(25000) 
	 }

	 
	 else if (level === "Associate"){
	 	
	    return  "The Value for a Associate is:" + parseInt(50000  + Transportation)
	 }
	 
	 else if (level === "Managers"){
	 	
	 	return "The Value for a Managers is:" + parseInt (60000 + Transportation + Feeding) 
	 }
	 
	 else if (level === "Executives"){
	 	
	 	return  "The Value for an Executives is:" + parseInt( 70000 + Transportation + Feeding + wardrope + clothing)
	 }
	 
}

//console.log(GetSalary(4, "Associate"))

//function display(){

//ar p = document.createElement("p");               // Create a p element
	//	var t = document.createTextNode("The Salary for " + GetSalary(year, level));     // Create a text node
//.appendChild(t);

	//document.getElementById("display-result")


}


