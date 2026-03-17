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

// ------------------- TUS EJERCICIOS 11–15 -------------------

const ejercicio11 = (texto) => {
    let vector = texto
        .split(",")
        .map(v => Number(v.trim()))
        .filter(v => !isNaN(v));
    
    let suma = 0;
    for (let i = 0; i < vector.length; i++) suma += vector[i];
    return suma;
};

const ejercicio12 = (texto) => {
    let vector = texto
        .split(",")
        .map(v => Number(v.trim()))
        .filter(v => !isNaN(v));
    
    let max = vector[0];
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] > max) max = vector[i];
    }
    return max;
};

const ejercicio13 = (texto, valor) => {
    let vector = texto
        .split(",")
        .map(v => Number(v.trim()))
        .filter(v => !isNaN(v));
    
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === Number(valor)) return i;
    }
    return -1;
};

const ejercicio14 = (texto) => {
    let vector = texto
        .split(",")
        .map(v => Number(v.trim()))
        .filter(v => !isNaN(v));
    
    let invertido = [];
    for (let i = vector.length - 1; i >= 0; i--) invertido.push(vector[i]);
    return invertido;
};

const ejercicio15 = (texto) => {
    let vector = texto
        .split(",")
        .map(v => Number(v.trim()))
        .filter(v => !isNaN(v));
    
    let contador = 0;
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] % 2 === 0) contador++;
    }
    return contador;
};

// ------------------- EJERCICIOS 20–25 -------------------

const ejercicio20 = (texto) => {
    let vocales = "aeiouAEIOU";
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }

    return contador;
};

const ejercicio21 = (matriz = [
    [1,2],
    [3,4]
]) => {
    let resultado = [];

    for (let i = 0; i < matriz[0].length; i++) {
        let fila = [];

        for (let j = 0; j < matriz.length; j++) {
            fila.push(matriz[j][i]);
        }

        resultado.push(fila);
    }

    return resultado;
};

const ejercicio22 = (a, b) => {
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;

    return [suma, resta, multiplicacion, division];
};

const ejercicio23 = (a = [1,2,3], b = [4,5]) => {
    let salida = [];

    for (let i = 0; i < a.length + b.length - 1; i++) {
        let suma = 0;

        for (let j = 0; j < a.length; j++) {
            if (i - j >= 0 && i - j < b.length) {
                suma += a[j] * b[i - j];
            }
        }

        salida.push(suma);
    }

    return salida;
};

const ejercicio24 = (arr, valor) => {

    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {

        let medio = Math.floor((inicio + fin) / 2);

        if (arr[medio] === valor) return medio;

        if (arr[medio] < valor) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1;
};

const ejercicio25 = (arr, posiciones) => {

    let resultado = [];
    let k = Math.abs(posiciones) % arr.length;

    for (let i = 0; i < arr.length; i++) {
        let nuevoIndex = (i + k) % arr.length;
        resultado[nuevoIndex] = arr[i];
    }

    return resultado;
};

// ------------------- EXPORT -------------------

export { 
ejercicio1, 
ejercicio2, 
ejercicio3, 
ejercicio4, 
ejercicio5,
ejercicio11,
ejercicio12,
ejercicio13,
ejercicio14,
ejercicio15,
ejercicio20,
ejercicio21,
ejercicio22,
ejercicio23,
ejercicio24,
ejercicio25
};