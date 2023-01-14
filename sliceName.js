let fullName = "Naing Khant";
let firstName;
let lastName;

lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);
firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);


