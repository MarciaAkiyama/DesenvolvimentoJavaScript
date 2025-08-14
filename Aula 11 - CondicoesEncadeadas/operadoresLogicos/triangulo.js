let ladoA = 4
let ladoB = 4
let ladoC = 4

let ladoAB = ladoA + ladoB 
let ladoAC = ladoA + ladoC 
let ladoBC = ladoB + ladoC 


if (ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
    console.log("LADOS VÁLIDOS PARA FORMAR UM TRIÂNGULO");    
    if (ladoA == ladoB && ladoB == ladoC){
        console.log("EQUILÁTERO");    
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        console.log("ISÓSCELES");
    } else {
        console.log("ESCALENO");
    }
} 
    
else {
    console.log("NÃO FOI POSSÍVEL FORMAR UM TRIÂNGULO");
}
