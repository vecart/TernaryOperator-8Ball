// EIGHT BALL PROGRAM
let userName = '';
let userQuestion = '';
//ternary operator replacing if/then
userName === '' ? console.log('Hello, Stranger!') : console.log(`Hello ${userName}!`);
userQuestion === '' ? console.log('What\'s your question?'):
userQuestion !== '' && userName === '' ? console.log('Good question, but what\'s your name?'):
userName !== '' && userQuestion !== '' ? console.log(`${userQuestion}, good question!`):
null;


let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

//Assigning random result to eightBall var, based on randomNumber
switch (randomNumber) {
  case 0: eightBall = 'It is certain!';
  break;
  case 1: eightBall = 'It is decidedly so!';
  break;
  case 2: eightBall = 'Reply hazy try again...';
  break;
  case 3: eightBall = 'Cannot predict now...';
  break;
  case 4: eightBall = 'Do not count on it.';
  break;
  case 5: eightBall = 'My sources say no.';
  break;
  case 6: eightBall = 'Outlook not so good.';
  break;
  case 7: eightBall = 'Signs point to yes!';
  break;
  default: eightBall = 'Please try again.';
  break;
}
//Setting conditions for returning result of eightBall 
if (userName === '' || userQuestion === '') {
  console.log ('Please enter information above.')
} else {
  console.log(eightBall);
  }

//Scenario 1: Name/Question input fields filled = return name/question/result
//Scenario 2: Only Name input field filled = return name and requests information
//Scenario 3: Only Question input field filled = acknowledges question, but requests name
//Scenario 4: No input fields filled = Stranger/requests information
