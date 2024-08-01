const fs = require('fs');
// const path = './data.txt';

// Helper function to read data from file
function readData(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    return data.split('\n').filter(line => line).map(line => JSON.parse(line));
  } catch (error) {
    console.error('Error reading data:', error);
    return [];
  }
}

// Helper function to write data to file
function writeData(path, data) {
  try {
    const dataString = data.map(item => JSON.stringify(item)).join('\n');
    fs.writeFileSync(path, dataString, 'utf8');
  } catch (error) {
    console.error('Error writing data:', error);
  }
}

// CREATE
function create(path, data) {
  const allData = readData(path);
  allData.push(data);
  writeData(path, allData);
  console.log('Data created:', data);
}

// READ
function read(path) {
  const allData = readData(path);
  console.log('All data:', allData);
  return allData;
}

// UPDATE
function update(path, id, newData) {
  const allData = readData(path);
  const index = allData.findIndex(item => item.id === id);
  if (index !== -1) {
    allData[index] = { ...allData[index], ...newData };
    writeData(path, allData);
    console.log('Data updated:', allData[index]);
  } else {
    console.log(`Data with id ${id} not found.`);
  }
}

// DELETE
function del(path, id) {
  let allData = readData(path);
  const initialLength = allData.length;
  allData = allData.filter(item => item.id !== id);
  if (allData.length < initialLength) {
    writeData(path, allData);
    console.log(`Data with id ${id} deleted.`);
  } else {
    console.log(`Data with id ${id} not found.`);
  }
}

// Example usage:
create('./data.txt', { id: 1, name: 'Alice', age: 25 });
create('./data.txt',{ id: 2, name: 'Bob', age: 30 });
read('./data.txt');
update('./data.txt', 1, { age: 26 });
del('./data.txt', 2);
read('./data.txt');