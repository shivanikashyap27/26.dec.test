var a = 2,b = 5;
var N=10;
var findNthTerm = (first, second,num) => {
	var diff=second -first;
	var fact=(num-1)*diff;
	var term=first+fact;
	return term;
};
console.log(findNthTerm(a,b,N));