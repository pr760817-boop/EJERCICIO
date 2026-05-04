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

export function procesarTerminos(n) {
    const terms = parseInt(n);
    if (isNaN(terms) || terms <= 0) {
        return { result: "❌ Ingresa un número válido mayor que 0" };
    }
    const secuencia = generateFibonacci(terms);
    return { result: `Secuencia Fibonacci (${terms} términos): ${secuencia}` };
}