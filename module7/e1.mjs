let lijstHonden = [];
let hond1 = { naam: "pepijn", leeftijd: 3, isSpeels: false };
let hond2 = { naam: "pipa", leeftijd: 4, isSpeels: true };
let poes = { naam: "cleo", leeftijd: 5, isSpeels: true };

lijstHonden.push(hond1, hond2, poes);
console.log(lijstHonden);
console.log(hond1.naam);
console.log(hond1.leeftijd);
console.log(hond1.isSpeels);

process.exit();
