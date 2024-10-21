import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

/*
Schrijf functies om de oppervlaktes van de volgende vormen te berekenen:

cirkel: Pi x straal x straal (je kan de waarde van Pi opvragen met Math.PI)
driehoek: basis x hoogte gedeeld door 2
rechthoek: zijde1 x zijde2
vierkant: zijde x zijde
Zorg ervoor dat je functie om de oppervlakte van een vierkant te berekenen de functie om de oppervlakte van een rechthoek te berekenen gebruikt. Zorg ervoor dat al deze functies de waardes terugsturen en zelf geen output hebben. 

*/

function cirkel(straal) {
  console.log(`De oppervlakte van de ${figuur} is ${Math.PI * straal ** 2}`);
}

function driehoek(basis, hoogte) {
  console.log(`De oppervlakte van de ${figuur} is ${basis * (hoogte / 2)}`);
}

function rechthoek(zijde1, zijde2) {
  console.log(`De oppervlakte van de ${figuur} is ${zijde1 * zijde2}`);
}

function vierkant(zijde) {
  console.log(`De oppervlakte van de ${figuur} is ${zijde ** 2}`);
}

console.log("Van welk figuur wil je de oppervlakte berekenen?: ");
let user = await userInput.question("CIRKEL, DRIEHOEK, RECHTHOEK, VIERKANT ");
let figuur = user.toLowerCase();
if (figuur == "cirkel") {
  let straal = await userInput.question(
    "Hoeveel is de straal van de cirkel dat je wil berekenen?: "
  );
  cirkel(straal);
} else if (figuur == "driehoek") {
  let basis = await userInput.question(
    "Hoeveel is de basis van de driehoek die je wilt berekenen?: "
  );
  let hoogte = await userInput.question(
    "Hoeveel is de hoogte van de driehoek die je wilt berekenen?: "
  );
  driehoek(basis, hoogte);
} else if (figuur == "rechthoek") {
  let zijde1 = await userInput.question(
    "Hoeveel is de eerste zijde van de rechthoek?: "
  );
  let zijde2 = await userInput.question(
    "Hoeveel is de tweede zijde van de rechthoek?: "
  );
  rechthoek(zijde1, zijde2);
} else if (figuur == "vierkant") {
  let zijde = await userInput.question(
    "Hoeveel is de zijde van de vierkant dat je wil berekenen?: "
  );
  vierkant(zijde);
}

process.exit();
