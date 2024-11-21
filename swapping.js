function swapDigits() {
  // Get the user's input
  const numberInput = document.getElementById("number").value;

  // Convert the string into an array using the split method. I learnt how to do this from here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  let numberArray = numberInput.split("");

  // Utilise a for loop to swap the second digit with the last digit
  for (let i = 0; i < numberArray.length; i++) {
    if (i === 1) {
      let secondDigit = numberArray[i];
      // Swaping the second digit with the last digit
      numberArray[i] = numberArray[numberArray.length - 1];
      numberArray[numberArray.length - 1] = secondDigit;
      break; //
    }
  }
  //orgional number
  const originalNumber = numberInput;

  const swappedNumber = numberArray.join("");

  // Display the original and swapped numbers
  document.getElementById(
    "output"
  ).innerText = `Original number: ${originalNumber}, Swapped number: ${swappedNumber}`;
}


let guestList = []

function submitName() {
  const nameInput = document.getElementById("guestNames").value;
  const output = document.getElementById ("output");
  output = nameInput.value;
}

if (!isNaN (nameInput) {
    output.innerText=  " Please Enter a Valid Name";
    return;
}

guestList.push (nameInput);


if ( guestList.length > 10) {
  const replaceChoice = prompt( 
    "Maximum number Of guests exceeded, would you like to replace someone on the list?(Yes/No):"
  ).toLowerCase();

}

if (replaceName== Yes){
    const replacename = prompt ("Please enter the name you would like to replace");
    const index = guestList.indexOf (replacename)
    if (index !== -1){
        guestList [index] = nameInput

    }

}







if( replaceChoice== Yes){
  const replaceName = prompt (" Please enter the name you would like to replace");

  const index = gueslist.indexof (replaceName)
  if(index !== replaceName){

guestList [index] = nameInput;
guestList.pop();
output.innerText= " Guestlist replacement has been updated.";
  } else {
    guestList.pop();
    output.innerText= `${replaceName}`is not on the list. The last entered name will not be added.`;
  } 
  }
  else { 
   guestlis.pop

  }
}




document.getElementById(
    "output"
).innerText= `Gueslist Names: ${nameInput}`;

if (nameInput= Number){
console.log( "Please Input Names Only")
    else 

    
   


let output = 
}