// Valor gasto pelo usuario.
// Metodo de pagamento
//   - 1 - Boleto/Pix = 10% desconto
//   - 2 - Credito = Valor total

let valorGasto = 1000
let metodoPagamento = 1

if (metodoPagamento == 1) {
    console.log("MÉTODO DE PAGAMENTO BOLETO/PIX");
    let valorFinal = valorGasto * 0.9
    console.log("O valor final foi de " + valorFinal);
}else {
    console.log("MÉTODO DE PAGAMENTO CRÉDITO");
    console.log("O valor final foi de R$ + valorGasto"); 
}

