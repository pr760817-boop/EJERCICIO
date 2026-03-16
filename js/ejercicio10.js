
function generateFibonacci(terms) {
    let resultado = [];

    let a = 0, b = 1;
    let contador = 1;

    while (contador <= terms) {
        resultado.push(a);

        let temp = a + b;
        a = b;
        b = temp;

        contador++;
    }

    return resultado.join(" ");
}

export function procesarTerminos() {
    const terms = parseInt(document.getElementById("numeroInput").value);
    const salida = document.getElementById("resultados");

    if (isNaN(terms) || terms <= 0) {
        salida.innerHTML = "❌ Ingresa un número válido mayor que 0";
        return;
    }

    const secuencia = generateFibonacci(terms);

    
    salida.innerHTML = `
        <p>Secuencia Fibonacci (${terms} términos):<br>
        <strong>${secuencia}</strong></p>
    `;
}

export { generateFibonacci };
