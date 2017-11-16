var selectElement = document.getElementById('planets');
//console.log(selectElement)



var planets = [
    ['Pluto', 0.06],            // 0
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];

for(var i = 0; i < planets.length; i++) {
    var individualPlanetData = planets[i];

    //console.log(individualPlanetData) // ['Pluto', 0.06]

   var optionElement = document.createElement('option');// creates <option>
    optionElement.textContent = individualPlanetData[0]; // sets option's text to Pluto
    optionElement.value = individualPlanetData[0];
    selectElement.appendChild(optionElement); 
    console.log(optionElement)
}

function calculateWeight(userWeight, planetName) {
  for(var i = 0; i < planets.length; i++) {
    if (planets[i][0] == planetName) {
    var num = planets[i][1] * userWeight;
    return num; 
        

    

    //to grab the current planet in the loop
    // planets[i][0] - to grab the current planet's name
    // planets[i][1] - to grab the current planet's name
      
        
        
        
      
      } 
    }
}


function handleClickEvent(){
    //console.log("if you were on "+planetName +", you would weigh "+ result +"lbs!")

    // get string value from the user-weight element, turn it into a number
    var userWeightElement = document.getElementById("user-weight");
    var userWeight = userWeightElement.value
    
    
    
    var planetNameElement = document.getElementById("planets");
    var planetName = planetNameElement.value
    
    
    var result = calculateWeight(userWeight, planetName);
    var pElement = document.getElementById("output");
    var message = "If you were on "+planetName+", you would weigh "+result+"lbs!";
    pElement.innerText = message;
    

    
    
    
    
    
    
};
    var btn = document.getElementById("calculate-button")
    btn.addEventListener("click", handleClickEvent)
    


 // 3. Create a variable called userWeight and assign the value of the user's weight.

  // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.

  // 5. Create a variable called result and assign the value of the new calculated weight.

  // 6. Write code to display the message shown in the screenshot.
  // 7. Set the calculate-weight button's onclick method to use the handleClickEvent function.