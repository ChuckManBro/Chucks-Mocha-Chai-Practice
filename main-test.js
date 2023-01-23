let expect = chai.expect;

describe('TEST MY AVERAGE FUNCTION:', function () {
	it('Test Case 1: Should find the average of the numbers in an array', function () {
		let testArray = [90, 100];
		let x = chucksAverageFunction(testArray);
		expect(x).to.equal(95);
	});

	it('Test Case 2: Should return a string that says no numbers were entered', function () {
		expect(chucksAverageFunction([])).to.equal('(No numbers received!)');
	});
});
