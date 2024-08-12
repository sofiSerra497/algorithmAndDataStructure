//sumar sin suma
interface GreatAndSmallNumber {
	great: number;
	small: number;
}

function GetGreatAndSmallNumbers(a: number, b: number): GreatAndSmallNumber {
	if (a > b) {
		return {
			great: a,
			small: b,
		};
	}
	return {
		great: b,
		small: a,
	};
}

function Sub(a: number, b: number) {
	const numbers: GreatAndSmallNumber = GetGreatAndSmallNumbers(a, b);
	let bigNumber: number = numbers.great;
	let smallNumber: number = numbers.small;
	let value: number = 0;
	for (let i = 0; smallNumber <= bigNumber; i++) {
		smallNumber++;
		value = i;
	}
	return value;
}

function Mult(multiplier: number, num: number) {
	let value: number = 0;
	for (let i = 0; i < multiplier; i++) {
		value += num;
	}
	return value;
}

function Div(num: number, divisor: number) {
	let value: number = num;
	let result: number = 1;
	for (let i = 1; value >= divisor; i++) {
		value -= divisor;
		result = i;
	}
	return result;
}

function PowNumber(num: number, pow: number, value: number = 1) {
	if (pow == 0) return value;
	value = value * num;
	pow--;
	return PowNumber(num, pow, value);
}

function FactNumber(num: number, value: number = 1, count: number = 1) {
	if (count - 1 === num) return value;
	value *= count;
	count++;
	return FactNumber(num, value, count);
}

// function without optimization
function VerifyNumberPrime(num: number, count: number = 2) {
	if (num % count == 0) return false;
	if (count === num - 1) return true;
	count++;
	return VerifyNumberPrime(num, count);
}

// function with optimization
function VerifyNumberPrim(num: number, count: number = 2) {
	if (num % count == 0) return false;
	if (count === Math.round(num / 2)) return true; // you can optimize time if the function only reed the half of an array
	count++;
	return VerifyNumberPrim(num, count);
}

//console.log("sub function",Sub(9,2));
//console.log("Mult function",Mult(4,3));
//console.log("Div function",Div(8,2));
//console.log("Pow function",PowNumber(2,3));
//console.log("Fact function",FactNumber(5));
//console.log("Verify function",VerifyNumberPrime(12));
console.log("Verify function", VerifyNumberPrim(12));
