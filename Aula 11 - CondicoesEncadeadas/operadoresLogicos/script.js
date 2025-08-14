function mostrarResultado(){
    let ladoA = parseInt(document.querySelector("#ladoA").value)
    let ladoB = parent(document.querySelector("#ladoB").value)
    let ladoC = parseInt(document.querySelector("#ladoC").value)
    let resultado = document.querySelector("#resultado")
    let ladoAB = ladoA + ladoB
    let ladoAC = ladoA + ladoC
    let ladoBC = ladoB + ladoC

    if(ladoAB > ladoC && ladoAC > ladoB && ladoBC > ladoA){
        console.log("É POSSÍVEL FORMAR UM TRIÂNGULO");   
    }
    else{
        console.log("NÃO É POSSÍVEL FORMAR UM TRIÂNGULO");
    }

}