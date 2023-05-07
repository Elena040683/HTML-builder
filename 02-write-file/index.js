const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');
const phrase = 'Hello! This is core NodeJS.\nPlease, type your question ...';
const welcomePhrase = ''

const fileOperation = async (action, filePath, data) => {
  switch (action) {
    case 'add':
      const newText = await fs.appendFile(filePath, data);
      console.log(newText);
      break;

    case 'read':
      const output = await fs.readFile(filePath, 'utf-8');
      console.log(output);
      break;
  }
}

// fileOperation('add', filePath, `${phrase}`);
fileOperation('read', filePath, `${phrase}`);

const inputQuestion = process.argv;
console.log(inputQuestion);
