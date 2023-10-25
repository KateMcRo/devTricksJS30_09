const dogs = [
  { name: "Snickers", age: 2 },
  { name: "Hugo", age: 8 },
];

// To find where this happens:
// Inspect > Break on... > attribute modifications
// Paused in debugger - shows line where change happens
function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello, I am a %s string", "🤓"); // Could also use ES6 backticks

// Styled
console.log("%c I am some great text", "font-weight:bold"); // Any font styling can be applied here

// warning!
console.warn("Oh no, Mr. Bill!");

// Error :|
console.error(`💀`);

// Info
console.info("This could have been an email."); // String is showing but blue info icon not visible for me on Chrome or Safari

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That class does not exist.");

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p); // Allows you to open the element

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} in dog years`);
  console.groupEnd(`${dog.name}`);
});

// Table
console.table(dogs);

// counting

console.count("Wes");
console.count("Wes");
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
