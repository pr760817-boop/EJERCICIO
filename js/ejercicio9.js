
function calculatePower(base, exponent) {
    let resultado = 1;

    for (let i = 1; i <= exponent; i++) {
        resultado *= base;
    }

    return resultado;
}

export function mostrarPotencia() {
    const base = parseFloat(document.getElementById("numero1").value);
    const exponent = parseFloat(document.getElementById("numero2").value);
    const salida = document.getElementById("resultados");

    if (isNaN(base) || isNaN(exponent)) {
        salida.innerHTML = "❌ Ingresa números válidos";
        return;
    }

    
    const potencia = calculatePower(base, exponent);

    
    salida.innerHTML = `
        <p>La potencia de <strong>${base}</strong> elevado a <strong>${exponent}</strong> es:<br>
        <strong>${potencia}</strong></p>
    `;
}

export { calculatePower };