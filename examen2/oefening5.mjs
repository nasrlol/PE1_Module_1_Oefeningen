import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

async function collectStudentData() {
	const student = {};

	student.naam = await userInput.question("Voer de naam van de student in: ");
	student.opleiding = await userInput.question("Voer de opleiding van de student in: ");
	student.leeftijd = await userInput.question("Voer de leeftijd van de student in: ");

	// Collect interests
	student.interesses = [];
	console.log("\nVoer de interesses van de student in (typ 'STOP' om te stoppen):");
	while (true) {
		const interest = await userInput.question("");
		if (interest.toUpperCase() === "STOP") break;
		student.interesses.push(interest);
	}

	return student;
}

function displayStudentData(student) {
	console.log("\nOutput van de functie:\n");
	console.log(`Naam: ${student.naam}`);
	console.log(`Opleiding: ${student.opleiding}`);
	console.log(`Leeftijd: ${student.leeftijd}`);
	console.log(`Interesses: ${student.interesses.join(", ")}`);
}

const student = await collectStudentData();
displayStudentData(student);
userInput.close();
process.exit();

main();
