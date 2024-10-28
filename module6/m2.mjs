let array = [0, 1];

for (let i = 1; i <= 8; i++) {
	array.push(array[i - 1] + array[i]);
}
console.log(array)
process.exit();
