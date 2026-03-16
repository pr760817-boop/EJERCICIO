function contadorRegresivo(number) {
    let resultado = [];
    while (number >= 0) {
        resultado.push(number);
        number--;
    }
    const resultadosDiv = document.getElementById("resultados");
    if(resultadosDiv) {
        resultadosDiv.textContent = "Cuenta regresiva: " + resultado.join(", ");
    }
    console.log("Cuenta regresiva:", resultado.join(", "));
}
export { contadorRegresivo }