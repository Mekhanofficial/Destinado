


function calculateShipping() {
    let weight = parseFloat(document.getElementById("weight").value); // turns string to number
    let destinationCity = document.getElementById("destination").value; //check destination value
    let isExpressDelivery = document.getElementById("express").checked; // boolean

    let baseCost = 20; // base in Ghana Cedi (₵)
    console.log("Starting base cost:", baseCost);

    // conditionals
    if (destinationCity === "Accra") {
      baseCost += 10;
      console.log("Destination Accra → +10 added, new cost:", baseCost);
    }
    if (destinationCity === "Kumasi") {
      baseCost += 25;
      console.log("Destination Kumasi → +25 added, new cost:", baseCost);
    }
    if (destinationCity === "Takoradi") {
      baseCost += 20;
      console.log("Destination Takoradi → +20 added, new cost:", baseCost);
    }
    if (destinationCity === "Tamale") {
      baseCost += 40;
      console.log("Destination Tamale → +40 added, new cost:", baseCost);
    }
    if (destinationCity === "Cape Coast") {
      baseCost += 15;
      console.log("Destination Cape Coast → +15 added, new cost:", baseCost);
    }
    if (destinationCity === "Koforidua") {
      baseCost += 18;
      console.log("Destination Koforidua → +18 added, new cost:", baseCost);
    }

   if (weight > 15) {
     let extraWeight = weight - 15; 
     baseCost += extraWeight * 10; 
     console.log("Overweight (>15kg) → +" + (extraWeight * 10) + " added, new cost:", baseCost);
    }


    if (isExpressDelivery) {
      baseCost *= 1.5;
      console.log("Express delivery applied → cost multiplied by 1.5, new cost:", baseCost);
    }

    let resultMessage = "The total shipping cost for your " 
      + weight + "kg package to " 
      + destinationCity + " is ₵" 
      + parseInt(baseCost) + "."; // show as number no decimal 55.5

    console.log("Final result:", resultMessage);
    document.getElementById("result").innerText = resultMessage;
  }