var n=prompt("enter no.");
booll=true;
if (n === 1) {
    console.log("1 is not prime.");
}
for(i = 2; i <= n - 1; i++)
{
   if (n % i == 0) 
   {
   booll = false;
   break;
   }
}
if (booll == true)
{
    alert(n + " is prime");
}
else
{
    alert(n + " is not prime");
}