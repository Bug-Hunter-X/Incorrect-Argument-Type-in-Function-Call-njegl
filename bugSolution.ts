function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = ["Jane User", "John Smith"];

// Solution 1: Iterate over the array and call the function for each element
user.forEach(name => console.log(greeter(name)));

// Solution 2: Modify the function to accept an array of strings
function greeterArray(people: string[]): string {
  return `Hello, ${people.join(', ')}!`;
}
console.log(greeterArray(user));