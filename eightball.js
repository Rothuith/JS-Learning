let userName = "John";
let userQuestion = "Am I deaf?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
/// userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");
/// console.log(`${userName}, this is your question: "${userQuestion}".`);

console.log("Number is: " + randomNumber);
switch (randomNumber) {
  case 1:
    eightBall = "It is certain.";
    break;
  case 2:
    eightBall = "It is decidedly so.";
    break;
  case 3:
    eightBall = "Reply hazy, try again.";
    break;
  case 4:
    eightBall = "Cannot predict now.";
    break;
  case 5:
    eightBall = "Do not count on it.";
    break;
  case 6:
    eightBall = "My sources say no.";
    break;
  case 7:
    eightBall = "Outlook not so good.";
    break;
  case 8:
    eightBall = "Signs point to yes.";
    break;
  case 0:
    eightBall = "Out of luck.";
    break;
  default:
    console.log("Unexpected or blank question.");
    break;
}

console.log(`${userName}` + ", your question is: " + userQuestion);
console.log("The eight ball speaks: " + `${eightBall}`);
