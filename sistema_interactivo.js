const nombre = prompt("Enter your name:");

// Request the user's age
const edadIngresada = prompt("Enter your age:");

// Convert age to a number
const edad = Number(edadIngresada);

// Validate that age is a valid number
if (isNaN(edad)) {

    console.error("Error: Please enter a valid age in numbers.");

} else {

    // Check if the user is a minor
    if (edad < 18) {

        console.log(
            `Hello ${nombre}, you are a minor. Keep learning and enjoying coding!`
        );

        alert(
            `Hello ${nombre}, you are a minor. Keep learning and enjoying coding!`
        );

    } else {

        console.log(
            `Hello ${nombre}, you are an adult. Get ready for great opportunities in the world of programming!`
        );

        alert(
            `Hello ${nombre}, you are an adult. Get ready for great opportunities in the world of programming!`
        );
    }
}
