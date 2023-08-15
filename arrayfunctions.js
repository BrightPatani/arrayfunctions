//Array of numbers
var numbers = [1, 2, 3, 4, 5];

// Using forEach to square each number
console.log("Original array of numbers:");
numbers.forEach(function(number) {
    console.log(number);
});

console.log("squared array of numbers:");
    numbers.forEach(function(number, index, square) {
    square[index] = number*number

    console.log(numbers);
});


//Array of numbers
var numbers = [1, 2, 3, 4, 5];
    console.log("Array of numbers")
    numbers.map(function(number) {
    console.log(number);
    });
// Using map to square each number 
var squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log("Squared array of numbers:");
console.log(squaredNumbers);


// Array of strings

var Cars = [
    { Company: 'Ford', Brand: 'Shelby GT 500' },
    { Company: 'Mercedes Benz', Brand: 'Mercedes-AMG GT' },
    { Company: 'Innoson', Brand: 'innoson G80' },  
];

// The function below capitalizes each word in a string 
// and convert the rest of the letters to lower case
function capitalizeWords(inputString) {
    var words = inputString.split(' ');

    words.forEach(function(word, index, array) {
        array[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
// The return command below joins the modified words 
// back to string form
    return words.join(' ');
}

Cars.forEach(function(car) {
    car.Company = capitalizeWords(car.Company);
    car.Brand = capitalizeWords(car.Brand);
});

// displays the newly capitalized car names
console.log(Cars);


// An array of car objects
var Cars = [
    { Company: 'Ford', Brand: 'Shelby GT 500' },
    { Company: 'Mercedes Benz', Brand: 'Mercedes-AMG GT' },
    { Company: 'Innoson', Brand: 'innoson G80' },  
];

// The map function below capitalizes the company and brand
// properties of each car object
var capitalizedCars = Cars.map(function(car) {
    return {
        Company: capitalizeWords(car.Company),
        Brand: capitalizeWords(car.Brand)
    };
});

// Function to capitalize each word in a string and 
// convert the rest of the letters to lowercase
function capitalizeWords(inputString) {
    var words = inputString.split(' ');

    words.forEach(function(word, index, array) {
        array[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return words.join(' ');
}
// output of the newly capitalized car objects
console.log(capitalizedCars);




// CREATING ARITHMETIC FUNCTION
// Addition function
function add(x, y) {
    return x + y;
}

// Subtraction function
function subtract(x, y) {
    return x - y;
}

// Multiplication function
function multiply(x, y) {
    return x * y;
}

// Division function
function divide(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return "Cannot divide by zero!";
    }
}

// Get input from the user for x and y
// the parsefloat converts user inputs to decimal form
var num1 = parseFloat(prompt("Enter the first number (x):"));
var num2 = parseFloat(prompt("Enter the second number (y):"));

// The command below test the function by user input
console.log(`Addition: ${add(num1, num2)}`);
console.log(`Subtraction: ${subtract(num1, num2)}`);
console.log(`Multiplication: ${multiply(num1, num2)}`);
console.log(`Division: ${divide(num1, num2)}`);
