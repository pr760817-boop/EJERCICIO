
function showOddNumbers(limit) {
    let resultado = "";
    let i = 1;

    do {
        if (i % 2 !== 0) {
            resultado += i + " ";
        }
        i++;
    } while (i <= limit);

    return resultado.trim();
}

export function procesarLimite() {
    const limite = parseInt(document.getElementById("numeroInput").value);
    const salida = document.getElementById("resultados");

    if (isNaN(limite) || limite <= 0) {
        salida.innerHTML = "❌ Ingresa un número válido y mayor que 0";
        return;
    }
    const impares = showOddNumbers(limite);
    salida.innerHTML = `<p>Números impares hasta ${limite}:<br><strong>${impares}</strong></p>`;
}

export { showOddNumbers };