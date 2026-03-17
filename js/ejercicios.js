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
const ejercicio26 = (a = []) => {
    if (!a.length) return "Datos inválidos";

    let mejorSuma = -Infinity;
    let mejorSubarray = [];

    for (let i = 0; i < a.length; i++) {
        let suma = 0;
        let temp = [];

        for (let j = i; j < a.length; j++) {
            suma += a[j];
            temp.push(a[j]);

            if (suma > mejorSuma) {
                mejorSuma = suma;
                mejorSubarray = [...temp];
            }
        }
    }

    return { mejorSubarray, mejorSuma };
};

const ejercicio27 = () => {
    const a = [1, 3, 5];
    const b = [2, 4, 6];

    let resultado = [];
    let i = 0, j = 0;

    while (i < a.length && j < b.length) {
        resultado.push(a[i] < b[j] ? a[i++] : b[j++]);
    }

    return resultado.concat(a.slice(i), b.slice(j));
};

const ejercicio28 = (a, b) => {
    function criba(limit) {
        let primes = Array(limit + 1).fill(true);
        primes[0] = false;
        primes[1] = false;

        for (let i = 2; i * i <= limit; i++) {
            if (primes[i]) {
                for (let j = i * i; j <= limit; j += i) {
                    primes[j] = false;
                }
            }
        }

        let resultado = [];
        for (let k = 2; k <= limit; k++) {
            if (primes[k]) resultado.push(k);
        }

        return resultado;
    }

    return criba(a);
};

const ejercicio29 = (a, b) => {
    let resultado = [];

    for (let i = 0; i < a.length; i++) {
        let fila = [];
        for (let j = 0; j < b[0].length; j++) {
            let suma = 0;
            for (let k = 0; k < a[0].length; k++) {
                suma += a[i][k] * b[k][j];
            }
            fila.push(suma);
        }
        resultado.push(fila);
    }
    return resultado;
};

const ejercicio30 = (a = []) => {
    if (!Array.isArray(a)) return "Error";

    const mezclar = (izq, der) => {
        let res = [];
        let i = 0, j = 0;

        while (i < izq.length && j < der.length)
            res.push(izq[i] < der[j] ? izq[i++] : der[j++]);

        return res.concat(izq.slice(i), der.slice(j));
    };

    return resultado;
};

export { 
ejercicio1, 
ejercicio2, 
ejercicio3, 
ejercicio4, 
ejercicio5,
ejercicio20,
ejercicio21,
ejercicio22,
ejercicio23,
ejercicio24,
ejercicio25,
ejercicio26,
ejercicio27,
ejercicio28,
ejercicio29,
ejercicio30,
};
