import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let bankRekening_1 = {
	rekeningNummer: 372810,
	saldo: 1000,
	eigenaar: "yoran",
	object_toonSaldo: () => console.log(`het saldo is ${bankRekening_1.saldo}`),
	object_overschrijven: function (aantal, ontvanger) {
		console.log(`je hebt ${aantal} overgeschreven naar ${ontvanger}`);
		this.saldo -= aantal;
		console.log(`het huidig saldo is ${this.saldo}`);
	},
	object_ontvangen: function (aantal, verzender) {
		console.log(`je hebt ${aantal} ontvangen van ${verzender}`);
		this.saldo += aantal;
		console.log(`het huidig saldo is ${this.saldo}`);
	},
};

let bankRekening_2 = {
	rekeningNummer: 408323,
	saldo: 100,
	eigenaar: "miepa",
	object_toonSaldo: () => console.log(`het saldo is ${bankRekening_2.saldo}`),
	object_overschrijven: function (aantal, ontvanger) {
		console.log(`je hebt ${aantal} overgeschreven naar ${ontvanger}`);
		this.saldo -= aantal;
		console.log(`het huidig saldo is ${this.saldo}`);
	},
	object_ontvangen: function (aantal, verzender) {
		console.log(`je hebt ${aantal} ontvangen van ${verzender}`);
		this.saldo += aantal;
		console.log(`het huidig saldo is ${this.saldo}`);
	},
};

let bankRekening_3 = {
	rekeningNummer: 339203,
	saldo: 20,
	eigenaar: "plop",
	object_toonSaldo: () => console.log(`het saldo is ${bankRekening_3.saldo}`),
	object_overschrijven: function (aantal, ontvanger) {
		console.log(`je hebt ${aantal} overgeschreven naar ${ontvanger}`);
		this.saldo -= aantal;
		console.log(`het huidig saldo is ${this.saldo}`);
	},
	object_ontvangen: function (aantal, verzender) {
		console.log(`je hebt ${aantal} ontvangen van ${verzender}`);
		this.saldo += aantal;
		console.log(`het huidig saldo is ${this.saldo}`);
	},
};

function zicht(bankRekening_1, bankRekening_2, bankRekening_3) {
	console.log(`dit zijn alle rekeneningen`);

	console.log(bankRekening_1.rekeningNummer, bankRekening_1.saldo, bankRekening_1.eigenaar);
	console.log(bankRekening_2.rekeningNummer, bankRekening_2.saldo, bankRekening_2.eigenaar);
	console.log(bankRekening_3.rekeningNummer, bankRekening_3.saldo, bankRekening_3.eigenaar);
}

async function overschrijven(zender, ontvanger) {
	let hoeveelheid = parseFloat(await userInput.question("hoeveel wil je overschrijven? = "));

	switch (zender) {
		case 1:
			console.log(1);
			bankRekening_1.object_overschrijven(hoeveelheid, ontvanger);

			break;
		case 2:
			console.log(2);
			bankRekening_2.object_overschrijven(hoeveelheid, ontvanger);
			break;

		case 3:
			console.log(3);
			bankRekening_3.object_overschrijven(hoeveelheid, ontvanger);
			break;
	}

	switch (ontvanger) {
		case 1:
			console.log(1);
			bankRekening_1.object_ontvangen(hoeveelheid, zender);

			break;
		case 2:
			console.log(2);
			bankRekening_2.object_ontvangen(hoeveelheid, zender);
			break;

		case 3:
			console.log(3);
			bankRekening_3.object_ontvangen(hoeveelheid, zender);
			break;
	}
}

zicht(bankRekening_1, bankRekening_2, bankRekening_3);

let verzender = parseFloat(await userInput.question("van wie wil je geld verzenden?: \n 1 yoran \n 2 miepa \n 3 plop \n => "));
let ontvanger = parseFloat(await userInput.question("naar wie wil je het verzenden?: \n 1 yoran \n 2 miepa \n 3 plop \n => "));

await overschrijven(verzender, ontvanger);
console.log();

process.exit();
