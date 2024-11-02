function vergelijkLeeftijd(a, b) {
	if (a.leeftijd > b.leeftijd) {
		return `${a.naam} is ouder dan ${b.naam}`;
	} else if (a.leeftijd < b.leeftijd) {
		return `${a.naam} is jonger dan ${b.naam}`;
	} else if (a.leeftijd == b.leeftijd) {
		return `${a.naam} is even oud als ${b.naam}`;
	}
}

let persoon1 = {
	naam: "yoran",
	leeftijd: 19,
};

let persoon2 = {
	naam: "mahir",
	leeftijd: 18,
};

console.log(vergelijkLeeftijd(persoon1, persoon2));
process.exit();
