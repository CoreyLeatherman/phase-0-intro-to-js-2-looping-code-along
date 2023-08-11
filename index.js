let names = ["Charlie", "Samip", "Ali"];
let birthday = "birthday";
let messagesArray = [];

function writeCards(namesArray, event) {
  for (let i = 0; i < namesArray.length; i++) {
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`;
    messagesArray.push(message); 
  }
  console.log(messagesArray);
  return messagesArray;  
}

// writeCards(names, birthday);


function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

//countDown(10);
