function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;
    
    if(isNam(num1) || isnam(num2)) {
        resultado = ("Os valores digitados devem ser numéricos.");
    } else{
        switch(operacao) {
            case "+":
                resultado = num1 + num2;
                break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break;
            case "/":
                if(num2!= 0){
                    resultado = num1 / num2;
                } else {
                    resultado = "Não é possível dividir por zero.";
                }
                break;
            default:
                resultado = "Operação inválida.";
        }
    }
    document.getElementById("resultado").textContent = resultado;
}
