console.log('Hello!');
console.log('Hello World');

let hour = 11;

if (hour >= 0 && hour <= 13) {
  console.log('Good Morning');
} else if (hour >= 13 && hour <= 17) {
  console.log('Good Afternoon');
} else console.log('Good Evening');

let weather = 'hot';

if (weather === 'hot') {
  console.log('Weather is hot');
} else console.log('Weather is Sunny');

let grade = 'A';

switch (grade) {
  case 'S':
    console.log('Super Grade!');
    break;
  case 'A':
  case 'B':
    console.log('Excellent Grade!');
    break;
  case 'E':
    console.log('Just Pass!');
    break;
  case 'U':
    console.log('Failed Grade!');
    break;
  default:
    console.log('Unkown Grade');
}

let mobile = '70k';

switch (true) {
  case mobile > '60k':
    console.log('Buy iPhone Mobile');
    break;
  case mobile > '10k':
    console.log('Buy Android Mobile');
    break;
  case mobile > '5k':
  case mobile < '10k':
    console.log('Buy basic Mobile');
    break;
  default:
    coneole.log("You can't afford mobile phone now!");
}

let cell = 30;

if (cell > 60) {
  console.log("Buy I Phone Mobile!");
}
else if (cell < 10) {
  console.log("Buy Android Mobile!");
}
else if (cell > 5) {
  console.log ("Buy Basic Mobile");
}
else {
  console.log("You can;t afford Mobile phone");
}