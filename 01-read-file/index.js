const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');

const fileOperation = async (action, filePath) => {
  switch (action) {
    case 'read':
    const text = await fs.readFile(filePath, 'utf-8');
    console.log(text);
  }
}

fileOperation('read', filePath);
