function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = ["Jane User", "John Smith"];
console.log(greeter(user)); // This will result in an error because the function expects a single string argument, not an array of strings.