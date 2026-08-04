import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    console.log("Hello,", name);
    rl.close();
});

// rl.question("Enter your name: ", (name) => {
//     rl.question("Enter your age: ", (age) => {
//         console.log("Name:", name);
//         console.log("Age:", age);
//         rl.close();
//     });
// });