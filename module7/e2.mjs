let hond = {
	naam: "pepijn",
	leeftijd: 3,
	isSpeels: false,
	speels_functie: function () {
		if (this.isSpeels == true) {
			return "speels";
		} else {
			return "niet speels";
		}
	},
	voorstellen: function () {
		console.log(
			`ik ben ${this.naam} en ben ${
				this.leeftijd
			} jaar en ook ${this.speels_functie()}`
		);
	},
};

let hond1 = {
	naam: "pipa",
	leeftijd: 5,
	isSpeels: true,
	speels_functie: function () {
		if (this.isSpeels == true) {
			return "speels";
		} else {
			return "niet speels";
		}
	},
	voorstellen: function () {
		console.log(
			`ik ben ${this.naam} en ben ${
				this.leeftijd
			} jaar en ook ${this.speels_functie()}`
		);
	},
};

let hond2 = {
	naam: "foss",
	leeftijd: 5,
	isSpeels: true,
	speels_functie: function () {
		if (this.isSpeels == true) {
			return "speels";
		} else {
			return "niet speels";
		}
	},
	voorstellen: function () {
		console.log(
			`ik ben ${this.naam} en ben ${
				this.leeftijd
			} jaar en ook ${this.speels_functie()}`
		);
	},
};

hond.voorstellen();
hond1.voorstellen();
hond2.voorstellen();

process.exit();
