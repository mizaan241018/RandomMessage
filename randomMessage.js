//create a function to output a combined messaged pulled at random from three arrays
function MessageGenerator(doArray, dontArray, warningArray){
    //use a random number between 0 and the array length to find 
    return warningArray[Math.floor(Math.random(0,warningArray.length))] + dontArray[Math.floor(Math.random(0,warningArray.length))] + doArray[Math.floor(Math.random(0,warningArray.length))];
}

//define the arrays that will contain possible options for the message
const doArray=["Do your best! ", "Fold the oven!", "Toast the blanket.", "Jump out the window.", "Eat the books!", "Break the window!", "Fry the laptop!", "Eat the computer.", "Butter the fridge."];
const dontArray=["Don't fail! ", "Don't put jam on the fridge.", "Don't put the flower in the ceiling.", "Don't turn the clock on!", "Don't read books.", "Don't use any keys.", "Don't turn on the car."];
const warningArray=["Warning! You are in danger! ", "Caution!", "Watch out!", "Danger!", "Beware!", "Stay alert!", "Be careful."];

//call the function to output the array and log to the console.
console.log(MessageGenerator(doArray, dontArray, warningArray));

