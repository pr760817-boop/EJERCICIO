function sumEvenNumbers(start, end) {
    let suma = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) suma += i;
    }
    return suma;
}

export function mostrarSuma(n1, n2) {
    const inicio = parseInt(n1);
    const fin = parseInt(n2);

    if (isNaN(inicio) || isNaN(fin)) {
        return { result: "❌ Ingresa valores válidos en Número 1 y 2" };
    }

    const suma = sumEvenNumbers(inicio, fin);
    return { result: `La suma de pares entre ${inicio} y ${fin} es: ${suma}` };
}