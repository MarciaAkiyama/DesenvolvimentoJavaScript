function mostrarResultado(){
    let numero1 = parseInt(document.getElementById("numero1").value)
    let numero2 = parseInt(document.getElementById("numero2").value)
    let operacao = document.getElementById("operacao").value
    let resultado = document.getElementById("resultado")
    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let divisao = numero1 / numero2
    let multiplicacao = numero1 * numero2 

    if (operacao == "soma") {

        resultado.innerHTML = "O resultado é igual a " + soma
    }

    else if (operacao == "subtracao") {

        resultado.innerHTML = "O resultado é igual a " + subtracao

    } 
    
    else if (operacao == "divisao") {
        
        resultado.innerHTML = "O resultado é igual a " + divisao

    }

    else if (operacao == "multiplicacao") {
        
        resultado.innerHTML = "O resultado é igual a " + multiplicacao
        //resultado.innerHTML = `A multiplicação entre ${numero1} e ${numero2} é igual ${multiplicacao}`
    }

}