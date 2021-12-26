var n=prompt("Enter the count");
n=parseInt(n);
var a=3;
var b=6;
console.log(a);
console.log(b);
var nth=2;
while(nth<=n){
    var c=a+b;
    console.log(c);
    a=b;
    b=c;
    nth=nth+1;
}