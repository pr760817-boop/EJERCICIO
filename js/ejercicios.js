const ejercicio1 = () => {
    let numeros = [];
    for (let i = 1; i <= 10; i++) {
        numeros.push(i);
    }
    return numeros;
};

const ejercicio2 = () => {
    let suma = 0;
    let i = 1;

    while (i <= 100) {
        suma += i;
        i++;
    }

    return suma;
};

const ejercicio3 = (a, b) => {
    let pares = [];

    let inicio = Math.min(a, b);
    let fin = Math.max(a, b);

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    return pares;
};
const ejercicio4 = () => {
    let mensaje = "";
    let i = 1;

    do {
        mensaje += `5 x ${i} = ${5 * i}\n`;
        i++;
    } while (i <= 10);

    return mensaje;
};

const ejercicio5 = (numero) => {
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    return factorial;
};

export { ejercicio1, ejercicio2, ejercicio3, ejercicio4, ejercicio5 };