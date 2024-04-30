alert("This program will allow you to perform the following arithmetic operations:\n1. Area of a square. \n2. Perimeter of a rectangle. \n3. Area of a rectangle. \n4. Area of a triangle. \n5. Circumference of a circle. \n6. Area of a circle.");
var All = prompt("To calculate the area of a square type 'u'. \n To calculate the perimeter of rectangle type 'v'. \n To compute the area of rectangle type 'w'. \n To compute the area of triangle type 'x'. \n To compute the circumference of a circle type 'y'. \n To compute the area of a circle type 'z'");

if(All == "u" || All == "U"){
    let SL = prompt(`Input length of the square`);
    function SquareArea(SL){
       var A = SL * SL;
       alert(A)
     }
   SquareArea(SL)
}

else if(All == "v" || All == "V"){  
    let RL = Number(prompt(`Input length of the rectangle`))
    let RB = Number(prompt(`Input breath of the rectangle`))
    function RecPerimeter(RL, RB){
        let P = RL + RB
        alert(P)
    }
    RecPerimeter(RL, RB)
}

else if(All == "w" || All == "W"){
    let L = prompt(`Input length of the rectangle`)
let B = prompt(`Input breath of the rectangle`)
function RecArea(L, B){
    let AR = L * B
    alert(AR)
}
RecArea(L, B);
}

else if(All == "x" || All == "X"){
    let base = Number(prompt(`Input base of the triangle`))
let h = Number(prompt(`Input height of the triangle`))
function TriArea(base, h){
    let AT = 0.5 * base * h
    alert(AT)
}
TriArea(base, h);
}

else if (All == "y" || All == "Y"){
    let radius = Number(prompt(`Input the radius of the circle`))
function Circumference(radius){
    const pi = 3.14;
    let C = 2 * pi * radius
    alert(C);
}
Circumference(radius);
}

else if (All == "z" || All == "Z"){
    let radius2 = Number(prompt(`Input the radius of the circle`))
function Circumference(radius2){
    const pi = 3.14;
    let AC = pi * radius2 ** 2
    alert(AC);
}
Circumference(radius2);
}

else{
    alert("Invalid option.");
}



