function showOddNumbers(limit) {
    let resultado = "";
    let i = 1;
    do {
        if (i % 2 !== 0) resultado += i + " ";
        i++;
    } while (i <= limit);
    return resultado.trim();
}

export function procesarLimite(n) {
    const limite = parseInt(n);
    if (isNaN(limite) || limite <= 0) {
        return { result: "❌ Ingresa un número válido mayor que 0" };
    }
    const impares = showOddNumbers(limite);
    return { result: `Números impares hasta ${limite}: ${impares}` };
}