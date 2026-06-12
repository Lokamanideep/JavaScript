console.log("Hi Loka");
var a = 9
var b = 17.7643
var c = "hero"
var d = true
var e = "10"
console.log(a + b)
console.log(c, d)
if (a == b) {
    console.log("Equal")
} else if (a !== e) {
    console.log("=== checking here")
} else {
    console.log("Not Equal")
}
var y = 2004
if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0)
    console.log("Leap year")
else
    console.log("Not A Leap Year")

var aa = 3; 
var z = true; 
    if (aa <= 1) {
        z = false; 
    } else {
        for (var i = 2; i <= Math.sqrt(aa); i++) { 
            if (aa % i == 0) {
                z = false; 
                break;
            }
        }
    }
    if (z) {
        console.log("prime"); 
    } else {
        console.log("Not prime");
    }
    
