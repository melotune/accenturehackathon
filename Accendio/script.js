

/* Code below not used because of change in direction of project

//var inText = "Feature, Risk Category, Score, Document ID, Page No\nmemory 200 GB,Security,0.8,199847,10";

// var inText = "Feature, Category 1, Category 2, Category 3, Document ID, Page No\nmemory 200 GB,0.9,0,0,199847,10";
// document.getElementById("reportTable").innerHTML = "<p>" + inText + "</p>"; //sets location of table based on id name
//var arr = inText.split("\n"); //create array and split var inText 
//var innode = document.createElement("table"); //create a var innode which creates a table element

 //get the id reportTable and create new table with text
/*
for(var i = 0; i < arr.length; i++){ //for loop to increment var i IF var arr length is greater than var i
    var innode = document.createElement("tr"); //create table row
    if(i = 0){
        var nnode = document.createElement("th"); //create table header
    } else {
        
    }
    innode.appendChild(innonde); 
    document.getElementById("reportTable").insert
    
    for(var x = 0; x < arr[i].split(","); x++){ //split var i IF 'x' is less than var arr 
        var innode = document.createElement("tr");
        var nnode = document.createElement("th");
                 
        document.getElementById("reportTable").insert
       
        for(var y = 0; y < arr[i]; y++){
            var innode = document.createElement("tr"); //create table row
            var nnode = document.createElement("th"); //create table header
                     
            alert(arr[i]); //create popup to show value of var i from inText
            document.getElementById("reportTable").insert

        }
    }
}*/

//****************************************************************************************************
/*It was out of our scope to develop a full microservice or SAAS architecture so to 
showcase this capability we copied the output of the machine learning algorithm to a 
table and set it to become visible on the submit button*/
//****************************************************************************************************

function submitDoc() { //function to display and hide table upon clicking submit

var delayInMilliseconds = 3000;

setTimeout(function() {
    var x = document.getElementById('reportTable');
    if (x.style.visibility === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = 'hidden';
    }}, delayInMilliseconds);
}


/* Code below not used because of change in direction of project
function yeet(){
    var outext = "<table id='reportTable'>";
    for(var i = 0; i < arr.length; i++){
        outext += "<tr>";
        var newarr = arr[i].split(",");
        
        for(var x = 0; x < newarr.length; x++){
            if(i == 0){
                outext += "<th>";
            } else {
                outext += "<td>";
            }
            
            outext += newarr[x];
            
            if(i == 0){
                outext += "</th>";
            } else {
                outext += "</td>";
            }
        }
        
        outext += "</tr>";
    }

    outext += "</table>";
    document.getElementById("reportTable").innerHTML = outext;
}
*/