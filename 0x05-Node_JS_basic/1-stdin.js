/**
 *
const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on('close', () => {
  if (!process.stdin.isTTY){
    console.log('This important software is now closing');
  }
  process.exit(0);
});
*/
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
