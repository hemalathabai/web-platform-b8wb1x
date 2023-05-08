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

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log('Odd Number #' + i);
  }
}
