// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
       // debugger;
    }

    return gifts;
}

wrapGifts(gifts);


//const names = ["Jane", "Scott", "Bradly"];*/

function writeCards(names, event) {
  // let names = ['Lisa', 'Kaitlin', 'Jan'];
    let messages = [];
    for (let i = 0; i < names.length; i++)  {
       messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }

    return messages; 
}


function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber --;
    }
}