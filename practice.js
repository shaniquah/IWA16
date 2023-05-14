// JavaScript arrays only have whole positive numbers as indexes
// Zero(0) indexed*start counting at 0
// Resizable and only reads keys that have numbers in an array

const example = [
    'one',
    'two',
    'three',
    'four',
];

example.length = 50
console.log(example)
console.log(example.length)

example.length = 3
console.log(example)

const example1 = [
    'Lira',
    'Fentse',
    'Mpho',
    'Neo',
];

const example2 = [
    'Mpho',
    'Lerato',
    'File',
    'Sipho',
];

const example3 = []

const checkIfPresent = (student) => {
    const results = {
        3: example3.includes(student),
        1: example1.includes(student),
        2: example2.includes(student)
    }
    return results
}

console.log(checkIfPresent('Lerato'))
console.log(checkIfPresent('Mpho'))
console.log(checkIfPresent('Brad'))

// Array[-1] means not in the array
// (array.length -1) = array.at(-1)

// push = adds to end of array
// shift = removes from beginning of array and returns it
// pop = removes from end of array and returns it
// unshift = adds one/more to beginning of array and returns new array.length
// flat = returns new array with sub-array elements moved up a specified level
// splice = extracts section of the calling array and returns new array
// concat = returns new array made of calling array joined with other arrays and/or values


// scripts.js

const createHtml = (athlete) => {
    const { firstName, surname, id, races } = athlete;
    const latestRace = races[races.length - 1];
    const { date, time } = latestRace;
    const [fourth, third, second, first] = time.slice().reverse();
    const total = time.reduce((sum, value) => sum + value, 0);
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
    const dateObj = new Date(date);
    const formattedDate = new Intl.DateTimeFormat('en', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(dateObj);
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  
    const section = document.querySelector(`[data-athlete="${id}"]`);
    const title = document.createElement('h2');
    title.textContent = id;
    section.appendChild(title);
  
    const list = document.createElement('dl');
  
    const createTermAndDefinition = (term, definition) => {
      const dt = document.createElement('dt');
      dt.textContent = term;
      const dd = document.createElement('dd');
      dd.textContent = definition;
      list.appendChild(dt);
      list.appendChild(dd);
    };
  
    createTermAndDefinition('Full Name', `${firstName} ${surname}`);
    createTermAndDefinition('Total Races', races.length);
    createTermAndDefinition('Event Date (Latest)', formattedDate);
    createTermAndDefinition('Total Time (Latest)', formattedTime);
  
    section.appendChild(list);
  };
  
  const athletes = Object.values(data.response.data);
  athletes.forEach(createHtml);
  