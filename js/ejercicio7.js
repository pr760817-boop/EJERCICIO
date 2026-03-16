function mostrarSuma() {
    const zona = document.getElementById("zona-dinamica");

    zona.innerHTML = `
        <label>Inicio:</label>
        <input type="number" id="inicioInput">

        <label>Fin:</label>
        <input type="number" id="finInput">

        <button id="btnSumaPares">Calcular suma de pares</button>

        <p id="resultadoSumaPares"></p>
    `;

    document
        .getElementById("btnSumaPares")
        .addEventListener("click", calcularSumaPares);
}

function sumEvenNumbers(start, end) {
    let suma = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }

    return suma;
}

function calcularSumaPares() {
    const inicio = parseInt(document.getElementById("inicioInput").value);
    const fin = parseInt(document.getElementById("finInput").value);
    const resultado = document.getElementById("resultadoSumaPares");

    if (isNaN(inicio) || isNaN(fin)) {
        resultado.textContent = "❌ Ingresa valores válidos";
        return;
    }

    const suma = sumEvenNumbers(inicio, fin);

    resultado.textContent =
        `La suma de los números pares entre ${inicio} y ${fin} es: ${suma}`;
}

export { mostrarSuma };