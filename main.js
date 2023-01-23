'use strict';
// CODE TESTING PRACTICE

function chucksAverageFunction(arr) {
	if (arr.length == 0) return `(No numbers received!)`;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return Math.round(sum / arr.length);
}
