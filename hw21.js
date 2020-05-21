const fs = require('fs');

try {
  fs.mkdirSync('test-folder');
  console.log('test-folder crated');
} catch (e) {
  console.log('test-folder already exists');
}

const files = fs.readdirSync('test-folder');
for (const file of files) fs.unlinkSync(`test-folder/${file}`);

console.log('test-folder clear');

// Create files
fs.writeFileSync('test-folder/file_1.txt', 'file one');
console.log('test-folder/file_1.txt created');

fs.writeFileSync('test-folder/file_2.txt', 'file two');
console.log('test-folder/file_2.txt created');

fs.writeFileSync('test-folder/file_3.txt', 'file three');
console.log('test-folder/file_3.txt created');

const file3 = fs.readFileSync('test-folder/file_3.txt').toString();
console.log('test-folder/file_3.txt =>', file3);

fs.renameSync('test-folder/file_3.txt', 'test-folder/file_4.txt');
console.log('renamed test-folder/file_3.txt => test-folder/file_4.txt');
